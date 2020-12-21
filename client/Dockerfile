FROM node:14

WORKDIR /home/node/

USER node

USER node

COPY package*.json ./

ARG BACKEND_PORT

ENV REACT_APP_BACKEND_PORT $BACKEND_PORT

RUN npm install

COPY --chown=node:node . .

