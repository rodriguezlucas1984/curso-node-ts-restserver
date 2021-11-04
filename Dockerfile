FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN  npm install -g typescript && npm install 
COPY . .
RUN npm run build && mv -f .example.env .env && rm -r conf && rm -r dump
CMD ["npm", "run", "start"]

