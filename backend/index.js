const express = require("express");
const connection = require("./config/db");
const cookie = require("cookie-parser");
const router = require("./routes/user.route");
const cors=require("cors");
const productrouter = require("./routes/product.route");
const app = express();

app.use(cors({origin:"*"}))
app.use(express.json());

app.use(cookie());
app.use("/product", productrouter);
app.use("/user", router);

app.listen(8080, () => {
  console.log("Listening on 8080");
  connection();
});
