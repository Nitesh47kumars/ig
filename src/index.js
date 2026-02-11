import "dotenv/config";
import connectDB from "./db/db.js";
import app from "./app.js";

connectDB()
  .then(() => {
    (app.listen(process.env.PORT || 8000, () => {
      console.log("Server listenning on", process.env.PORT);
    }),
      app.on("Error", () => {
        console.log("MongoDB internal Error!!!");
      }));
  })
  .catch((err) => {
    console.log("Server Connection Failed!!!");
    console.log("Message:", err);
  });
