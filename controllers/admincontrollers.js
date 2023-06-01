const regitermodels = require('../models/usermodels')
const authmodels = require('../models/authmodels')
const jwt = require('jsonwebtoken')
const secret = "gfs43445869dhjfvsgfg356sa7fcbdsnvscdghjdkfdatstfydghklfhcsxcv"

const register = async (req, res) => {
    try {
        const { body: { name, email, password } } = req
        const admin = await regitermodels.create({ name, email, password })
        res.status(200).json({ success: true, data: admin, msg: "Record is add !!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "something went worng" })
    }
}

const logindata = async (req, res) => {
    try {
        const { body: { email, password } } = req;
        let isdata = await regitermodels.findOne({ email: email });
        if (!isdata || !isdata.password) {
            res.status(404).json({ success: false, msg: "User not found" })
        }
        const payload = {
            id: isdata.id,
            email: isdata.email
        }
        const accessToken = jwt.sign(payload, secret, { expiresIn: "1d" });

        await authmodels.create({ token: accessToken, user_id: isdata.id })

        res.status(200).json({ success: true, token: accessToken, msg: "userlogged in successfully " })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "something went worng" })
    }
}

const logoutdata = async (req, res) => {
    try {
        const { user: { id } } = req
        let done =await authmodels.findOneAndDelete({ user_id: id 
        })
        return res.json({ status: 200, msg: "User logged out successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "something went worng" })
    }
}
const chek = async (req, res) => {
    res.json({ msg: "vsuyds" })
}

module.exports = { register, logindata, logoutdata, chek }