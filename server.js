const express = require("express");
const path = require("path");
const password = require("./config");
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const router = express.Router();
// Define API routes here
//Initialize API
router.get('/api', function(req, res){
  res.send('API initialized');
})

//Register API routes
app.use('/api', router);
router.route('/send')
  .post(function(req,res){
   
let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'gramsbdaniel@gmail.com',
    pass:  password.password
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: '"Daniel" <gramsbdaniel@gmail.com',
  to: 'gramsbdaniel@gmail.com',
  subject: 'CalSolar Quote From ' + req.body.name,
  html: `<p> <h1>Quote request from ${req.body.name}.</h1> <br>You can contact them at ${req.body.phone} Or email them at ${req.body.email}.<br>Their address is ${req.body.streetAddress} ${req.body.city} ${req.body.state} ${req.body.zip}<br>Their utility company is ${req.body.utility} and their monthy bill is ${req.body.monthlyBill} <br> and their roof has ${req.body.shade} shade coverage.</p>`  
};

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });
  })
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
