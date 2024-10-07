import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.DB_URL).then((conn) => {
    console.log(`Database Connected: ${conn.connection.host}`);
  });
};
