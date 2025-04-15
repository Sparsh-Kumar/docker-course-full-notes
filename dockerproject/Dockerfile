FROM node:23-alpine

RUN mkdir -p /home/source

COPY . /home/source

WORKDIR /home/source

RUN npm install

CMD ["node", "app.js"]
