FROM node:17.8

COPY package.json .

COPY package-lock.json .

RUN npm ci


#copio tutto il contenuto della directory del frontend nel docker 
COPY . . 

# starto il server 
CMD [ "npm", "run", "dev" ]