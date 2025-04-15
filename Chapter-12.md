- Now we have a dockerfile in the project with the name of "Dockerfile".

- In order to build an application image out of it, use this command
```
docker build -t {{IMAGE_NAME}}:{{IMAGE_VERSION}} {{DIRECTORY_WHERE_DOCKERFILE_PRESENT}}
```

- For example we are using this command
```
docker build -t my-app:v1.0 ./docker-course-full-notes/dockerproject/
```

- It may take sometime to create the application docker image. You can check if the image is created successfully using the logs generated when this command was ran.

- Once succesfully created your image should be available to you. You can check it using below command. You should be able to see your image generated.
```
docker images
```

- [IMPORTANT] - When you adjust anything in "Dockerfile". You must re-build the image using the above command.

- Once you can see you image using ```docker images```. You can run the image using ```docker run {{IMAGE_NAME}}:{{TAG}}```
