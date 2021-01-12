FROM node:14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/

USER node

COPY package*.json ./

ARG BACKEND_PORT

ENV REACT_APP_BACKEND_PORT $BACKEND_PORT

COPY --chown=node:node . .

RUN npm install


