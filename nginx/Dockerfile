FROM nginx:1.15.0-alpine

RUN echo 'Instalando Dockerize - Nginx'

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update \
    && apk add --no-cache wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d