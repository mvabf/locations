FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

COPY . /app

RUN yarn
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]