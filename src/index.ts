import { ApolloServer } from 'apollo-server';
import {typeDefs} from "./graphql/schema";
import {resolvers} from "./graphql/resolvers";
import {apolloPort} from "./config.env";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // allowed introspection for the demo
});

server.listen(apolloPort).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
