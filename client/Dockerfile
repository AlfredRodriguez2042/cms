# FROM node

# WORKDIR /app
# COPY build ./
# RUN npm install -g serve






FROM node AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


FROM node

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/build .


