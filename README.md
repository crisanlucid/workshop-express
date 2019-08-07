# Use Express to BUILD a REST API 
- [Resources](#resources)
- [Express](#express)
  - [Installing and config Express](#installing-express)
  - [App](#app)
  - [Routers](#routers)
  - [Controllers](#controlers)
  - [Models](#models)
- [MYSQL](#mysql)
  - [Installing Mysql](#installing-mysql)
  - [Models MYSQL and Sequelize](#models-sequelize)
  - [TDD](#tdd-mysql)
- [MongoDB](#mongo)
  - [Installing MongoDB](#installing-mongodb)
  - [Models MongoDB and Mongoose](#models-mongoose)  
  - [TDD](#tdd-mongodb)

### App
* install `nodemon`
* location - `/`
* commands
  * start the server - `nodemon server.js`
  
### Installing MongoDB
There are many ways to install MongoDB. [The offical website](https://www.mongodb.com/download-center#community) has you covered either way. After installation, you might have to add a `dbPath`, a location where mongodb saves your data. You can do so like this.
```bash
mkdir -p /data/db
```
Note: If you have an error like "data directory not found" or "permission denied" while installing MongoDB:
```bash
sudo mkdir -p /data/db
sudo chown -R $USER /data/db
```

## Resources:
* [MongoDB Docs](https://docs.mongodb.com/)
* [MongoDB Installation](https://www.mongodb.com/download-center#community)
* [Mongoose](https://mongoosejs.com/docs/guide.html)
* [Sequelize](https://sequelize.org/)
* [mLab](https://mlab.com/)
* [Prisma complex ORM](https://www.prisma.io/client/)
* [Hasura GraphQL Engine](https://hasura.io/) - Instant Realtime GraphQL on Postgres
* ["API" tools](https://insomnia.rest/)


