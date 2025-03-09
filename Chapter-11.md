- Now we will learn how to build our own docker image of our Node application provided in the folder "dockerproject"
- Consider a scenario in which you developed a feature, but now you are ready for the deployment. But before deployment your application should be packaged into it's own docker image.
- This means we are going to build a docker image from our Node JS application and prepare it to deploy on some environment.


- Generally what would happen is this.
    - You did some feature development.
    - You push your changes into github.
    - Jenkins has CI enabled and therefore it fetches the updated code from git and it "build JS App (may be like npm run build in Nest or Typescript projects) and creates a docker image".
    - It then pushes the created docker image of the NodeJS application into docker repository (Amazon ECR).
    - Please refer to the diagram given in this file ('./images/JenkinsCIFlow.png')

- We will simulate the steps that Jenkins would do to create the image of the NodeJS application manually to learn it in a better way, later we can configure Jenkins properly without any issues.
- Let's learn how to build a docker image of our Node application.
- There is a blueprint for creating docker images of the application that blueprint is known as "Dockerfile".
- The first line of every Dockerfile would be like "FROM node". This specifies basically the base image that we are using for creating docker image of our application. We can use alpine image as well, but then it would not have node installed on it. By specifying "FROM node" we are telling that we are starting from the base alpine image which already have node successfully installed on it. When we will get interactive terminal access inside the container we will see node by default is installed on it.

- Next thing we can configure is environment variables inside "Dockerfile". As you know we already done this in "docker-compose" file . So this will be just an alternative to define environment variables. It is better to define environment variables inside "docker-compose" because after you change anything in "Dockerfile" (in this case environment variables) then you have to build the image again. But if you change environment variables in docker-compose, you don't have to build the docker image of the application again.

- Then another command we use is "RUN ". This can be used to run any kind of linux command, we would use it liek "RUN mkdir -p /home/app". [IMPORTANT] It will create the directory inside container not on the host. Every command using "RUN" would affect container environment not host environment.

- Then another command we generally use is "COPY" command like "COPY . /home/app". The given command is used to copy everything from current host directory into container directory "/home/app". Now as you can see it is copying files from host file system and placing them inside container file system.

- People can argue that we can use "RUN" command for copy as well. We can, but as I already told that "RUN" command can execute any linux command but would not affect anything on host file system. On the other hand "COPY" command is being used to copy files from HOST file system into CONTAINER file system. There is huge difference b/w these 2 things.

- Another command we generally use is "CMD" command like "CMD ['node', 'app.js']". This command gives an entry point of the application which is equal to "node app.js" inside container. We are able to do it, bcz we already have "node" installed bcz we are specifying to use node image using "FROM node".

- Another question is that what is the difference b/w "RUN" and "CMD" command. I can use "RUN" command to run "node app.js". A "Dockerfile" can have multiple "RUN" commands but only one "CMD" command. It marks for "Dockerfile" that this is the command you want to execute as an entry point.

- "Dockerfile" is always the part of the application code.

- [IMPORTANT] - Checkout for "Dockerfile" in the "dockerproject".



