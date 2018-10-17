const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");

    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5bc780e8ef759417744bc885") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );

    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );

    db.collection("Users")
      .find({ name: "Stefan" })
      .toArray()
      .then(
        users => {
          console.log("Todos");
          console.log(JSON.stringify(users, undefined, 2));
        },
        err => {
          console.log("Unable to fetch users", err);
        }
      );

    // db.close();
  }
);
