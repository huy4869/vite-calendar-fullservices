# Docker file

# Use the node image from official Docker Hub
FROM node:20.10.0 as build-stage

# set the working directory
WORKDIR /app

# Copy the working directory in the container
COPY package*.json ./

# Install the project dependecies
# if you npm then npm install
RUN yarn install

# Copy the rest of the project files to the container
COPY . .

#Build the Vue.js application to the production mode to dist folder
# here also if you use npm then npm run build
RUN yarn build

# use the lighweight Nignx image from the previus state to the nginx container
FROM nginx:stable-alpine as production-stage

# Copy the build application from the previos state to the Nginx container
# her we can see the path of the build application and the path where we want to copy it
COPY --from=build-stage /app/dist /app

# Copy the nginx configuration file
# here should be the same name as the nginx configuration file in the project
COPY ./nginx/default.conf /etc/nginx/nginx.conf

# Expose the port 80
EXPOSE 80

# start nginx to server the application
CMD ["nginx", "-g", "daemon off;"]

#FROM node:20.10.0 as build-stage
#WORKDIR /app
#COPY package*.json ./
#RUN yarn install
#COPY ./ .
#RUN yarn build
#
#FROM nginx as production-stage
#RUN mkdir /app
#COPY --from=build-stage /app/dist /app
#COPY nginx.conf /etc/nginx/nginx.conf