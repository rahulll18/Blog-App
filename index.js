const express = require('express');
const app = express();
require("dotenv").config();
const dbConnect = require('./config/dbConnect.js')
const blog = require('./routes/blog.js')
const PORT = process.env.PORT || 6000
dbConnect();

app.use(express.json());
app.use("/api/v1" ,blog );

app.get('/', (req , res)=>{
    res.send("This is Home page");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
