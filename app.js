const express = require('express');
const app = express();
// const Label = require('./model/Labels');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./config/config');
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/', require('./router/LableRouter'));

// // app.delete('/delete', async (req, res) => {
// // 	try {
// // 		const deleted = await Label.deleteMany();

// // 		res.status(200).json(deleted);
// // 	} catch (error) {
// // 		console.log(error);
// // 		res.status(400).json(error);
// // 	}
// // });

app.listen(3500);
