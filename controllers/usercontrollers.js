const models = require('../models/stdmodels');
const path = require('path');
const imagepath = path.join('uplodes');
const fs = require('fs')

const adddata = async (req, res) => {
    try {
        let { body: { name, address, calss, age, hobbies, gender, state, city,pincode } } = req
        let images = `${imagepath}/${req.file.filename}`;
        let add = await models.create({ name, address, calss, age, hobbies, gender, state, city, pincode, images });
        res.status(200).json({ success: true, data: add, msg: "Record is Add!!" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "something went worng" })
    }
}
const finddata = async (req, res) => {
    try {
        let data = await models.find({});
        res.status(200).json({ success: true, data })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "something went worng" })
    }
}
const deletedata = async (req, res) => {
    try {
        const { params: { id } } = req;
        const onedata = await models.findByIdAndDelete(id);
        fs.unlinkSync(onedata.images)
        res.status(200).json({ success: true, msg: "Record is successfully delete !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "something went worng" })
    }
}
const updated = async (req, res) => {
    try {
        const { params: { id } } = req;
        let user = req.body;
        if (req.file) {
            let images = `${imagepath}/${req.file.filename}`;
            const updated = await models.findByIdAndUpdate(id, Object.assign({ images }, req.body))
            fs.unlinkSync(updated.images)
            res.status(200).json({ success: true, data: updated })
        }
        else {
            const data = await models.findByIdAndUpdate(id, user);
            res.status(200).json({ success: true, data: data })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "something went worng" })
    }
}


module.exports = { adddata, deletedata, finddata, updated }