FROM node:latest

ENV PORT=9000 \
    MONGODB_URL='mongodb://admin:password@143.110.190.93:27017/users?authSource=admin'

RUN mkdir -p /home/source

COPY . /home/source

WORKDIR /home/source

RUN npm install

CMD ["node" "app.js"]
