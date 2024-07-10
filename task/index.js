const express=require('express')
const body_parser = require('body-parser')
const  app=express()

objForUrlencoded = body_parser.urlencoded({extended:false})

app.set("view engine", "ejs")
app.use("/views", express.static("views"))
app.use(objForUrlencoded)

app.get('/',(req,res)=>{
    res.render('Home')
})
app.use('/',require('./routes/FormRouter'))

app.listen(8000, (err) => {
if (err) {
console.log(err);
}
else {
console.log('Server is Running on port Number', 8000);
}
})