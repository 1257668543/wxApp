const trendings = () => new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve([{
    //         repo: '阿雷项目'
    //     }])
    // }, 2000)
    // wx.request()
    const url = 'https://github-trending-api.now.sh/repositories'
    wx.request({
        url,
        success(res) {
            console.log(res)
            resolve(res);
        }
    })
})
// new Promise（） 封装数据请求，对于需要执行时间的操作
const getRepo = () => new Promise((resolve, reject) => {
})

module.exports = {
    trendings,
    getRepo
}