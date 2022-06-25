#!/bin/bash
set -e
printf "Waiting for an instance ."
sleep 1;
while ! docker-compose exec -T mongo mongo --eval "db.getMongo()" > /dev/null 2>&1
do
  printf "Waiting to configure the mongo replicaset"
  sleep 1;
done
printf "OK\n"

printf "Initializing the replicaset ..."
docker-compose exec -T mongo mongo --quiet /scripts/init.js
printf "Replicaset initialized with success.\n"
pnpm prisma:apply-constraints
printf "Database constraints applied.\n"
pnpm prisma:seed
printf "Database seed data populated.\n"
