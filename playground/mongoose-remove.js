const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: "5bce114a68a1d52632b3bca9" }).then((todo = {}));

Todo.findByIdAndRemove("5bce114a68a1d52632b3bca9").then(todo => {
  console.log(todo);
});
