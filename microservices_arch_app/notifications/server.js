import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Notification service running..."
    })
})

app.listen(8080, () => {
    console.log("Notification server running on PORT: 8080")
})