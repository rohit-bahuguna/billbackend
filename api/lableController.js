const express = require('express');
const lableRouter = express.Router();

const {
	addLable,
	updateById,
	deleteLable,
	getData,
	getDataById,
	searchByLable,
	searchByDate,
	getOldData
} = require('../dao/Lable');

lableRouter.post('/addlable', addLable);

lableRouter.put('/update/:id', updateById);
lableRouter.delete('/delete/:id', deleteLable);

lableRouter.get('/getData', getData);
lableRouter.get('/getDataById/:id', getDataById);
lableRouter.get('/serach/:lable', searchByLable);
lableRouter.get('/serachbydate/:date', searchByDate);
lableRouter.get('/getolddata', getOldData);

module.exports = lableRouter;
