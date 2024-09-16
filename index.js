// const express = require("express");
// const app = express();
// require("dotenv").config();
// const port = process.env.PORT || 3000;
// const cors = require("cors");

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const form = `

//   <form method="POST" action="/prompt">
//    <textarea name="prompt" id="prompt"></textarea>
//    <button type="submit">Generate JSON </button>
//   </form>

// `;

// app.use(express.urlencoded({ extended: true }));

// app.get("/prompt", async (req, res) => {
//   res.send(form);
// });

// app.post("/prompt", async (req, res) => {
//   let { prompt } = req.body;
//   prompt = prompt + `. data will be in json stringify form. `;

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();

//   res.send({ data: text, status: 200 });
// });

// app.get("/", (req, res) => {
//   res.send({ data: "server Running", status: 200 });
// });

// app.listen(port, () => {
//   console.log("server running on port " + port);
// });

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const form = `

  <form method="POST" action="/prompt">
   <textarea name="prompt" id="prompt"></textarea>
   <button type="submit">Generate </button>
  </form>

`;

app.use(express.urlencoded({ extended: true }));

const genAI = new GoogleGenerativeAI(process.env.GEMIN_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get("/prompt", (req, res) => {
  res.send(form);
});

app.post("/prompt", async (req, res) => {
  let { prompt } = req.body;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  res.send({ data: text, status: 200 });
});
app.get("/", (req, res) => {
  res.send({ data: "server ok ", status: 200 });
});

app.listen(port, () => {
  console.log("server running on port " + port);
});
