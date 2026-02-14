import 'dotenv/config'
import connectDB from './db/db.js'
import app from './app.js';

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server Connected, listening on PORT:",process.env.PORT);
    });

    app.on('error',(e)=>{
        console.log("Internal Error:",e)
    });
})
.catch((e)=>{
    console.log("Connection Failed!!!", e);
})