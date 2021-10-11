import http from "http";
import express from "express";
import { execute, subscribe } from "graphql";
import { ApolloServer } from "apollo-server-express";
import { SubscriptionServer } from "subscriptions-transport-ws";
import schema from "./graphql/schemasMap";
import configs from "./configs";

async function startApolloServer() {
  const app = express();

  const httpServer = http.createServer(app);

  const subscriptionServer = SubscriptionServer.create(
    { execute, subscribe, schema },
    { server: httpServer, path: "/subscription" }
  );

  const server = new ApolloServer({
    schema,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            }
          };
        }
      }
    ]
  });

  await server.start();

  server.applyMiddleware({ app, path: "/query" });

  httpServer.listen(configs.server.port, () => {
    console.log(
      `🚀 Server ready at ${configs.server.hostname}:${configs.server.port}${server.graphqlPath}`
    );
  });
}

startApolloServer();
