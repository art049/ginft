#!/bin/bash
set -e
docker-compose down
docker volume rm -f mongodb_mongo_data
echo "Database cleaned"
