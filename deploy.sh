#!/usr/bin/env sh
###
 # @Description: 1
 # @Author: ligang
 # @Date: 2023-03-14 16:55:48
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
# cp CNAME docs/.vuepress/dist/
cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ligangli/blog.git main:gh-pages


cd -

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ligangli/blog.git main:main