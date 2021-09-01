FROM        node:lts-alpine
COPY        . ./backend
WORKDIR     /backend
RUN         npm install
CMD         [ "node", "server.js" ]
