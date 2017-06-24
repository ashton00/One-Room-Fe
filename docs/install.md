##  安装包与《安装部署说明》

> 一室团队的代码使用前后端分离，要部署的主要为前端，服务端环境

### 前端安装

 `环境要求`:  nodejs 版本要求:  v6 及以上均可。
 

####  开发运行方法

``` bash
git clone https://github.com/crystalGS/One-Room-Fe.git

# 安装依赖
npm install

# 监听 localhost:8080
npm run dev  或者 npm start

```
#### 部署至生产环境方法

``` bash
https://github.com/crystalGS/One-Room-Fe.git

# 安装依赖
npm install

# 监听 localhost:8080
npm run build

```
将生成的dist文件夹目录拷贝至服务器

配置nginx监听：以下是一种方式

```
server {
    listen 8000;
    server_name returngirl.cn;
    location / {
       root /home/ubuntu/www/one-room-fe/dist;
       index index.html index.htm;
	   try_files $uri $uri/ /index.html;
    }
    location /api {
       proxy_pass http://server-end/api;
    }
    
}
```

### 服务端安装
#### 开发运行方法
```
git clone https://github.com/crystalGS/One-Room-Se.git

# 安装依赖
npm install

# 启动服务端程序
node index.js
```
#### 部署至生产环境

服务端部署至服务器

使用pm2作为守护进程
```
pm2 start index.js
```