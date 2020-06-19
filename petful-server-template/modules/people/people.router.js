const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  const people = People.get();
    
  if (!people) {
    return res.status(404).json({
      error: { message: 'There Are No Pets!' }
    });
  }
  res.json(people);
 
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
});

module.exports = router;
