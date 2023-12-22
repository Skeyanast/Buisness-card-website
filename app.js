const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(dirname, 'Сайт-визитка')));
app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'Сайт-визитка', 'main.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(dirname, 'Сайт-визитка', 'about.html'));
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(dirname, 'Сайт-визитка', '404.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});