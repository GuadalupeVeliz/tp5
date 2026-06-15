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
    },
    {
      name:"Transacciones",
      description: "Operaciones relacionadas con las transacciones"
    },
    {
      name:"Empleados",
      description: "Operaciones relacionadas con los empleados"
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
    },
    Transaccion: {
      idiomaOrigen: "ES",
      textoOrigen: "Hola",
      idiomaDestino: "EN",
      textoDestino: "Hello",
      emailCliente: "alguien@mail.com"
    },
    Empleado: {
      apellido: "Veliz",
      nombre: "Guadalupe",
      dni: "12345678",
      email: "uno@mail.com"
    }
  },
};
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./index.js"]; 
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log(`Documentación generada en ${outputFile}`);
});
