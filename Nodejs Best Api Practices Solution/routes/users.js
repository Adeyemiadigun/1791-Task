const express = require('express');
const Joi = require('joi');
const router = express.Router();

// In-memory store
const users = [];
let nextId = 1;

// Validation schema
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required()
});

// Create user
router.post('/', (req, res, next) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) return next({ status: 400, message: error.message });
  const newUser = { id: nextId++, ...value };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Read all
router.get('/', (req, res) => {
  res.json({ users });
});

module.exports = router;