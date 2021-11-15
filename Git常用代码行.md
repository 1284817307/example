# Git常用命令行

## SSH Keys

本地Git仓库和GitHub仓库之间的传输是通过SSH加密传输的，GitHub需要识别是否是你的推送，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。

我的.ssh文件存放在C:\Users\HP下。id_rsa是私钥，不能泄露，id_rsa.pub是公钥，可以公开。

我已在GitHub上新增了SSH Key, Title为mySSH。

## Git 基本信息

```js
$ git config user.name       //查看用户名
$ git config user.email      //查看邮箱
$ git config --global user.name  "username"     //修改全局用户名
$ git config --global user.email "email"        //修改全局邮箱地址

$ cd ~/you project                       
$ git config user.name  "username"       //修改局部用户名和邮箱地址    
$ git config user.email "email"     
```

## Git 本地仓库信息的查询

```js
$ cd ~/you project
$ git status                //查看当前暂存区状态
```

```js
$ git log 分支名称          //查看指定分支的提交记录信息
$ git log --all            //查看所有分支的提交记录信息
$ git log -nm              //m是一个数字，表示查看最近多少次的记录
$ git log --oneline        //查看当前分支所有的提交记录日志的简要信息
$ git log --graph          //图形化展示当前分支的版本演变信息
$ git log --all --graph -nm --online //不同类型的参数可以自由组合使用
```

## Git链接GitHub远程库

### 简单用法

```js
$ git remote -v            //会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL
$ git add .              //将当前目录下修改的所有代码从工作区添加到暂存区 . 代表当前目录
$ git commit -m ‘注释’      //将缓存区内容添加到本地仓库
$ git push origin master    //将本地版本库(master)推送到远程服务器（origin)
```

