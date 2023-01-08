const router = require('express').Router();
const NotificationController = require('../controllers/notificationController');
const UserController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');

router.post('/users/login', UserController.login);
router.get('/notifications', authentication, NotificationController.GetAllNotification);

module.exports = router;
