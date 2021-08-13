# BUILD STAGE
ARG NODE_VERSION=14.16.0
ARG ALPINE_VERSION=3.13
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS development

WORKDIR /nestjs

COPY package*.json ./
RUN npm install --no-progress --ignore-optional

COPY . .

RUN npm run build


# PRODUCTION STAGE
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS production

ARG ENVIRONMENT=production
ENV NODE_ENV=${ENVIRONMENT}

WORKDIR /nestjs

COPY package*.json ./
RUN npm install --no-progress --ignore-optional --only=production

COPY --from=development /nestjs/dist ./dist

CMD [ "node", "dist/main" ]
