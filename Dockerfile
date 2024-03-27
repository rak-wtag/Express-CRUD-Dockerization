# FROM node:14

# WORKDIR /usr/src/app

# # RUN apt-get update && apt-get install -y default-mysql-client && rm -rf /var/lib/apt/lists/*
# RUN apt-get update && apt-get install -y default-mysql-client netcat && rm -rf /var/lib/apt/lists/*
# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000
# COPY wait-for-it.sh .
# RUN chmod +x wait-for-it.sh
# # RUN npm install -g nodemon

# CMD [ "npm", "start" ]

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#multi step docker file

FROM node:14 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install webpack webpack-cli --save-dev
COPY . .
RUN npm run build

FROM node:14

WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y default-mysql-client netcat && rm -rf /var/lib/apt/lists/*
COPY --from=builder /usr/src/app/dist .
COPY package*.json ./
RUN npm install --only=production
EXPOSE 3000
COPY wait-for-it.sh .
RUN chmod +x wait-for-it.sh
# RUN npm install -g nodemon

CMD [ "node", "final.js"]

