const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/test";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connecté à MongoDB local 🥳");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion à MongoDB :", err);
  });
