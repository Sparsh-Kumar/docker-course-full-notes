FROM node:13-alpine

ENV PORT=9000 \
    MONGODB_URL='mongodb://admin:password@143.110.190.93:27017/users?authSource=admin'

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node" "app.js"]
