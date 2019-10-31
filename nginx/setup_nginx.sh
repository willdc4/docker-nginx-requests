#!/bin/bash
docker build -t nginxbalancer .
docker container run -p 8080:80 -d nginxbalancer
