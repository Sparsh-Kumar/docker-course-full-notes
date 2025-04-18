- Now we will see , how to deploy an application we built into a Docker image.
- After you package your application into a Docker image and save it into a Private Container Repository like Amazon ECR, you need to deploy it on DEV server or Integration server or some another environment.
- We are going to use "docker-compose" to deploy the application image.
- In our case suppose, we want to deploy the image we created for our application. Now we have logged into DEV server and we want to run our image (Let's say the name is myapp:v1.0) that we just pushed into private repository and the mongoDB image and mongo-express image as well on DEV server.
- The image "myapp:v1.0" will be pulled from AWS ECR and mongo image & mongo-express image would be pulled from Dockerhub.

- The only change we need to do is to modify the existins "docker-compose.yaml" file of the project in a way given below.

```
version: '3'
services:
  myapp:
    image: 377029775554.dkr.ecr.us-east-1.amazonaws.com/myapp:v1.0
    ports:
      - 8000:8000
    environment:
      - PORT=8000
      - MONGODB_URL=mongodb://admin:password@165.232.189.19:27017/users?authSource=admin
  mongodb:
    image:
      mongo
    ports:
      - 27017:27017
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
      - mongodb
```

- In the above docker-compose.yaml file, we were already pulling the images of "mongodb" and "mongo-express" from DockerHub. But now we have modified the existing "docker-compose.yaml" configuration to include "myapp" image as well. As a result, it will pull the application image from Amazon ECR.
- As you can also see that for the "myapp" image, we have included the environment variables in the "docker-compose" file and commented them out in "Dockerfile".

