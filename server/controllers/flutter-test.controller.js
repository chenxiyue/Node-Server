const express = require('express')

module.exports = {
    getFlutterData: function (req, res, next) {
        const data = {
            'code': 0,
            'message': 'success',
            'data': {
                msg: 'getFlutterData Success!'
            }
        }
        return res.json(data)
    }
}