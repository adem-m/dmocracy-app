FROM node:alpine

WORKDIR /app

COPY --chown=node:node . .

RUN npm i && chmod 777 /app/node_modules

USER node

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD ["run", "dev"]