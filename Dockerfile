FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NUXT_HOST=0.0.0.0

CMD [ "npm", "start" ]
