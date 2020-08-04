const express = require('express')
const Router = express()

const commentController = require('../../controllers/manage-react/comment.controller')

Router.get('/', commentController.getCommentList)

module.exports = Router