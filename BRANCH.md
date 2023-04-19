# 分支管理、代码合并流程和规范

## 分支管理和规范

1. 常规分支

   - master：不允许直接提交代码，只能从 release, hotfix, dev 分⽀进⾏ PR 合并
   - release: 不允许直接提交代码，只能从 hotfix, dev 分⽀进⾏ PR 合并
   - dev: 不允许直接提交代码，只能从 hotfix, 个⼈分⽀进⾏ PR 合并
   - test：和 Master ⼀样，只是⽤于 demo 和测试

2. 临时分支
   - Feature: 只允许从 develop 分⽀进⾏ checkout
   - Bug/hotfix: 只允许从 master 或者 dev 分⽀进⾏ checkout
   - Release: 只允许从 master 分⽀进⾏ checkout

## 常规规范

1. Feature 分⽀以名字/feature/事务进⾏命名，⽐如: apax/feature/user-management
2. bug 和 hotfix 分⽀以名字/类型-ticket 号进⾏命名，⽐如: apax/bug-cart-button
3. git 的全局⽤户名和邮箱需要使⽤公司的名字和邮箱

## 提交管理

1. commit 代码需将代码粒度区分⾄模块，接⼝，⽂档，注释等。粒度区分完毕再以做的事情来作为命名此次
   commit 提交，尽量最⼩化的提交 PR, ⽅便同事做 Code Review

2. 粒度区分完毕后，commit 的信息规范如下

   - feat：新功能/模块（feature）
   - fix：修补 bug
   - docs：⽂档（documentation）
   - style：注意这⾥不是 css，⽽是不影响程序逻辑的代码修改(修改空⽩字符，格式缩进，补全缺失的分
     号等，没有改变代码逻辑)
   - refactor：重构代码(既没有新增功能，也没有修复 bug)
   - perf：代码性能提升
   - test：新增测试⽤例或是更新现有测试
   - chore：构建过程或辅助⼯具的变动
   - revert：回滚某个更早之前的提交

3. example
   feat(user-management): completed user management UI
   DONE:
   1
   2
   TODO: 这⾥的⽬的是告诉 Code Review 的⼩伙伴，还有⼀些没有做完，以提⾼沟通效率
   1
   2

## 代码合并流程和规范

### Pull Request

- 任何⼈不得向 Dev 和 Master 分⽀直接提交代码
- 创建 PR 之后，需要等团队相关的成员全部 Review 并且 Approval 之后才能合并，合并之前确保所有的
  conversation 是 resolved
- 如果是业务逻辑较多，在创建 PR 的时候提交⾃测的屏幕截图或者描述清晰，⽅便同事做 Code Review
- 团队约定一次代码 commit, 修改或者新增文件总数量不能超过 10 个

### Code Review

- Code Review 的⽬的是同事间相互学习，不存在级别的限制，建议⼤家写 comments 的时候以"建议"的⽅
  式⽽不是"命令"式

# Aliyun Codeup

- 本地临时分支开发完成，推送远程临时分支 git push
