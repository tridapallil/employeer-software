const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const punchValidation = require('../../validations/punch.validation');
const punchController = require('../../controllers/punch.controller');

const router = express.Router();

router.route('/:employeeId').post(validate(punchValidation.createPunch), punchController.createPunch);

router.route('/:punchId').get(auth('getPunches'), validate(punchValidation.getPunch), punchController.getPunch);

module.exports = router;
