import app from "./app.js";
import cloudinary from "cloudinary";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
// resolving dirname for ES module
const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
// use the client app
app.use(express.static(path.join(_dirname, '/client/dist')))
// render client for any path
app.get("*", (req, res) => 
res.sendFile(path.join(_dirname, "/client/dist/index.html"))
);


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});