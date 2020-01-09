export const PORT = Number(process.env.PORT) || 4000;
export const ORIGIN = `http://localhost:${PORT}`;
export const GRAPHQL_PATH = '/graphql';
export const GRAPHQL_URL = `${ORIGIN}${GRAPHQL_PATH}`;
