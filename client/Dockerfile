# FROM node

# WORKDIR /app
# COPY build ./
# RUN npm install -g serve






FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build


# FROM node:14

# RUN npm install -g serve

# WORKDIR /app

# COPY --from=builder /app/build .


