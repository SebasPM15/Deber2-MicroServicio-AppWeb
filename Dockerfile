# Etapa 1: Usar una imagen base oficial de Node.js (versión Alpine por ser ligera)
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de definición de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos de código fuente de la aplicación al directorio de trabajo
COPY . .

# Exponer el puerto en el que la aplicación se ejecutará dentro del contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD [ "npm", "start" ]