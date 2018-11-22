#!/bin/sh

echo "Waiting to delete cache files..."
sudo rm /srv/http/* -r

sudo mkdir /srv/http/im

echo "Waiting to copy files..."
sudo cp ~/www/im.xiaoyu/build/* /srv/http/im -rv
echo "Successful!"
echo "Local: http://localhost:80/"

exit 0
