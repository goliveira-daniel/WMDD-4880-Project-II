const router = require('express').Router();
const ticketmasterController = require('../controllers/ticketmasterController')
const eventfulController = require('../controllers/eventfulController')

// Get all Data
router.use('/ticketmaster', ticketmasterController)

router.use('/eventful', eventfulController)

module.exports = router;
// Get one post by cuid
// router.route('/ticketmaster/:cuid').get(ticketmasterController.getPost);

// Add a new Post
// router.route('/posts').post(ticketmasterController.addPost);

// Delete a post by cuid
// router.route('/posts/:cuid').delete(ticketmasterController.deletePost);