function adminConfig(app){
    this.app = app;
    this.routeTable = [];
    this.init();
}

adminConfig.prototype.init = function (){
    var self = this;
    this.addRoutes();
    this.processRoutes();
}

adminConfig.prototype.addRoutes = function () {
    var self = this;
    
    self.routeTable.push({
        requestType: 'get',       
        requestUrl: '/resultLanguage',
        callbackFunction: function (req, res) {
            res.render('resultLanguage', { title: "Add result language" })
        }
    });

    self.routeTable.push({
        requestType: 'get',       
        requestUrl: '/projectType',
        callbackFunction: function (req, res){
            res.render('projectType', {title:"Add project type"})
        }
    });

}
adminConfig.prototype.processRoutes = function () {
    var self = this;
    self.routeTable.forEach(function (route) {
        if (route.requestType == 'get') {
            self.app.get(route.requestUrl,route.callbackFunction);
        }
        else if (route.requestType == 'post') { }
        else if (route.requestType == 'delete') { }
       
    });
}
module.exports = adminConfig;

