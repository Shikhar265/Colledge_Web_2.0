const express = require("express")
const app = express()
const path = require("path")
const Port = 3000
const bodyParser = require("body-parser")

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "views")))
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/home", (req, res) => {
  res.render("index")
})

 app.get("/login", (req, res) => {
   res.render("login")
 })
app.post("/login", (req, res) => {
  let username = req.body.username
  let password = req.body.password
  console.log(`Username: ${username} Password: ${password}`)
})

app.listen(Port, () => {
  console.log("App is Runnung on Port 3000")
})