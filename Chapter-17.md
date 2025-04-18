
- Now whenever we start the setup using "docker-compose" all the previous data is lost, so there is no persistence of the data.
- We make use of the concept of Volumes in Docker to persist data.


- When do we need Docker Volumes ?
  - When we want to persist data , because on restarting the containers the data in the containers gets empty. Please refer ('./images/WhenDockerVolIsNeeded.png')

- What is a Docker Volume exactly ?
  - On the host we have a physical file system and the way Volumes work is that we plug the physical file system path (folder or directory) with the container's file system path. So basically a folder in physical host file system is "mounted" into the directory or folder of the virtual file system of the Docker. Please refer ('./images/DockerVolumePlugging.png'). What happens is that when the container writes information in the virtual file system of the container, that is replicated or automatically written on the mounted host file system directory and "vice-versa" as well.

- Now when the container restarts, even if initially the virtual folder of file system is empty but the "mounted" host folder is not empty on the host machine. The data is automatically replicated or written from "mounted" host file system to virtual file system of the container. This is how the data is populated everytime you restart the container. Please refer ('./images/DockerAutomaticDataReplication.png')


- There are different types of Docker Volumes
  - Host Volumes = Volumes are specified while doing "docker run" command. In this type of volume you specify which "host file system" is mounted on container's "virtual file system". Please refer('./images/DockerContainerHostVolumes.png').
  - Anonymous Volumes = Volumes are created by just referencing the container directory only. You do not specify which directory on the host should be mounted, but that's taken care by the Docker itself. The directory is created by docker under "/var/lib/docker/volumes/random_hash/_data". These are known as anonymous volumes because you don't specify the host machine file system path, you just know that for each container the directory would be created under "/var/lib/docker/volumes/random_hash/_data". Please refer ('./images/DockerContainerAnonymousVolumes.png')
  - Named Volumes = This type of Volumes are actually an improvement of Anonymous Volumes. It specifies the "name" of the folder on the host file system. Name is up to you, it is just to name the directory only. In production it is suggested to use "Named" volumes, because there are additional benefits of letting docker manage those volume directories on the host. Please refer ('./images/DockerContainerNamedVolumes.png')

- [IMPORTANT] - In production it is suggested to use "Named Volumes", because there are additional benefits of letting docker manage those volume directories on the host.
