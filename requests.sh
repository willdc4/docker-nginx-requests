#!/bin/bash
for N in {1..100}
    do
        curl IP_nginx:8080/id
        sleep 1
done
