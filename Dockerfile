FROM node:12
WORKDIR /app
COPY ./painel-admin .
RUN npm install
ENTRYPOINT [ "npm", "serve" ]