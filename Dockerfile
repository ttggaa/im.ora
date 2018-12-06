# 基础镜像
FROM node

# 工作目录
WORKDIR /www/im.ora

# 暴露端口
EXPOSE 3000

# 应用入口
ENTRYPOINT ["yarn"]
