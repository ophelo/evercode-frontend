FROM node:17.8

#copio tutto il contenuto della directory del frontend nel docker 
COPY . . 

# appena apro il docker scarico le dependencies 
RUN npm install

# starto il server 
CMD [ "npm", "run", "dev" ]