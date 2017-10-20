const router = require('express').Router();
// const router = new Router();
const ticketmasterController = require('../controllers/ticketmasterController')

// Get all Data
// router.route('/ticketmaster').get(ticketmasterController.getData());
router.use('/ticketmaster', ticketmasterController)
// Get one post by cuid
// router.route('/ticketmaster/:cuid').get(ticketmasterController.getPost);

// Add a new Post
// router.route('/posts').post(ticketmasterController.addPost);

// Delete a post by cuid
// router.route('/posts/:cuid').delete(ticketmasterController.deletePost);

module.exports = router;

