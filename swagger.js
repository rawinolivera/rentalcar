const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "Rentalcar",
    description: "Booking API for rental car services",
  },
  host: "rentalcar.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);