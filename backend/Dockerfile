FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x /usr/src/app/node_modules/.bin/*
EXPOSE 8000
CMD ["npm", "start"]