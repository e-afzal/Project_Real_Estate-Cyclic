// PACKAGES
import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
const app = express();

// LOCAL IMPORTS
import connectDB from "./config/db.js";
import agentRoutes from "./routes/agentRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import neighbourhoodRoutes from "./routes/neighbourhoodRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
// Body Parser Middleware
app.use(express.json());

// ROUTES
app.use("/api/properties", propertyRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/neighbourhood", neighbourhoodRoutes);

// If environment is 'PRODUCTION', 'index.html' from
// 'FrontEnd' build folder to be loaded
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./FrontEnd/build")));

  app.get("*", (req, res) =>
    // res.sendFile(path.resolve(__dirname, "FrontEnd", "build", "index.html"))
    res.sendFile(path.join(__dirname, "./FrontEnd/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

// LISTENER
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  )
);
