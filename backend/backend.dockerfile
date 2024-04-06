FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npm run gen

RUN npm run db

RUN npx prisma generate

COPY . .

EXPOSE 4000

CMD npx prisma db push && npx prisma db seed && node index.js
