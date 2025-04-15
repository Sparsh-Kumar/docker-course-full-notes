FROM node:23-alpine

# ENV PORT=9000 \
#    MONGODB_URL='mongodb+srv://root:root@databasecluster.pmbbtpx.mongodb.net/?retryWrites=true&w=majority&appName=databasecluster'

RUN mkdir -p /home/source

COPY . /home/source

WORKDIR /home/source

RUN npm install

CMD ["node", "app.js"]
