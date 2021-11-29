const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
// const bodyParser = require('body-Parser');
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const path = require("path");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(formidable());
   
const url =
  "mongodb+srv://Compugeen:Compugeen@cluster0.6ljvh.mongodb.net/Laundry?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const formSchema = new mongoose.Schema(
  Object,

  {
    collection: "order_form",
  }
);

const Form = mongoose.model("Form", formSchema);

const formData = (bodyData) => {
  Form({ data: bodyData }).save((err) => {
    if (err) {
      throw err;
    }
  });
  Form(bodyData).save((err) => {
    if (err) {
      throw err;
    }
  });
};

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/main.js" , (req, res) => {
  res.sendFile(path.join(__dirname, "main.js"));
});
app.get("/orders.js" , (req, res) => {
  res.sendFile(path.join(__dirname, "orders.js"));
});
app.get("/reset.js" , (req, res) => {
  res.sendFile(path.join(__dirname, "reset.js"));
});


//for signup
app.get("/orders.js" , (req, res) => {
  res.sendFile(path.join(__dirname, "signUp.js"));
});





//end of signup


app.get("/", (req, res) => {
  res.render("Homepage");
});
app.get("/index", (req, res) => {
  res.render("index")
});
app.get("/sign", (req, res) => {
  res.render("sign");
});
app.get("/ResetPassword", (req, res) => {
  res.render("ResetPassword");
});
app.get("/service", (req, res) => {
  res.render("service");
});
app.get("/pricing", (req, res) => {
  res.render("pricing");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/order", (req, res) => {
  res.render("order");
})
app.get("/platinum", (req, res) => {
  res.render("platinum");
})


app.post("/order", (req, res) => {
  console.log(req.body);
  formData(req.body);
  res.send(true);
});
app.post("/contact", (req, res) => {
  console.log(req.fields);
  res.render("contact");
});

const userRoute = require("./routes/userRoute");
const subscriptionRoute = require("./routes/subscriptionRoute");

app.use("/api/v1/user", userRoute);
app.use("/api/v1/subscription", subscriptionRoute);

server.listen(5000);
