FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

RUN npm prune --production

EXPOSE 8081

CMD ["npm", "run", "start"]