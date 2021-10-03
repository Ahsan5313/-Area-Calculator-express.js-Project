const express = require("express")

const bodyParser = require("body-parser")


const app = express()

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

const port = 3000

app.get("/", (req,res) =>{

    res.sendFile(__dirname+ "/views/index.html")
})
app.get("/circle", (req, res) =>{

    res.sendFile(__dirname+ "/views/circle.html")
})
app.get("/triangle", (req, res) =>{

    res.sendFile(__dirname+"/views/triangle.html")
})

app.post("/circle" , (req, res) =>{

    const radius = req.body.radius;
        
    const circleArea = Math.PI * radius * radius;

    res.send(`<h2>Circle is : ${circleArea} </h2>`)
})

app.post("/triangle", (req, res) =>{

    const {base, height} = req.body;
    const areaTriangle = 0.5 * base * height;
    res.send(`<h2>Triangle is :  ${areaTriangle} </h2>`)
})

app.listen(port, () =>{

    console.log(`Server is running successfully at http://localhost:${port}`)
})