const Koa = require('koa');
const Router = require('koa-router');
const graphqlHTTP = require('koa-graphql');
const next = require('next');

const graphQLSchema = require('./schema');

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = Number(process.env.PORT) || 4000;

const app = next({ dev: IS_DEV });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.all(
    '/graphql',
    graphqlHTTP({
      schema: graphQLSchema,
      graphiql: IS_DEV
    })
  );

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
