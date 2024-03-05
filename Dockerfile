# Stage 1: Build Angular app
FROM node:18-alpine AS angular-build
WORKDIR /app/angular-app
COPY angular-app/package.json angular-app/package-lock.json ./
RUN npm install
COPY angular-app ./
RUN npm install -g @angular/cli
RUN ng build --configuration production

# Stage 2: Build Node.js app
FROM node:18-alpine AS node-build
WORKDIR /app/node-server
COPY node-server/package.json node-server/package-lock.json ./
RUN npm install
COPY node-server ./
RUN npm run build

# Stage 3: Final image
FROM node:18-alpine
WORKDIR /app
COPY --from=angular-build /app/angular-app/dist ./angular-app
COPY --from=node-build /app/node-server ./
EXPOSE 3000
CMD ["npm", "start"]
