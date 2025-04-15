- Now we are at a phase where we need to push the image of our application we created into Docker repository.
- We will be using "Amazon ECR" for this purpose which stands for "Amazon Elastic Container Registry".
- In amazon ECR, you create single repository for single application. In it, you store multiple versions of the same application in that repository.
- The first step before pushing the repository, is to login into the ECR.
- In order to login into the container repository, you need to install ```aws-cli``` first.
- The image naming in container repositories have this kind of structure {{REGISTRY_DOMAIN}}/{{IMAGE_NAME}}:{{TAG}}
- But now you must be confused that when we were pulling images from "DockerHub" we were using a small command like this
    ```
        docker pull mongo:4.2
    ```
- Actually the above command is a short-hand , in the background the real command which runs when we execute the above command is given as
    ```
        docker pull docker.io/library/mongo:4.2
    ```
- In a private registry, we cannot skip the registry domain part. We will be using this structure while pulling
    ```
    docker pull {{REGISTRY_DOMAIN}}/{{IMAGE_NAME}}:{{TAG}}
    ```
- Before pushing the image to the private repository, we need some kind of renaming so that the Amazon ECR knows in which repository, we have to push it. We do it using command given as
    ```
    docker tag {{IMAGE_NAME}}:{{TAG}} {{REGISTRY_DOMAIN}}/{{IMAGE_NAME}}:{{TAG}}
    ```

-  [IMPORTANT] - Check out image ('./images/DockerRegistryNaming.png')



