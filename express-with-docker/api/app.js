const express = require("express");
const axios = require("axios").default;
const app = express();

app.get("/", async (req, res) => {
  let data;
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    data = await res.data;
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json(data);
});

app.listen(8000, () => {
  console.log("server running!");
});
