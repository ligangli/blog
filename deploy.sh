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
git push -f https://github.com/ligangli/blog.git master:gh-pages
# git subtree push --prefix docs/.vuepress/dist origin gh-pages


cd -

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/ligangli/blog.git master:master
