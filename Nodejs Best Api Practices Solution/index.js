const express = require('express');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const campaigns = require('./routes/campaigns');
const donations = require('./routes/donations');
const users = require('./routes/users');
const errorHandler = require('./middleware/error');

const app = express();
app.use(express.json());

// Swagger setup
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/v1/campaigns', campaigns);
app.use('/api/v1/donations', donations);
app.use('/api/v1/users', users);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));