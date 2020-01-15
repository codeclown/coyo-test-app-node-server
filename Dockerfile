FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm foobar

COPY . .

EXPOSE 8084
CMD [ "npm", "start" ]
