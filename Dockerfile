FROM node:lts-alpine3.17

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . . 
RUN npm run build && npm prune --production
ENV PORT 3000
# RUN npm install --frozen-lockfile
EXPOSE 3000
CMD ["node", "build"]






