What is a Container made of ?.
- Container is basically made of Stack of Layer of IMAGES.
- The Base Image of Container is basically Linux based image, mainly alpine, as alpine base image ensures that the container size remains small.
- On the top of base image you have application image.
- There can be many images on top of each other (see ./images/ContainerAndImages.png).
- One of the advantages of having multiple image layers is that if we pull different versions of the same application then only those image layers would be pulled
in which there is a change b/w different versions otherwise existing layers of images would be used.
