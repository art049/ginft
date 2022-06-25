# API

## Stack

- [Prisma](https://www.prisma.io/docs/reference)
- [TypeGraphQL](https://typegraphql.com/docs/introduction.html)
- [TypeGraphQL Prisma](https://prisma.typegraphql.com/docs/intro)

## Getting Started (development)

1. Configure your local dev environment by adding this to your `.env` file:

   ```
   MONGO_URL="mongodb://localhost:27017/demosdev?replicaSet=demos-dev-set"
   ```

2. Start the local dev environment:

   ```shell
   yarn dev
   ```

3. Populate your local database:

   ```shell
   yarn prisma:seed
   ```

4. You can access the Prisma Studio at [http://localhost:5555/](http://localhost:5555/)

5. You can access the Apollo playground at [http://localhost:3001/api/graphql](http://localhost:3001/api/graphql)
