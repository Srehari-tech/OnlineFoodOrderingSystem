const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000 || process.env.PORT;

app.use(express.json({ extended: false }));
app.use(cors());
app.use('/', (req, res) => {
  res.send('Online Food Ordering System');
});
app.listen(port, () => `Server running on port ${3000}`);
