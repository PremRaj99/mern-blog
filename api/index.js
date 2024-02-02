import express from "express";

const app = express();

app.listen('80', () => {
    console.log("server is running on port 80")
});