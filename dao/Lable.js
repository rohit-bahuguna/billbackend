const moduleLable = require('../model/Labels');

// const preData = require('../model/prevData');
//add lable and amount data to backend....
//addLable-->

exports.createLable = async (lable, amount) => {
	return await moduleLable.create({
		lable: lable,
		amount: amount
	});
};

exports.getLableById = async id => {
	return await moduleLable.findById(id).lean();
};
exports.searchByLable = async lable => {
	return await moduleLable.find({ lable }).lean();
};

exports.updateById = async (data, id) => {
	const oldData = await moduleLable.findById(id);

	const updatedData = await moduleLable.findByIdAndUpdate(id, data, {
		new: true
	});
	oldData.history = undefined;
	updatedData.history.push(oldData);
	await updatedData.save();
	return { oldData, updatedData };
};

exports.getFetchData = async () => {
	// return await moduleLable.find({_id:id,isDeleted:false}).lean();
	return await moduleLable.find();
};

exports.getAll = async (pageSize, pageNo) => {
	return await moduleLable.find().limit(pageSize).skip((pageNo - 1) * pageSize);
};

exports.findTaskAndDelete = async id => {
	return await moduleLable.findByIdAndUpdate(id, { isDeleted: true });
};

exports.getDataById = async id => {
	return await moduleLable.findOne({ id }).lean();
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

//fetch data from beckend
// exports.getData = async (req, res) => {
// 	try {
// 		const data = await Label.find();
// 		res.status(200).json(data);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error);
// 	}
// };

//update lable data
// exports.updateById = async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const data = await Label.findOne({ _id: id });
// 		let oldDataResponse;
// 		if (data) {
// 			const olddata = new preData({
// 				lable: data.lable,
// 				amount: data.amount,
// 				updatefrom: id
// 			});

// 			oldDataResponse = await olddata.save();
// 		}

// 		const updated = await Label.findByIdAndUpdate(id, req.body, { new: true });

// 		res.status(200).json({ success: true, updated, oldDataResponse });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error);
// 	}
// };

//delete api to delete data
// exports.deleteLable = async (req, res)=>{
// 	try{
// 		const {id} = req.params;
// 	    const deleteData = await Label.deleteOne({ _id: id });
// 		console.log(deleteData);
// 		res.status(200).json(deleteData);

// 	}catch(error){
//      res.status(400).json(error);
// 	}

// }

//search by lable
// exports.searchByLable = async (req, res) => {
// 		try {
// 			const { lable } = req.params;

// 			const searchData = await Label.find({ lable });

// 			res.status(200).json({ success: true, searchData });
// 		} catch (error) {
// 			console.log(error);
// 			res.status(400).json(error);
// 		}
// 	};

//search by date
// exports.searchByDate =  async (req, res) => {
// 		try {
// 			const { date } = req.params;

// 			const searchData = await Label.find({ createdAt: date });
// 			console.log(searchData)

// 			res.status(200).json({ success: true, searchData });
// 		} catch (error) {
// 			console.log(error);
// 			res.status(400).json(error);
// 		}
// 	};
//get the old updated data..
// exports.getOldData =  async (req, res) => {
// 		try {
// 			const data = await preData.find();
// 			res.status(200).json(data);
// 		} catch (error) {
// 			console.log(error);
// 			res.status(400).json(error);
// 		}
// 	};

// exports.getDataById = async (req, res) => {
// 			try {
// 				const { id } = req.params;

// 				const data = await Label.findOne({ _id: id });
// 				res.status(200).json({
// 					success: true,
// 					data
// 				});
// 			} catch (error) {
// 				console.log(error);
// 				res.status(400).json(error);
// 			}
// 		};

//pagination api-->
exports.getPagination = async (req, res) => {};
