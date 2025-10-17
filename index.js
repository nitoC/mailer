const exress = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todoModel = require("./models/todoModel");
const userModel = require("./models/userModel");
const cors = require("cors");
const app = exress();
const path = require("path");
const sendMail = require("./utils/nodemailer");
dotenv.config();

const PORT = process.env.PORT || 9000;
const CONNURI = process.env.CONNURI;

app.use(exress.json());
app.use(exress.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// mongoose
//   .connect(`${CONNURI}/todo-app`)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("bad request");
    }
    const user = await userModel.create({ email, password });
    if (user) return res.status(201).json({ message: "signup successful" });
  } catch (err) {
    if (err.message === "bad request") {
      return res.status(400).json({ message: "bad request" });
    }
    res.status(500).json("bad request");
  }
});

app.listen(PORT, () => {
  sendMail();
  console.log(`Server is running on http://localhost:${PORT}`);
});
