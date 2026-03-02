FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

RUN apk add --no-cache wget

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]