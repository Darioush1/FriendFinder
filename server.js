const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const multer = require('multer');

//storage engine
const storage = multer.diskStorage({
  destination:'./public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.origianlname));  
  }
});

const uploads = multer ({
  storage: storage
}).single('userPhoto')

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('home', {layout: 'main'}));
app.get('/survey', (req,res) => res.render('survey', {layout: 'main'}));
app.get('/contact', (req,res) => res.render('contact', {layout: 'main'}))
app.get('/portfolio', (req, res) => res.render('portfolio', {layout: 'main'}))
app.get('/popQuiz', (req, res) => res.render('popQuiz', {layout: 'jqueryPortfolio'}))

app.post('/upload', (req, res) => {
  res.send('Test')
})


require("./app/routing/htmlRoutes")(app);
require('./app/routing/apiRoutes')(app);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("App is listening to " + PORT);
    return Promise.resolve("Dummy response to keep the console quiet");
  })