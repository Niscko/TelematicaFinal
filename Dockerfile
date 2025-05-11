# Imagen base oficial de Node.js
FROM node:18-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias primero (mejora cache de Docker)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto en el que corre el servidor
EXPOSE 8000

# Comando para correr el servidor
CMD ["node", "src/index.js"]

