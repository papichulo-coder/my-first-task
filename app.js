const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 5000

const data = require('./mydata')



app.use(cors({
    origin: '*'
})); 



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
  app.get('/',(req,res,next)=>{
    res.send("slackusername":"paulocodes",
              "backend":"true",
              "Age":18,
              "Bio":"just a guy who likes writing code
                     Trying to be the best engineer in the world"
         )
              
  })


app.listen(port,()=>{
console.log(`server listening on ${port}`)
});
