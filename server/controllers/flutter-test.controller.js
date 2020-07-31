const express = require('express')
const config = require('../config')
const base_url = 'http://' + config.IP + ':' + config.PORT + '/images/goods/'

module.exports = {
    getFlutterData: function (req, res, next) {
        // post请求参数
        const shopId = req.body.shopId
        console.log(shopId)
        const goods = {
            'code': '0',
            'message': 'success',
            'data': [
                {
                    'name': '苹果 屏幕尺寸：13.3英寸 处理器：Intel Core i5-8259',
                    'image': base_url + '001/cover.jpg',
                    'presentPrice': 13999,
                    'goodsId': '001',
                    'oriPrice': 15999
                },
                {
                    'name': '外星人Alienware 全新m15 R2九代酷睿i7六核GTX1660Ti独显144Hz吃鸡游戏笔记本电脑戴尔DELL15M-R4725',
                    'image': base_url + '002/cover.jpg',
                    'presentPrice': 19999,
                    'goodsId': '002',
                    'oriPrice': 23999
                },
                {
                    'name': 'Dell/戴尔 灵越15(3568) Ins15E-3525独显i5游戏本超薄笔记本电脑',
                    'image': base_url + '003/cover.jpg',
                    'presentPrice': 6600,
                    'goodsId': '003',
                    'oriPrice': 8999
                }
            ]
        }

        res.send(goods)
    }
}