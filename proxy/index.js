const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let port = process.env.PORT || 3000;
let app = express();

app.use('/:id', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, function() {
	console.log(`listening on port ${port}`);
});