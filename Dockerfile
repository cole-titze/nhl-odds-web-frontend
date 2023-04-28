# pull official base image
FROM arm64v8/node:16-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@latest
RUN npm install react-scripts -g --silent
RUN npm install serve -g --silent
RUN npm i

# add app
COPY . .

EXPOSE 8081
# start app
CMD ["npm", "run", "serve"]