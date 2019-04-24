#!/bin/bash
cd ./MCBEServerVersions
git config --global push.default matching
git config --global user.email "${GithubEmail}"
git config --global user.name "${GithubUser}" # 利用在环境变量中定义的信息配置 Git
git add --all .
git commit -m "refactor:Auto Tracker of MCBE-Server" # commit 信息
git push --quiet --force https://${GithubKey}@github.com/${GithubUser}/${GithubRepo}.git master # 部署到指定 Repo 的 master 分支。