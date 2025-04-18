Docker Common Commands
----------------------

- docker pull - Pull the docker image from docker repository.
- docker ps - List all running containers.
- docker images - List all docker images you have locally.
- docker start [CONTAINER_ID] - To Start a stopped container.
- docker stop [DOCKER_CONTAINER_ID] - Stop the running docker container having id DOCKER_CONTAINER_ID.
- docker run [IMAGE_NAME] - Runs a docker image in non-detached mode container.
- docker run -d [IMAGE_NAME] - Runs a docker image in detached mode container.
- docker ps -a - List info of all containers which are running or not running.
- docker run -p[HOST_PORT]:[CONTAINER_PORT] -d [IMAGE_NAME] - Create a container in detached mode and create a port binding b/w host port and container port and starts the container.
- docker network ls - List all the docker networks (autogenerated also along with the ones you created).
- docker network create [NETWORK_NAME] - Creates a new docker network.
- docker rm [CONTAINER_NAME] - Remove a docker container.
- docker rmi [DOCKER_IMAGE_NAME] - Remove a docker image.

[IMPORTANT]
------------
=> docker logs [CONTAINER_ID] - To get the logs of the container whose id is specified in the command.
OR
=> docker logs [CONTAINER_NAME]

=> docker logs [CONTAINER_NAME] | tail - To get last part of the logs.

=> docker logs [CONTAINER_NAME] -f - To string the logs.

=> docker run -p[HOST_PORT]:[CONTAINER_PORT] -d --name [CONTAINER_NAME] [IMAGE_NAME] - Create a container in detached mode and create a port binding b/w host port and container port and starts the container and provide the name given in --name argument to the container.

=> docker run -p[HOST_PORT]:[CONTAINER_PORT] -d -e [ENVIRONMENT_VARIABLE_NAME]=[ENVIRONMENT_VARIABLE_VALUE] -e [SECOND_ENVIRONMENT_VARIABLE_NAME]=[SECOND_ENVIRONMENT_VARIABLE_VALUE] --name [CONTAINER_NAME] [IMAGE_NAME] --net [DOCKER_NETWORK_NAME] - This will start docker in detached mode as previous command but it also sets some environment variables and make this docker available in the network name specified in --net arguments.

=> docker exec -it [CONTAINER_ID] OR [CONTAINER_NAME] /bin/bash - To get interactive bin bash terminal of a running container.

=> Difference b/w docker run and docker start command is that, docker run work with images and create a brand new container, but docker start command does not work with images, it is used to restart the stopped container with all predefined values like name of container, port binding all previously used.

Example practical commands for docker
(For setting up mongodb container)
=> docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo

(For setting up mongo-express container)
=> docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb --name mongo-express --net mongo-network mongo-express

- [IMPORTANT] In the above command "ME_CONFIG_MONGODB_SERVER" is the mongodb container name, so that If both of the above containers are running in same docker network they can communicate with each other using the docker container names only.
