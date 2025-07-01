const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const DB = process.env.DB_NAME;

app.get('/', (req, res) => {
  res.send(`Backend up! Connected to DB: ${DB}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
