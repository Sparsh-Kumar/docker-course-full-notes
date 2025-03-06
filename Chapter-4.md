Docker Vs Virtual Machines
--------------------------
- Operating systems has the structure like this

--------------
Applications
Os Kernel
Hardware
-------------

- Docker virtualizes the Application Layer and uses the OS Kernel layer of the host.
- Virtual Machine virtualizes the OS Kernel and Applications Layer both. It means when you install a Virtual Machine image on your host, it does not use host's Kernel it boots up it's own Kernel layer.

- That means when you start a Virtual Machine, the VM boots up it's own Kernel and does not use the Host OS's Kernel.
- But When you start a docker it shares the OS Kernel and just virtualizes the Application layer.
- Due to this the Docker image size are lesser than size of Virtual Machine images, Because the VM needs to virtualize Kernel and Application Layer Both whereas Docker images have to virtualize Applications Layer only.
- Also Docker containers start and run much fast as compared to Virtual Machines , because there is more Overhead for VM to bootup Kernel layer and then boot up application layer on top of it.

- IMPORTANT POINTS
- You can start VM of any OS on any other OS for example you can have a linux VM running on Windows Host OS.
- But you cannot run docker image of one OS type on another OS type host as you do in case of VM.
- Because while starting VM the VM does not care about host's kernel and boots up its own Kernel and thus able to run different OS on different Host OS.
- But in case of docker, they share the same Kernel of Host OS, so they cannot achieve this type of functionality.
