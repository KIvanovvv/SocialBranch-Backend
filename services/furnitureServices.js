const Furniture = require("../models/Furniture.js");

async function create(data, ownerId) {
  const { make, model, year, description, price, img, material } = data;
  const item = await Furniture.create({
    make: make,
    model: model,
    year: year,
    description: description,
    price: price,
    imageUrl: img,
    material: material,
    _ownerId: ownerId,
  });
  console.log(item);
  return item;
}

async function getAllItems() {
  const items = await Furniture.find({});
  return items;
}

async function getItemById(id) {
  const item = await Furniture.findById(id);
  return item;
}

async function getItemsByOwnerId(ownerId) {
  const items = await Furniture.find({ _ownerId: ownerId });
  return items;
}

module.exports = {
  create,
  getAllItems,
  getItemById,
  getItemsByOwnerId,
};
