# pull official base image
FROM arm64v8/node:16-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i

# add app
COPY . .

EXPOSE 8081
# start app
CMD ["npm", "run", "serve"]