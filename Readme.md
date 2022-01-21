
## Running with Docker

The application was setup to be ran from a docker-compose.yml file.

To run it that way, you just need to have `docker` and `docker-compose` installed and run the following command in the root folder of this repository (where the docker-compose.yml file is located):

```
docker-compose up -d
```

**Important Notes**
* The back-end application will run on **PORT 3000** ;
* The MongoDb database will run on **PORT 27017** ;
* Make sure all these ports are available before running the above command.

## Running without Docker
Antes de rodar, definir suas credenciais do mongodb no arquivo database/db.ts

```
yarn
yarn build
yarn start
```