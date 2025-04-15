FROM node:23-alpine

ENV PORT=9000 \
    MONGODB_URL='mongodb://admin:password@165.232.189.19:27017/users?authSource=admin'

RUN mkdir -p /home/source

COPY . /home/source

WORKDIR /home/source

RUN npm install

CMD ["node", "app.js"]
