const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

module.exports = function () {
    router.get('/', ()=>{
        console.log("you're in")
    });

    router.get('/patients', patientController.getClients);
    router.post('/patients', patientController.newClient);
    router.get('/patients/:id',patientController.getClient);
    router.put('/patients/:id',patientController.updateClient);
    router.delete('/patients/:id',patientController.deleteClient);

    return router;
}