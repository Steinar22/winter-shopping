
const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('views', 'public')
app.set('view engine', 'ejs')

app.get('/', function (req , res){
    res.render('main-page.ejs')
})


app.listen(3000)