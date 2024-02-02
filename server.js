const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();
const port = 3000;

//  parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// call routes
const  bookRoute = require('./routes/bookRoute');
const  memberRoute = require('./routes/memberRoute')
const  loanRoute = require('./routes/loanRoute')

bookRoute(app);
memberRoute(app);
loanRoute(app);

// register the routes menu from index
app.use('/auth', require('./middleware'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});