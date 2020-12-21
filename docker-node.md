# Docker and Node.js Best Practices

[![dockeri.co](http://dockeri.co/image/_/node)](https://registry.hub.docker.com/_/node/)

## Non-root User

By default, Docker runs container as root which inside of the container can pose as a security issue. You would want to run the container as an unprivileged user wherever possible. The node images provide the `node` user for such purpose. The Docker Image can then be run with the `node` user in the following way:

```
-u "node"
```

Alternatively, the user can be activated in the `Dockerfile`:

```Dockerfile
FROM node:14
...
# At the end, set the user to use when running this image
USER node
...
# Permissions
COPY --chown=node:node . .
```

Note that the `node` user is neither a build-time nor a run-time dependency and it can be removed or altered, as long as the functionality of the application you want to add to the container does not depend on it.

If you do not want nor need the user created in this image you can remove it with the following:

```Dockerfile
# For debian based images use:
RUN userdel -r node

# For alpine based images use:
RUN deluser --remove-home node
```

If you need to change the uid/gid of the user you can use:

```Dockerfile
RUN groupmod -g 999 node && usermod -u 999 -g 999 node
```

If you prefer Docker Compose:

```yml
version: '3'
services:
  node:
    image: 'node:14'
    user: 'node'
    working_dir: /home/node/app
    environment:
      - NODE_ENV=production
    volumes:
      - ./:/home/node/app
    expose:
      - '8081'
    command: 'npm start'
```
