const router = require('express').Router();

const userRoutes = require('./userRoutes');
const cityRoutes = require('./cityRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user',userRoutes);
router.use('/city',commentRoutes);
router.use('/comment',cityRoutes);

module.exports = router;