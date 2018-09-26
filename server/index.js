const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./databae');

//Setting
app.set('port', process.env.PORT || 3000);

const hostname = 'localhost';
const porDb = '4200';

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: `http://${hostname}:${porDb}`}));

// Routers
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/users', require("./routes/user.routes"));
app.use('/api/category', require("./routes/category.routes"));

//Start service
app.listen(app.get('port') , () => {
    console.log(`Server started on `+app.get('port'));
});