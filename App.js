var express=require('express')

var app=express()

app.get('/',(req,res)=>{
    res.send("Hello Express")
})

app.get('/Books',(req,res)=>{
    res.send("Hello Book")
})

app.get('/Students',(req,res)=>{
    res.send("Hello Students")
})

app.post('/',(req,res)=>{
    res.send("Hello Express post")
})

app.get('/Students/:studentid/books/:bookid',(req,res)=>{
    res.send(req.params)
})

app.get('/example/b',(req,res,next)=>{
    console.log("Text from first callback function")
    next()
}, function (req,res){
    res.write("This is second callback function")
}
)


var server=app.listen(3000,()=>{
console.log("Server is at port 3000")


}



)