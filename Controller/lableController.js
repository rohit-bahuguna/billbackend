const express = require('express');
const lableDeo = require('../dao/Lable');
const Lable = require('../model/Labels');

//addData
exports.addLable = async (req, res) => {
	try {
		const { lable, amount } = req.body;

		if (!lable || !amount) {
			throw new Error(`please fill valid data `);
		} else {
			let result = await lableDeo.createLable(lable, amount);
			console.log(result);
			res.status(201).json(result);
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//get all data
exports.getData = async (req, res) => {
	try {
		const data = await lableDeo.getFetchData();

		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};

//delete data
exports.deleteLable = async (req, res) => {
	try {
		const deleteData = await lableDeo.findTaskAndDelete(req.params.id);
		console.log(deleteData);
		res.status(200).json(deleteData);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//update data
exports.updateWithId = async (req, res) => {
	try {
		const { id } = req.params;

		const { oldData, updatedData } = await lableDeo.updateById(req.body, id);

		res.status(200).json({ success: true, oldData, updatedData });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};

//
//search by lable
exports.searchByLable = async (req, res) => {
	try {
		const searchData = await lableDeo.searchByLable(req.params.lable);
		res.status(200).json({ success: true, searchData });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};

//pagination api
exports.getPagination = async (req, res) => {
	try {
		const pageNo = parseInt(req.query.pageNo);
		const pageSize = parseInt(req.query.pageSize);
		const allPage = await lableDeo.getAll(pageNo, pageSize);
		res.status(200).json({
			allPage,
			data: {
				nextPage: pageNo + 1,
				pageSize: pageSize,
				all_size: allPage.length === pageSize
			}
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//for update
exports.getDataById = async (req, res) => {
	try {
		const data = await lableDeo.getDataById(req.params.id);
		res.status(200).json({
			success: true,
			data
		});
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};

// exports.addLable = async (req, resp) => {
// 	try {
// 		let user = new Label({
// 			lable: req.body.lable,
// 			amount: req.body.amount
// 		});

// 		let result = await user.save();

// 		console.log(result);
// 		resp.send(result);
// 	} catch (error) {
// 		console.log(error);
// 		resp.status(400).json(error);
// 	}
// };

// lableRouter.post('/addlable', addLable);

// module.exports = {

// }
