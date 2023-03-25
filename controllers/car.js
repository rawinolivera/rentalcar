const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//get request for all (READ)
const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('rentalcar').collection('car').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

//get request for single (READ)
const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb().db('rentalcar').collection('car').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

  // post request )(CREATE)
const newcar = async (req, res, next) => {
    const contact = {
      licensePlate: req.body.licensePlate,
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      typeOfCar: req.body.typeOfCar,
      pricePerDay: req.body.pricePerDay,
      status: req.body.status
    };
    const response = await mongodb
      .getDb().db('rentalcar').collection('car').insertOne(contact);
    if(response.acknowledged){
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not created");
    }
  };

  //put request (update)
const updatecar = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        licensePlate: req.body.licensePlate,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color,
        typeOfCar: req.body.typeOfCar,
        pricePerDay: req.body.pricePerDay,
        status: req.body.status
    };
    const response = await mongodb
      .getDb().db('rentalcar').collection('car').replaceOne({ _id: contactId }, contact);
    if(response.acknowledged){
      res.status(204).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not updated");
    }
  };

  //delete request (DELETE)
const deletecar = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb().db('rentalcar').collection('car').deleteOne({ _id: contactId }, true);
    if(response.acknowledged){
      res.status(200).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not deleted");
    }
  }

module.exports = { getAll, getSingle, newcar, updatecar, deletecar }