#Dockerfile
# PROD CONFIG
FROM node as prod

WORKDIR /app

COPY package*.json ./

RUN npm install

WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

WORKDIR /app

COPY . .

ENV NODE_ENV=production

CMD [ "npm", "start" ]

# DEV CONFIG
FROM prod as dev

EXPOSE 8080 3000

ENV NODE_ENV=development

RUN npm install --only=dev

CMD [ "npm", "run", "dev" ]