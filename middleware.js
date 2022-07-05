// what is middleware?
// Middleware functions are functions that have access to the request object ( req ), the response object ( res ), 
// and the next middleware function in the application's request-response cycle. The next middleware function is commonly 
// denoted by a variable named next .

const express=require("express")
const app=express();

const middleware1 = (req, res, next)=>{
    console.log(" Middleware Used");
    next()
}
const middleware2 = (req, res, next)=>{
    console.log("Middleware 2 is Used");
    next()
}
app.use(middleware1);


app.get("/",middleware2,(req,res)=>{
    res.send("<h1> MiddleWare1 & Middleware2 </h1>")
})
app.get("/route1",middleware2,(req,res)=>{
    res.send("<h1>  Middlware1 and Middleware2</h1>")
})
app.get("/route2",(req,res)=>{
    res.send("<h1> Middlware1</h1>")
})

app.get("/route3",(req,res)=>{
    res.send("<h1>  Middlware1</h1>")
})

app.get("/route4",(req,res)=>{
    res.send("<h1> Middlware1</h1>")
})

app.listen(port,()=>{
    console.log(`Server Running at Port ${port}`)
})

app.listen(5500)