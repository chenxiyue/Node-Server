const express = require('express')

module.exports = {
    getHomeData: function (req, res, next) {
        const data = {
            'code': 0,
            'message': 'success',
            'data': 'Get Home Data Success!'
        }
        return res.json(data)
    }
}