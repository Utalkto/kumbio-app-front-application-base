# Use an official Node runtime as a parent image
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /react-docker-example/

COPY . /react-docker-example/

# Install app dependencies
RUN npm install -g npm
RUN npm install --force
RUN npm i sharp --force
RUN npm run build


# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app when the container launches
CMD ["npm", "start"]