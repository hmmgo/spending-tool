FROM node:8.3-alpine
EXPOSE 8080
RUN mkdir /image
WORKDIR /image
RUN cd /image
COPY ./package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]