# Node Js
FROM node:lts

LABEL maintainer="Piscibus"

RUN mkdir -p /var/www/html
WORKDIR /var/www/html
ENV PATH /var/www/html/node_modules/.bin:$PATH

COPY . /var/www/html

RUN yarn install
RUN yarn build
