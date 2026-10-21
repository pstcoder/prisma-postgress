import "dotenv/config";

import express from "express";
import routes from "./routes.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello Worasdld!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});