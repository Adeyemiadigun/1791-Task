const express = require('express');
const Joi = require('joi');
const router = express.Router();

// In-memory store
const donations = [];
let nextId = 1;

// Validation schema
const donationSchema = Joi.object({
  campaignId: Joi.number().integer().required(),
  amount: Joi.number().positive().required(),
  donorName: Joi.string().required(),
  donorEmail: Joi.string().email().required(),
  cardNumber: Joi.string().creditCard().required(),
  expirationDate: Joi.string().required(),
  cvv: Joi.string().length(3).required()
});

router.post('/', (req, res, next) => {
  const { error, value } = donationSchema.validate(req.body);
  if (error) return next({ status: 400, message: error.message });
  const newDonation = { id: nextId++, ...value, date: new Date().toISOString() };
  donations.push(newDonation);
  res.status(201).json(newDonation);
});

module.exports = router;