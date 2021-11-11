import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

import mongoose from "mongoose";

import { typeDefs } from "./graphql/schema/mainSchema.js";
import { resolvers } from "./graphql/resolvers/mainResolvers.js";
import { isAuth } from "./functions/isAuth.js";

const app = express();

app.use(bodyParser.json());

dotenv.config({
  path: ".env",
});

app.use(isAuth);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  formatError: (error) => {
    return error;
  },
  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

server.applyMiddleware({ app });
app.use(cors());
app.options("*", cors());

// var allowedOrigins = ["http://localhost:3000", "*","192.168.0.38:3000"];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin
//       // (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   })
// );

//DB config
const db = process.env.DB_URL;
console.log(process.env.DB_URL);
const port = process.env.PORT;
const graphPath = process.env.GRAPHQL_PATH;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connected");
    app.listen(port, () =>
      console.log(`🚀 Server ready at http://localhost:${port}${graphPath}  `)
    );
  })
  .catch((err) => {
    console.log(err);
  });
