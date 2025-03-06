What is Docker Compose ?.
- As we know that in order to run docker using command line can be a bit tedious job in specifying all the necessary configurations for running the docker container,
so Docker compose is basically a tool that helps us in writing the docker commands in the form of a structured .yaml file, which can be edit easily according to the need.

For example - If we try to make a mongo container, then via command it is done as follows.
=> docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo
=> docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb --name mongo-express --net mongo-network mongo-express

Now let's consider how we will write it into a file (say mongo-docker-compose.yaml) file.
version: '3'
services:
  mongodb: // name of the container
    image:
      mongo
    ports:
      - 27017:27017 // port binding
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
  mongo-express:
    image:
      mongo-express
    ports:
      - 8081:8081
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
      - ME_CONFIG_MONGODB_ADMINPASSWORD=password
      - ME_CONFIG_MONGODB_SERVER=mongodb
    restart:
      always
    depends_on:
      - mongodb // specifying that start this container when container with the name of 'mongodb' has started.
      
IMPORTANT = The best thing about docker compose is that it creates common network for all containers that are defined in it we need not to explicitly make seperate network.
As you can see from above .yaml code, we have set up two containers one for mongo and another for mongo-express, when these containers are made, then they are made in same network,
so they can talk to each other without any problem.

IMPORTANT - Syntax for using docker compose is

To Start containers using .yaml file.

// here -f flag denotes file path
// up will start all the containers that are present in this file in detached mode.
docker-compose -f filename up -d 

To Stop containers using .yaml file

// here -f flag denotes file path
// down will stop all the containers also it will remove the network that it created on doing up command.
docker-compose -f filename down 
