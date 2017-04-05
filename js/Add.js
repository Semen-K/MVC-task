
require(['Model/Model','View/View','Controller/Controller'],
function   (Model,        View,          Controller) {
                document.querySelector('#click_my').onclick = function() {
                let appController = new Controller();
                let appModel = new Model(appController);    
                appController.urlRequst(appModel.ServerReq) 
                }
});

 
  