/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require("express")
const mongoose  = require("mongoose")
const methodOverride = require('method-override')
const turtleSchema = require('./models/schema.js')
const turtleEntries = require('./models/seed.js')
/////////////////////////
// The Application Object
/////////////////////////
const app = express()

//Middleware
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))


/////////////////////////
// Routes
/////////////////////////
// home route that says "hello world" to test server is working
app.get('/seed',(req,res)=>{
    turtleSchema.create(turtleEntries,(error, createdList)=>{
        console.log('get the log: ', createdList);
        res.redirect('/turtles')
    })
})

//Index Route
app.get("/turtles", (req, res) => {
    //res.json let's us send a response as JSON data
    turtleSchema.find({},(error, getData)=>{
        res.json({getData})
    })
})
// app.get('/turtles', (req,res)=>{
//     res.json({turtles})
// })

//Show Route
app.get('/turtles/:id', (req,res)=>{
    turtleSchema.find({},(error, getData)=>{
        res.json({getData[req.params.id]})
    })
})
// app.get('/turtles/:index', (req,res)=>{
//     res.json(turtles[req.params.index])
// })

//Post route
app.post('/turtles', (req, res)=>{
    //push the request body into the array
    turtles.push(req.body)
    // send the turtles array as JSON
    res.json(turtles)
})

//Put route
app.put('/turtles/:index', (req, res)=>{
    turtles[req.params.index] = req.body
    //send the turtles array as JSON
    res.json(turtles)
})

//Delete Route
app.delete('/turtles/:index', (req, res)=>{
    //remove the turtle at the specified index
    turtles.splice(req.params.index, 1)
    //send the turtles array as JSON
    res.json(turtles)
})
//Connections
mongoose.connect('mongodb://localhost:27017/turtle', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})





/////////////////////////
// Listener
/////////////////////////
// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
// Why? cause it's the largest 16-bit integer, fun fact!
// But because we are "elite" coders we will use 1337
app.listen(1337, () => console.log("Listening on port 1337"))