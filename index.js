const Express = require("express")
const path = require("path")

let app = Express()
const basePath = path.join(__dirname, "public")
const PORT = process.env.PORT

app.use(Express.static(basePath))
app.get("/ping", (_req, res) => {
    res.send("pong")
})
app.get("/", (_req, res) => {
    res.sendFile(path.join(basePath, "index.html"))
})

app.listen(PORT, () => {
    console.log("App started on port", PORT)
})