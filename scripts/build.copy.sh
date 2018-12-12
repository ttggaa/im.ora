#!/bin/sh


# 将打包后的项目 copy 到家目录
rsync -av --delete ~/www/im.ora/build/articles\
		   ~/www/im.ora/build/im/*\
		   ~/www/im.ora/build/page01\
		   ~/www/im.ora/build/page02\
		   ~/www/im.ora/build/page03\
		   ~/www/im.ora/build/page04\
		   ~/www/im.ora/build/page05\
		   ~/www/im.ora/build/page06\
		   ~/www/im.ora/build/page07\
		   ~/www/im.ora/build/page08\
		   ~/www/im.ora/build/index.html\
		   ~/www/im.ora/build/asset-manifest.json\
		   ~/www/im.ora/build/favicon.ico\
		   ~/www/im.ora/build/manifest.json\
		   ~/www/im.ora/build/service-worker.js\
		   ~/www/im.ora/build/sitemap.xml\
		   ~/www/im.ora/build/static\
		   ~/www/im

exit 0
