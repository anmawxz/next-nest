# frontend/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Instalar TypeScript globalmente se necessário
RUN npm install -g typescript

EXPOSE 3000
CMD ["npm", "run", "dev"]
