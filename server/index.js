import express from "express"
import mongoose from "mongoose"
import cors from "cors"
const app = express();
import "dotenv/config";
import noteRouter from "./routes/noteRoute.js"
const PORT = process.env.PORT || 6000
const MONGOOSE_URL = process.env.MONGOOSE_URL;




// db_conn
mongoose.connect(MONGOOSE_URL).then(() => {
  console.log("db connected");
});

app.use(cors())
app.use(express())
app.use(express.json())
app.use("/note", noteRouter)



app.get("/", (req, res) => {
    res.send("server is running")
})



app.listen(PORT, (req, res) => {
    console.log(`server run on ${[PORT]}`)
})