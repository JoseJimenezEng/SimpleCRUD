# Gestión de Personas CRUD
## Gestión de Personas - Cliente
Este proyecto es una aplicación frontend desarrollada con **React y Bootstrap** que permite gestionar personas a través de una interfaz gráfica. Puedes **agregar, editar, eliminar y visualizar personas**, almacenando los datos en una **base de datos MongoDB mediante una API REST**.
## Gestión de Personas - Servidor
El servidor **backend** desarrollado con **Node.js, Express y MongoDB**, nos da **API RESTful** para la gestión de personas, permite crear, leer, actulizar y eliminar registros en una **base de datos MongoDB**.
## DEMO 
### Cliente CRUD
https://clientcrud.netlify.app/

![image](https://github.com/user-attachments/assets/a03b8996-5404-41ef-b85b-52e210e48903)


## Endpoints de la API
GET https://simplecrud-evva.onrender.com/api/personas: Obtiene todas las personas.

GET https://simplecrud-evva.onrender.com/api/personas/:id: Obtiene una persona por su ID.

POST https://simplecrud-evva.onrender.com/api/personas: Crea una nueva persona.

PUT https://simplecrud-evva.onrender.com/api/personas/:id: Actualiza una persona existente por su ID.

DELETE https://simplecrud-evva.onrender.com/api/personas/:id: Elimina una persona por su ID.


## Características
### CRUD Completo: 
Permite crear, leer, actualizar y eliminar personas.
### Interfaz Simple: 
La aplicación tiene un diseño responsivo utilizando Bootsrap.
### Integración con API: 
Se conecta a una API RESTful para gestionar los datos de las perosnas en MongoDB Atlas.
### API RESTful: 
Provee endpoints para realizar operaciones CRUD sobre una base de datos MongoDB.
### MongoDB Atlas: 
Almacena los datos en una base de datos MongoDB en la nube.
### Middleware: 
Usa cors para manejar peticiones cross-origin y body-parser para procesar las solicitudes.
### Rutas Modulares: 
El código está organizado en rutas y modelos.

## Tecnologías Utilizadas para el Cliente
**React**: 
Biblioteca de JavaScript para construir interfaces de usuario.

**Bootstrap**: 
Framework de CSS para estilos y diseño responsive.

**Axios**: 
Cliente HTTP basado en promesas para interactuar con la API.

**Environment Variables**: 
Variables de entorno para configurar puertos y aumentar seguridad.

## Tecnologías Utilizadas para el Servidor
**Node.js**: 
Entorno de ejecución para JavaScript en el servidor.

**Express**: 
Framework para Node.js que simplifica la creación de APIs REST.

**MongoDB Atlas**: 
Base de datos NoSQL en la nube.

**Mongoose**: 
ODM para MongoDB que facilita la interacción con la base de datos.

