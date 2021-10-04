FROM node:alpine

WORKDIR /app/backend

ADD package.json /app/backend/package.json

ADD yarn.lock /app/backend/yarn.lock

RUN npm config set registry http://registry.npmjs.org

RUN yarn add @nestjs/graphql graphql-tools graphql apollo-server-express mongoose

RUN yarn install

ADD . /app/backend

COPY . /app/backend/

EXPOSE 5000

# CMD ["yarn", "run", "start"]