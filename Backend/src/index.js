import 'dotenv/config'
import app from './app.js'
import connectDB from './db/db.js'

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server Connected Listening on Port:", process.env.PORT);
  })

  app.on('error',(e)=>{
    console.log("MongoDB Internal Error:",e)
  })
})
.catch((e)=>{
  console.log("Server Connection Failed");
  console.log("Message:",e);
})