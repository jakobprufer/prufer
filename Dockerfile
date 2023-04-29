FROM node:19 AS build

# Build the frontend
ARG version=0.0.1
WORKDIR /web
COPY ./src /web/src
COPY ./public /web/public
COPY ./yarn.lock /web/
COPY ./package.json /web/
COPY ./nginx.conf /web/

RUN npm version --no-git-tag-version ${version} \
  && yarn install \
  && yarn run build

FROM nginx:alpine
# Serve the frontend
EXPOSE 80
COPY --from=build /web/build /serve
COPY --from=build /web/nginx.conf /etc/nginx/nginx.conf
