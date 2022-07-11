# latest version of node when writitng this dockerfile
FROM node:18.5.0-alpine3.16

# create and move to the workdir inside the container
WORKDIR /usr/src/app

# copy dependencies to container cwd (currently /usr/src/app)
# wildcard used to ensure both package.json and package-lock.json
COPY app/package*.json ./

RUN npm install

# bundle app source
COPY app .

# make port available from outside
EXPOSE 8080

# command to run when container is ready
CMD [ "npm", "run", "start" ]
