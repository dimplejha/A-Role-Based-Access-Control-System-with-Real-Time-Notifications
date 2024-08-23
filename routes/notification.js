const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const { createComment } = require('../controllers/postController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification management
 */

/**
 * @swagger
 * /api/notifications/comment:
 *   post:
 *     summary: Add a comment to a post and notify the post's author
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               postId:
 *                 type: string
 *             example:
 *               content: "Great post!"
 *               postId: "61234567890abcdef123456"
 *     responses:
 *       201:
 *         description: Comment created successfully, notification sent
 *       400:
 *         description: Bad request
 */
router.post('/comment', authenticateToken, createComment);

module.exports = router;
