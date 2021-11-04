FROM node:alpine

WORKDIR /app/backend

ADD package.json /app/backend/package.json

ADD yarn.lock /app/backend/yarn.lock

RUN yarn install

ADD . /app/backend

COPY . /app/backend/

EXPOSE 8000

# CMD ["yarn", "run", "start"]