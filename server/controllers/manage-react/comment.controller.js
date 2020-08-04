module.exports = {
    getCommentList: function (req, res, next) {
        const resData = {
            stateCode: 200,
            message: 'success',
            data: [
                { username: '陈西岳', content: '我喜欢React!' },
                { username: '杨娜', content: '我喜欢CAD设计!' },
                { username: '陈景芮', content: '我喜欢吃冰激凌!' }
            ]
        }

        res.send(resData)
    }
}