//api
var api= {
    getUrl: function(url){
        return 'http://'.concat(config.site,'/',config.method,'?host=',config.host,'&url='+url)
    },
}