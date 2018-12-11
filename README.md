# 橘子情感移动端


## 安装要求

1. 项目依赖 nodejs 环境，安装指南请参考 [Node 官网](http://nodejs.cn/);
2. 该项目使用 yarn 包管理器管理以来，参考 [Yarn 官网](https://yarn.bootcss.com/)
   安装使用;


## 安装步骤

1. 首先 Fork 项目到你的 Github 仓库；
2. 在你的 Github 仓库中 clone 项目到你的开发机；
3. 进入项目目录，并执行 yarn 安装项目依赖：
   ```bash
   $ yarn
   ```
4. 执行 `$ yarn start`，在你的浏览器中打开 http://localhost:3000/ 即可预览项目，
   项目截图如下：
   ![demo](./demo.png)


## 部署

1. 执行 `yarn build` 对项目打包；
2. 执行 `yarn sitemap` 生成站点地图；
3. 执行 `yanr build:copy` 整理打包后的项目目录并将其拷贝到家目录下的 im 文件夹。
4. 将家目录 im 文件夹下的文件上传到虚拟主机即可。


## 补充信息

为方便开发和部署后的测试，建议使用 Docker 容器。


### 准备工作

1. Linux 下安装 Docker 请参考 [官网](http://docker.io/)；
2. 项目下执行 `docker build -t yarn_env .` 构建 yarn 环境镜像；

### Docker 下开发

1. 利用上一步中生成的 yarn_env 镜像做开发环境，在项目依赖被完全安装的前提下，命令
行中执行一下命令：
     ```bash
     $ docker run -d -P --name im.ora -v [project location]:/var/www yarn_env start
     ```
2. 执行 `docker ps` 查看项目端口号；
3. 在你的浏览器地址栏中输入 http://localhost:[端口号] 即可查看项目效果；
4. happy hacking!


### Docker 下测试部署

1. 拉取 Docker 官方 httpd 镜像；
2. 开启容器并挂载打包后的项目文件夹作为数据卷：参考命令如下：
    ```bash
    $ docker run -d -P --name httpd -v [builded project location]:/usr/local/apache2/htdocs/im httpd
    ```
3. 执行 `docker ps` 查看项目端口号；
4. 在浏览器中查看部署后的效果。

若测试部署没有任何问题，将打包后的项目文件夹上传到虚拟主机即可。
