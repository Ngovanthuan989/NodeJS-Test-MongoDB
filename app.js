// import để sử dụng express
const express = require('express')
const app = express()

// API thực hiện,callback
app.get('/thuandeptrai', function(req, res) {
        res.send('Hello World')
    })
    // cổng có thể thay dổi , id là params 
app.get('/:id', function(req, res) {
    var a = req.params.id;
    console.log(a);
    res.json('ThuanDepTrai')
})
app.listen(3000)