- Now as of now, we have completed the following steps in the lifecycle
    - Development of the application.
    - Commit to Git.
    - May be Jenkins or Circle CI would run the tests and create a docker image of the application (We simulated that in previous chapters).
    - Once the docker image is created successfully, the docker image is pushed to Amazon ECR (Ofcourse, Jenkins or Circle CI must have credentials to login into ECR and push the images.)

- Now in order to deploy the latest build image pushed on Amazon ECR , we need to pull the image from Amazon ECR on our DEV or PROD servers and run them. As a result, the latest image would be deployed on the environment.

- Please refer to the image ('./images/LifeCycleFlowOfApplication.png')

