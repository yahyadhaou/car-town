var car = require("./Car");

async function getAll(req, res) {
  const cars = await car.find({}).populate({ path: "_id", select: "name" });
  res.send(cars);
}

function createOne(req, res) {
  console.log(req.user);
  car
    .insertMany({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      nmr : req.body.nmr,
      userId: req.user["_id"],
    })
    .then((data) => {
      res.send(data);
    });
}

function updateOne(req, res) {
  console.log(req.params);

  // console.log(id);
  car
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        price: req.body.price,
      }
    )
    .then(() => {
      res.send("updated");
    })
    .catch((err) => {
      res.send(err);
    });
}

function deleteOne(req, res) {
  console.log(req.params);
  let id = req.params.id;
  console.log(id);
  car
    .findByIdAndDelete(id)
    .then(() => {
      res.send("deleted");
    })
    .catch((err) => {
      res.send(err);
    });
}

function getOne(req, res) {
  car
    .findById(req.params.id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
}


module.exports = { deleteOne, updateOne, createOne, getAll, getOne };
