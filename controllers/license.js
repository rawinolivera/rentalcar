const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//get request for all (READ)
const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('rentalcar').collection('license').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

//get request for single (READ)
const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb().db('rentalcar').collection('license').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

  // post request )(CREATE)
const newlicense = async (req, res, next) => {
    const contact = {
      number: req.body.number,
      issueDate: req.body.issueDate,
      expirationDate: req.body.expirationDate,
      country: req.body.country
    };
    const response = await mongodb
      .getDb().db('rentalcar').collection('license').insertOne(contact);
    if(response.acknowledged){
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not created");
    }
  };

  //put request (update)
const updatelicense = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        number: req.body.number,
        issueDate: req.body.issueDate,
        expirationDate: req.body.expirationDate,
        country: req.body.country
    };
    const response = await mongodb
      .getDb().db('rentalcar').collection('license').replaceOne({ _id: contactId }, contact);
    if(response.acknowledged){
      res.status(204).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not updated");
    }
  };

  //delete request (DELETE)
const deletelicense = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb().db('rentalcar').collection('license').deleteOne({ _id: contactId }, true);
    if(response.acknowledged){
      res.status(200).json(response);
    } else {
      res.status(500).json(response.error || "Error, contact not deleted");
    }
  }

module.exports = { getAll, getSingle, newlicense, updatelicense, deletelicense }