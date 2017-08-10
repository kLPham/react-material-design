const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
const publicPath = express.static(path.resolve(path.join(__dirname, '/dist')));
const indexPath = path.join(__dirname, './dist', 'index.html');

app.use(publicPath);

app.get('*', (req, res) => {
    res.sendFile(indexPath);
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
