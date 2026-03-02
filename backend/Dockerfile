FROM node:20-alpine

WORKDIR /app

# 依存だけ先に入れてキャッシュ効かせる
COPY package.json package-lock.json* ./
RUN npm install

RUN apk add --no-cache wget

# ソース
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]