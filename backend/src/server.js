const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const importRoutes = require("./routes/importRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/import", importRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});