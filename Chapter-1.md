What is a container ?
- A way to package application in an isolated environment with all the necessary configuration and dependencies.
- The package that we get is a portable artifact, which can be easily shared and moved around.
- This way makes development and deployment more efficient.

Where does a container resides ?
- Containers resides in a CONTAINER REPOSITORY.
- Most companies also have private container repositories where they can pull any Container or push any container.
- There is also a public repository for containers which is DOCKERHUB.

How Containers improve the Application development Process ?.
- Before Containers, every developer may have different OS and each one of them has to configure dependencies (Redis, postgres sql etc.) on their system seperately.
- The configuration on each box is different.
- The process of configuring all these services on different OS can be problematic, If even a little thing go wrong.
- With the help of Containers you don't have to actually download any of the dependencies directly on your OS.
- As Container has it's own isolated OS you need not to worry about download and configuring all the binaries directly on your OS.
- Now After the use of Containers, you just have to go to a public docker repository and download a container image and run it.
- This step would not require you to configure all the dependencies seperately on your local environment, the container already comes with all things packaged.

How Containers improve the Application Deployment Process ?.
- Before Containers a team of developers would make a set of instructions to give to DevOps team on How to configure server environment.
- As DevOps team directly downloads and install those dependencies according to instructions given by Developer team directly on server, there may be chances that version conflicts happen on server.
- The developers by mistake may forgot to mention some important step in intructions that they give to DevOps team.
- Or maybe the DevOps team misinterprets some instructions given by Developers team to DevOps team.
- In that case they have to communicate back and forth a lot and thus consumes time and effort.
- Therefore this was a tedious job for DevOps team in this case.
- After Using Containers, The developers packages the application they develop in a isolated environment with all necessary configuration and dependencies.
- So DevOps team is not needed to configure any dependency directly on server.

IMPORTANT - With the help of docker you can have multiple versions of application running on your local system at the same port without having any conflict.
