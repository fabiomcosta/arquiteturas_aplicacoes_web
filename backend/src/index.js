import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import next from 'next';

import graphQLSchema from './schema';
import { getUser } from './schema/data';

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = Number(process.env.PORT) || 4000;

const app = next({ dev: IS_DEV });
const handle = app.getRequestHandler();

// Returns the currently logged user based on a token that is probably either
// on a header or cookie.
async function getViewerFromToken(token) {
  return getUser(1);
}

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.all('/graphql', async ctx => {
    const { request, response } = ctx;
    const token = request.headers.authorization || '';
    const viewer = await getViewerFromToken(token);
    return graphqlHTTP({
      schema: graphQLSchema,
      graphiql: IS_DEV,
      context: { viewer }
    })(ctx);
  });

  router.all('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
    console.log(`> Graphiql is available on http://localhost:${PORT}/graphql`);
  });
});
