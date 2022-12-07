const User = require("../models/User");


const getUsers = async (req, res) => {

    const users = await User.find();
    res.status(200).json({
        success: true,
        count: users.length,
        data: users,
    });

}

const getUser = async (req, res) => {

    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).json({
            success: false,
            error: `User not found with the id of ${req.params.id}`
        })
    }
    res.status(200).json({
        success: true,
        data: user,
    });

}

const createUser = async (req, res) => {

    try {
        const car = await User.create(req.body);
        res.status(200).json({
            success: true,
            data: car
        })

    } catch (error) {

        res.status(400).json({
            success: false,
            error: error.message,
            errorCode: error.code
        }

        )
    }

}

const updateUser = async (req, res) => {

    const data = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
        if (!user) {
            res.status(404).json({
                success: false,
                error: `User not found with the id of ${req.params.id}`
            })
        }
        else {
            res.status(200).json({
                success: true,
                data: user,
            });

        }



    } catch (error) {

        res.status(400).json({
            success: false,
            error: error.message,
            errorCode: error.code
        })

    }


}

const deleteUser = async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        res.status(404).json({
            success: false,
            error: `User not found with the id of ${req.params.id}`
        })
    }
    res.status(200).json({
        success: true,
        msg: `User deleted with the id ${req.params.id}`,
    });

}


module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }