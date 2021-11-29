const User = require('../model/usermodel');

exports.getAllUser = async (req,res) => {
    try{

        const users = await User.find();

    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        requaestedAt: req.requestTime,
        results: users.length,
        data: {
            users
        }
    });
}           catch (err) {
            res.status(404).json({
                status: 'error',
                message: err
            });
        }

};

exports.getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
};


exports.createUser = async (req, res) => {
    try{

        const newUser = await User.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                order: newUser
            }
        });
    }  catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'Invalid data sent!'
        })
    }
};

exports.updateUser = async (req, res) => {
    console.log(req.params)

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        console.log(user)
        res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
}   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }   
};

exports.deleteUser = async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
 
        res.status(204).json({
        status: 'success',
        data: null
    });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })

    }
    
};