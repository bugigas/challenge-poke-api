FROM node:16-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock* ./

RUN yarn install --frozen-lockfile --production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
