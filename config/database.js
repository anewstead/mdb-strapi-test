module.exports = ({ env }) => {
  const mdbURI =
    "mongodb://" +
    env("MDB_USER") +
    ":" +
    env("MDB_PASS") +
    "@cluster0-shard-00-00.vceqp.mongodb.net:27017,cluster0-shard-00-01.vceqp.mongodb.net:27017,cluster0-shard-00-02.vceqp.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-nx0v7x-shard-0&authSource=admin&retryWrites=true&w=majority";

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "mongoose",
        settings: {
          uri: mdbURI,
        },
        options: {
          ssl: true,
        },
      },
    },
  };
};

// DEFAULT INSTALL
// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         host: env("DATABASE_HOST", "127.0.0.1"),
//         srv: env.bool("DATABASE_SRV", false),
//         port: env.int("DATABASE_PORT", 27017),
//         database: env("DATABASE_NAME", "mdb-strapi-test"),
//         username: env("DATABASE_USERNAME", ""),
//         password: env("DATABASE_PASSWORD", ""),
//       },
//       options: {
//         authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
//         ssl: env.bool("DATABASE_SSL", false),
//       },
//     },
//   },
// });
