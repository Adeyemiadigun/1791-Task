const express = require('express');
const Joi = require('joi');
const router = express.Router();

// In-memory store
let campaigns = [];
let nextId = 1;

// Validation schema
const campaignSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  goal: Joi.number().positive().required(),
  end_date: Joi.date().iso().required(),
  email: Joi.string().email().required()
});

// Create campaign
router.post('/', (req, res, next) => {
  const { error, value } = campaignSchema.validate(req.body);
  if (error) return next({ status: 400, message: error.message });
  const newCampaign = { id: nextId++, amount_donated: 0, ...value };
  campaigns.push(newCampaign);
  res.status(201).json(newCampaign);
});

// Read all
router.get('/', (req, res) => {
  res.json({ campaigns });
});

// Read single
router.get('/:id', (req, res, next) => {
  const c = campaigns.find(c => c.id === +req.params.id);
  if (!c) return next({ status: 404, message: 'Not found' });
  res.json({ campaign: c });
});

// Update campaign
router.put('/:id', (req, res, next) => {
  const { error, value } = campaignSchema.validate(req.body);
  if (error) return next({ status: 400, message: error.message });
  const idx = campaigns.findIndex(c => c.id === +req.params.id);
  if (idx === -1) return next({ status: 404, message: 'Not found' });
  campaigns[idx] = { ...campaigns[idx], ...value };
  res.json(campaigns[idx]);
});

// Delete campaign
router.delete('/:id', (req, res, next) => {
  const idx = campaigns.findIndex(c => c.id === +req.params.id);
  if (idx === -1) return next({ status: 404, message: 'Not found' });
  campaigns.splice(idx, 1);
  res.status(204).end();
});

module.exports = router;