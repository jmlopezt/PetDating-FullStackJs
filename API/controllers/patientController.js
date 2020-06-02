const Patient = require('../models/Patient');

exports.newClient = async (req, res, next)=>{

    const patient = new Patient(req.body);
    try {
        await patient.save();
        res.json({message: 'Client correctly added'});
        //res.status(200);
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.getClients = async (req, res, next)=>{

    try {
        const patient = await Patient.find({})
        res.json(patient);
        //res.status(200);
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.getClient = async (req, res, next)=>{

    try {
        const patient = await Patient.findById(req.params.id);
        res.json(patient);
        //res.status(200);
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.updateClient = async (req, res, next)=>{

    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(patient);
        //res.status(200);
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.deleteClient = async (req, res, next)=>{

    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        res.json({message: 'Client correctly added'});
        //res.status(200);
    } catch (error) {
        console.log(error);
        next();
    }
};