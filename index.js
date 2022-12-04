console.log("I am server file");
import express from 'express';
const app = express()
import mongoose from 'mongoose';
const port = process.env.PORT || 8000
import OnlyOne from './Routes/home.js'

app.use('/' , OnlyOne )

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})