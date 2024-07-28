const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const author = "azfir@xtermai";

app.use(cors());
app.set('json spaces', 2);


app.get('/api/tes', (req, res) => {
  res.json({ tes: "Tes" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});