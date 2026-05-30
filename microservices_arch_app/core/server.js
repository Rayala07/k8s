import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Core service running..."
    })
})

app.listen(3000, () => {
    console.log("Core server running on PORT: 3000")
})