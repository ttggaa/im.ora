# 基础镜像
FROM node

# 工作目录
WORKDIR /var/www

# 暴露端口
EXPOSE 3000

# 应用入口
ENTRYPOINT ["yarn"]
