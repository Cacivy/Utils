//Zhihu http://localhost:3000/GET?host=news-at.zhihu.com&url=/api/4/news/latest
var config= {
    site: 'localhost:3000',
    host: 'news-at.zhihu.com',
    method: 'GET'
}

export const API_ROOT='http://'.concat(config.site,'/',config.method,'?host=',config.host,'&url=')
