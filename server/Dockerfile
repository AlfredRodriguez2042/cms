FROM node

WORKDIR /home/node

USER node

USER node

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .




