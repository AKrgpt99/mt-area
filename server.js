const express = require("express");
const cors = require("cors");

const { getAreas } = require("./utils/areas");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/areas", (_, res) => {
  return res.send({ data: { areas: getAreas() } });
});

app.listen(port, () => console.log(`server running on port: ${port}`));
