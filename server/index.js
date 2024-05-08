// import express into our file
const express = require('express')

//create a new express application
const app = express()

//define the port out server will run on
const port = 3000

// allow static assets in public folder
const root = require('path').join(__dirname, '../client/dist')
app.use(express.static(root))

//define our server routes

app.get('/', (req, res)=>{
    res.sendFile('ubdex.html', { root })
})

app.get('/message', (req, res)=>{
    //do something when the server processes this request

    //send back a response to the client
    res.send("Hello from our server!")
})

app.get('/test', (req, res)=>{

    res.send("Server is operational!")
})

app.post('api', (req, res)=>{
    res.send("Received post request!")
})


//run our server to listen at the port we define

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

