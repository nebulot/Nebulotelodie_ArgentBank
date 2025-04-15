const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/argentBankDB";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("✅ Connecté à MongoDB");
    const User = require("./populateDatabase"); // adapte le chemin si besoin
    const result = await User.deleteMany({});
    console.log(`🗑️ ${result.deletedCount} utilisateurs supprimés`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion à MongoDB :", err);
  });
