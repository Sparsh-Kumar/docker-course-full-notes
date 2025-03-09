- Let's see how to run a node js application with database connection using docker containers.
- We will be running mongo and mongo-express images and they both will be in same network so that they can communicate with each other using container name only.
- The node js application will connect with mongo container using exposed port.

- Create a docker network using "docker network create mongo-network"

- (For setting up mongodb container)
=> docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo

- (For setting up mongo-express container)
=> docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb --name mongo-express --net mongo-network mongo-express

- In .env file of the node.js application add this content
```
PORT=8000
MONGODB_URL='mongodb://admin:password@143.110.190.93:27017/users?authSource=admin'
```

- Now access node application using http://{{IP_ADDRESS}}:8000
