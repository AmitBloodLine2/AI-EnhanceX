const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

app.listen(port,() => {
  console.log("Server Started");
});

app.use(cors ({
    origin: ['http://localhost:3000']
}));
