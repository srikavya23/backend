FROM         node:lts-alpine
RUN          mkdir  -p /app/backend
WORKDIR      /app/backend
COPY         .  /app/backend
RUN          npm install
COPY         . /app/backend
RUN          ls
CMD          [ "node", "server.js"]
