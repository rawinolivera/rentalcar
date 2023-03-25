const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//get request for all (READ)
const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('rentalcar').collection('client').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

//get request for single (READ)
const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb().db('rentalcar').collection('client').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

  // post request )(CREATE)
const newClient = async (req, res, next) => {
    const contact = {
      docNumber: req.body.docNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber
    };
    const response = await mongodb
      .getDb().db('rentalcar').collection('client').insertOne(contact);
    if(response.acknowledged){
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not created");
    }
  };

  //put request (update)
const updateClient = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        docNumber: req.body.docNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    };
    const response = await mongodb
      .getDb().db('rentalcar').collection('client').replaceOne({ _id: contactId }, contact);
    if(response.acknowledged){
      res.status(204).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not updated");
    }
  };

  //delete request (DELETE)
const deleteClient = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb().db('rentalcar').collection('client').deleteOne({ _id: contactId }, true);
    if(response.acknowledged){
      res.status(200).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not deleted");
    }
  }

module.exports = { getAll, getSingle, newClient, updateClient, deleteClient }