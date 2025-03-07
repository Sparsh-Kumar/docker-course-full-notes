Docker Network
--------------
- When we run a docker image it creates a docker container and each docker container creates it's own isolated docker network.
- When I deploy two containers in same docker network, then they can easily talk to each other using only the container names(without localhost, port number etc) as these are in the same network. (Check network commands in chapter-6)
- See ./images/DockerNetworkExample.png
