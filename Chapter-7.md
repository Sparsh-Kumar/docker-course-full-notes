Consider the scenerio that we are running containers of postgres of 2 different versions which both are listening on 6345 port ,
but how can they manage to listen on same port ?.
- Actually this happens because different HOST's port are binded to 6345 port of different containers.
- In order to make multiple containers (running on same port) available for operation we need to create a binding b/w HOST port and container PORT.
for example you can have version 1 of postgres listening on PORT 6325 and another version 2 of postgres also listening on PORT 6325.
But we create port binding such that version 1 is binded to port 3301 of HOST machine and version 2 is binded to port 3300 port of HOST machine.
Now,
version 1 would be available as 127.0.0.1:3301 and version 2 would be available on address 127.0.0.1:3300.
IMPORTANT - Without port binding the container would be unreachable.
You can see ./images/ContainerPortVsHostPort.png


- [IMPORTANT] Checkout the updated workflow using the docker in ./images/workflowWithDocker.png
