FROM node

WORKDIR /app
COPY build ./
RUN npm install -g serve
# FROM nginx

# COPY build/ ./usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]





# FROM node AS builder

# WORKDIR /app

# COPY . .

# RUN npm install

# RUN npm run build


# FROM node

# RUN yarn global add serve

# WORKDIR /app

# COPY --from=builder /app/build .

# CMD [ "serve ", "-p", "5000","-s", "." ]
