const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "API TP5",
    description: "Documentación de la API para el TP5.",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http", "https"],
  tags: [
    {
      name: "Socios",
      description: "Operaciones relacionadas con los socios.",
    }
  ],
  definitions: {
    Socio: {
      nombre: 'Guadalupe',
      apellido: "Veliz",
      foto: "url",
      dni: "12345678",
      numeroSocio: 1,
      activo: true,
    }
  },
};
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./index.js"]; // verifica la ruta
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log(`Documentación generada en ${outputFile}`);
  //require('./index.js'); // verifica la ruta donde inicia tu app
});
