- You can create Docker volumes using "docker run" command. But you can use "docker-compose.yaml" file to create the volumes.
- Let's take an example of how you can create named volume using "docker-compose.yaml" file.
- You can use "volumes" keyword in ".yaml" file for the creation of volumes inside each container scope. This would specify that this container will be using this path for persisting information.
- In the end you have to list down all the volumes that you are using.
- Please refer ('./images/DockerContainerYamlFileVolumesDeclaration.png')

- In order to use volumes let's modify the "docker-compose.yaml" file accordingly to.

```
version: '3'
services:
  # myapp:
  #   image:
  #    377029775554.dkr.ecr.us-east-1.amazonaws.com/myapp:v1.0
  #   ports:
  #    - 8000:8000
  #   environment:
  #    - PORT=8000
  #    - MONGODB_URL=mongodb://admin:password@165.232.189.19:27017/users?authSource=admin
  mongodb:
    image:
      mongo
    ports:
      - 27017:27017
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
    volumes:
      - mongo-data:/data/db
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
      - mongodb
volumes:
  mongo-data: # Name of the volume
    driver: local # It is an indication that docker should create that storage on host local file system.

```

- Now we can see that in container the data folder used by mongodb is "/data/db". You can use "docker exec -it mongodb sh" to get inside the container and check "/data/db" directory.
- Therefore we are mapping a named volume for "mongodb" with the name "mongo-data" into "/data/db".
- So, for example for "mysql", we will map into "/var/lib/mysql" directory. In case of "postgres", we will map into "/var/lib/postgresql/data".

