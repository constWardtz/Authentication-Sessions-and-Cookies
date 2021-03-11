const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoDBSession = require("connect-mongodb-session")(session);
const connectDB = require("./config/db");
const { mongoURI } = require("./config/mongoURI.json");

const app = express();

const store = new MongoDBSession({
  uri: mongoURI,
  collection: "sessions",
});

connectDB();

app.use(
  session({
    secret: "Secret Key!",
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/auth"));

const PORT = 8080 || process.env.PORT;
app.listen(PORT);
