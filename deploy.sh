#!/bin/sh

rm -rf ./dist

npm run build

scp ./dist/* root@39.106.248.162:/usr/share/nginx/static/themis-www/

#scp ./public/js/vendor/revolution-slider/revolution/css/settings.css root@39.106.248.162:/usr/share/nginx/static/themis-www/public/js/vendor/revolution-slider/revolution/css/

