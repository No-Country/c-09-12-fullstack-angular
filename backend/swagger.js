// importamos las dos depencias que acabamos de instalar
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0", // standar open Api que estamos usando
    info: {
      title: "Titanic Gym",
      version: "1.0.0",
      description: "API que sirve para crear una aplicación administrar Gym.",
    },
  },
  apis: [
    "./src/routes/auth.routes.js",
    "./src/routes/users.routes.js",
    "./src/routes/rutines.routes.js",
    "./src/routes/excercises.routes.js",
    "./src/models/users.models.js",
    "./src/models/rutines.models.js",
    "./src/models/excercise.models.js"
  ],
};

const swaggerSpec = swaggerJSDoc(options);

// función para configruar la documentación
// dos parametros --> app expres, port donde se ejecuta
const swaggerDocs = (app, port) => {
  // manejador para la ruta de nuestra documentación
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // podemos definir nuestra documentación en formato json
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });
  //
  console.log(
    `Documentación disponible en http://localhost:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs; // donde iniciamos nuestro servidor
// app.listen
