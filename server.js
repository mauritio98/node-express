import dotenv from "dotenv";
import app from "./app.js"

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Run on port ${process.env.PORT}`);
    console.log(`Server on http://localhost:${process.env.PORT}`);
})