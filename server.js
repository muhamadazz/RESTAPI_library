const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//  parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// call routes
const  bookRoute = require('./routes/bookRoute');
const  memberRoute = require('./routes/memberRoute')
const  loanRoute = require('./routes/loanRoute')

bookRoute(app);
memberRoute(app);
loanRoute(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});