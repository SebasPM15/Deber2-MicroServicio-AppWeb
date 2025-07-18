# Deber2-MicroServicio-AppWeb

Repositorio: [https://github.com/SebasPM15/Deber2-MicroServicio-AppWeb](https://github.com/SebasPM15/Deber2-MicroServicio-AppWeb)

Este proyecto consiste en un microservicio RESTful para gestionar un CRUD (Crear, Leer, Actualizar, Eliminar) de canciones. La aplicación está desarrollada siguiendo una arquitectura por capas y está completamente contenedorizada para garantizar su portabilidad y consistencia entre diferentes entornos.

## 🧰 Stack Tecnológico

- **Backend**: Node.js, Express.js
- **Base de Datos**: PostgreSQL
- **ORM**: Sequelize
- **Contenedorización**: Docker y Docker Compose
- **Documentación API**: Swagger (OpenAPI)

## 🚀 Ejecución en Entorno Local

Para levantar el proyecto en un entorno de desarrollo local, es necesario tener Docker y Docker Compose instalados.

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/SebasPM15/Deber2-MicroServicio-AppWeb.git
   cd Deber2-MicroServicio-AppWeb
   ```

2. **Crear el archivo de entorno**

   Crea un archivo `.env` en la raíz del proyecto y copia el siguiente contenido:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=usr_polimusic_gr2
   DB_PASSWORD=Politecnica1
   DB_NAME=BDD_PoliMusic_Song
   DB_PORT=5432
   DB_DIALECT=postgres
   ```

3. **Levantar los contenedores**

   Ejecuta el siguiente comando para construir la imagen de la aplicación y levantar los contenedores de la app y la base de datos:

   ```bash
   docker-compose up --build
   ```

4. **Acceder al servicio**

   - Microservicio disponible en: [http://localhost:3000](http://localhost:3000)
   - Documentación Swagger en: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## ☁️ Proceso de Despliegue en la Nube

### 🔹 Contenedorización

La aplicación fue empaquetada en una imagen Docker.

### 🔹 Registro de Imagen

La imagen se subió a un repositorio público en Docker Hub:

[sebaspm15/canciones-microservice:1.3](https://hub.docker.com/r/sebaspm15/canciones-microservice)

### 🔹 Base de Datos en la Nube (Supabase)

- Se creó un nuevo proyecto en Supabase, lo que automáticamente aprovisionó una base de datos PostgreSQL.
- El esquema de base de datos fue inicializado en el SQL Editor con un archivo `init.sql`.
- Se obtuvieron las credenciales de conexión en **Project Settings > Database**.

### 🔹 Servicio Web en Render

- Se creó un Web Service en Render seleccionando la opción: **"Deploy an existing image from a registry"**.
- Se usó la imagen pública: `docker.io/sebaspm15/canciones-microservice:1.3`.
- Se configuraron las siguientes variables de entorno en el servicio:

   ```env
   DB_HOST=aws-0-us-east-2.pooler.supabase.com
   DB_USER=postgres.apsbuvfargjxjgerftpz
   DB_PASSWORD=TU_CONTRASEÑA_SUPABASE
   DB_NAME=postgres
   DB_DIALECT=postgres
   DB_PORT=5432
   ```

- Render descargó automáticamente la imagen, ejecutó el contenedor y expuso el servicio en una URL pública:

  [https://canciones-microservice-1-0.onrender.com](https://canciones-microservice-1-0.onrender.com)

## ✅ Pruebas

Las pruebas de los endpoints REST (GET, POST, PUT, DELETE) se realizaron utilizando Postman, apuntando a la URL pública desplegada en Render.

## 📄 Licencia

Este proyecto es solo con fines educativos.