# IT外包
  
 1. 解决什么问题
        疫情下 线下成本太高，-> 线上
        省成本，把大学生召集起来
        学生 结束检测 项目配对 质量代码提交，绩效考核
 2. 服务哪些人
 3. 技术方案
        把大学生的研发价值发掘出来
        加入平台
        学生表：student
            _id     
            skill   技能
            resume  履历
            salary  期望薪资
            rate    0-5 平台评分
            title 高手 大神 我的天呐 伟大的XXX  头衔   
        项目表：project
            _id
            title   项目名称
            desc    项目描述
            photos  UI设计图
            start_ts    开始时间
            end_ts  截止时间
            price   外包价格
            type    项目类型
        甲方表：Owner
            _id
            type    个人|企业
            indicate    执照
            rate    评分

可以评价 comments 可以升级(社区) 可以

成长机制 
    时间 计时 github
    timeline 每天提交timeline
    列表
    7:00-10:00
    - list
    拍照加计时功能  程序员 

5W 


核心表
    Student
        title  salary  total_salary  start_ts  rate  school (薪人薪事)
    Owner
    Project
        图片 + 描述
    Comment
    Record
    Order