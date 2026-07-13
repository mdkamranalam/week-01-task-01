import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint 1
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello from my backend!",
  });
});

// Endpoint 2
app.get("/profile", (req, res) => {
  res.json({
    name: "Kamran",
    role: "Backend Engineering Intern",
    learning: "Express.js",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
