#!/bin/bash

# build the image using the Dockerfile and name it docker-404-app
docker build . -t docker-404-app

# run the image as a container on port 404
docker run -d -p 404:8080 --name docker-404-app docker-404-app