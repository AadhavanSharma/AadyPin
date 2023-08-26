// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const userRoute = require("./routes/users");
// const pinRoute = require("./routes/pins");

// dotenv.config();

// app.use(express.json());


// // mongoose 
// //  .connect(`mongodb+srv://aadhavansharma5700:HgXPGVKhwLR3R4OK@cluster0.c9cmqpt.mongodb.net/?retryWrites=true&w=majority` , {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true,
// //         useCreateIndex: true,   })   
// //  .then(() => console.log("MongoDB connected!"))
// //  .catch(err => console.log(err));
// mongoose 
//  .connect(`mongodb+srv://aadhavansharma5700:h6E12ZiQQLgs9Nql@cluster0.tdhn87a.mongodb.net/project-travel?retryWrites=true&w=majority` , {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,   })   
//  .then(() => console.log("MongoDB connected!"))
//  .catch(err => console.log(err,"hi"));

// app.use("/api/users", userRoute);
// app.use("/api/pins", pinRoute);


// app.listen(8800, () => {
//   console.log("Backend server is running!");
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());

mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
