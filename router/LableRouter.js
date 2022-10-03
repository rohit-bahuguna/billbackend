const express = require('express');
const router = express.Router();
const dataFromController = require('../Controller/lableController');

// const dataFromDao= require('../dao/Lable');

router.post('/addlable', dataFromController.addLable);
router.get('/getdata', dataFromController.getData);
router.get('/pagination', dataFromController.getPagination);
router.put('/update/:id', dataFromController.updateWithId);
router.delete('/delete/:id', dataFromController.deleteLable);
router.get('/getDataById/:id', dataFromController.getDataById);

router.get('/serach/:lable', dataFromController.searchByLable);

// lableRouter.get('/getData', getData);
// lableRouter.get('/getDataById/:id', getDataById);
// lableRouter.get('/serach/:lable',  searchByLable);
// lableRouter.get('/serachbydate/:date', searchByDate);
// lableRouter.get('/getolddata', getOldData);

module.exports = router;
