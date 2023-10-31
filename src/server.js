require('dotenv').config();

const express = require('express');

const userRoutes = require('./routes/users');
const employeeRoutes = require('./routes/employees');

// add route for swagger document API
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../src/swagger.json');


const app = express();

app.use(express.json());

// add route for swagger document API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', userRoutes);
app.use('/employees', employeeRoutes);



const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});