// routes/form.js
const express = require('express');
const router = express.Router();
const db = require('../firebase');
router.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;
  console.log(email,name,message)
  try {
    await db.collection('Formdata').add({
      name,
      email,
      message,
      timestamp: new Date()
    });
    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Error writing document: ', error);
    res.status(500).send('Error submitting form');
  }
});

module.exports = router;
