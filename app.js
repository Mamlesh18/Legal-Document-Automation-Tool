const express = require("express");
const { collection, collection1 } = require("./mongo"); // Import both collections
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.status(500).json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  const data = {
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await collection.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    res.status(500).json("fail");
  }
});


app.get("/signup", async (req, res) => {
  try {
    const data = await collection.find({});
    res.json(data);
  } catch (e) {
    res.status(500).json(e);
  }
});
app.post("/resume", async (req, res) => { // Endpoint for signup1
  const { name,email,phone,number,dob,gender,city,state,country,linkedin,summary,degree,institution,field,year,gpa,job,company,dates,description,skills1,skills2,jobtype,start,notice,nation
  } = req.body;

  const data = {
    name:name,
    email:email,
    phone:phone,
    number:number,
    dob:dob,
    gender:gender,
    city:city,
    state:state,
    country:country,
    linkedin:linkedin,
    summary:summary,
    degree:degree,
    institution:institution,
    field:field,
    year:year,
    gpa:gpa,
    job:job,
    company:company,
    dates:dates,
    description:description,
    skills1:skills1,
    skills2:skills2,
    jobtype:jobtype,
    start:start,
    notice:notice,
    nation:nation
  };

  app.get("/resume", async (req, res) => {
    try {
      const data = await collection1.find({});
      res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  });
  try {
    const check = await collection1.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await collection1.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

app.listen(8000, () => {
  console.log("port connected");
});
