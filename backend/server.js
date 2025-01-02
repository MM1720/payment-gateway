const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./backend/.env" });

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use payment routes
app.use("/api", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
