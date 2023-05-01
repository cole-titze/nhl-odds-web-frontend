# pull official base image
FROM arm64v8/node:16-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm install serve

# add app
COPY . .

EXPOSE 8081
# start app
ENTRYPOINT ["npm", "run", "serve"]