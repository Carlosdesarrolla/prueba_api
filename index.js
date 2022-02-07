const path = require('path');
const express = require('express');

const app = express();
const routes = require('./routes/index.js');

// db settings

// settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(routes);

// satic files
app.use(express.static(path.join(__dirname, 'public')));

// bootstraping the app
app.listen(app.get('port'), () =>{
    console.log('server on port',app.get('port'))
});
