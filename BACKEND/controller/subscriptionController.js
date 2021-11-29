const subscription = require('../model/subscriptionmodel');


exports.getAllSubscription = async (req,res) => {
    try{

        const subscriptions = await subscription.find();

    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        requaestedAt: req.requestTime,
        results: subscriptions.length,
        data: {
            subscriptions
        }
    });
}           catch (err) {
            res.status(404).json({
                status: 'error',
                message: err
            });
        }

};

exports.getSubscription = async (req, res) => {
    try{
        const subscriptions = await subscription.findById(req.params.id);
        
        res.status(200).json({
            status: 'success',
            data: {
                subscriptions
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: err
        });
    }
};


exports.createSubscription = async (req, res, next) => {

    try{

        const newSubscription = await subscription.create( req.body);

        res.status(201).json({
            status: 'success',
            data: {
                order: newSubscription
            }
        });
    }  catch (err) {
        res.status(400).json({
            status: 'error',
            message : 'Invalid data sent!'
        })
    }
};

exports.updateSubscription = async (req, res) => {
    

    try{
        const Subscription = await subscription.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        console.log(subscription)
        res.status(200).json({
        status: 'success',
        data: {
            Subscription
        }
    });
}   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }   
};

exports.deleteSubscription = async (req, res) => {
    try{
        await subscription.findByIdAndDelete(req.params.id);
 
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