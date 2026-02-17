# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.13.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev


USER node


COPY --chown=node:node . .

FROM base as development
ENV NODE_ENV development
USER root
EXPOSE 3000
CMD npm run dev -- --host --port 3000

FROM base as production
ENV NODE_ENV production
RUN npm run build
CMD npm run preview -- --host --port 3000
