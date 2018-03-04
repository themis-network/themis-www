#!/bin/sh

rm -rf ./dist

npm run build

scp ./dist/* root@39.106.248.162:/usr/share/nginx/static/themis-www/

#scp ./dist/index.html root@138.68.229.32:/usr/share/nginx/static/themis-www/

