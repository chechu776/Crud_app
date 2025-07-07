require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const session=require("express-session")

const app = express()
const PORT=process.env.PORT||4000;

//database
mongoose.connect(process.env.dbURI)
const db=mongoose.connection;
db.on("error",(err)=>console.log(err));
db.once("open",()=>console.log("connected to database"))

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.json())

app.use(session({
    secret:"my secret",
    saveUninitialized:true,
    resave:false
}))

app.use((req,res,next)=>{
    res.locals.message=req.session.message
    delete req.session.message
    next()
})

//template strings
app.set("view engine","ejs")

//route
app.use("",require("./routes/routes"))

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
})






