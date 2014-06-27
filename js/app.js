var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    FastClick.attach(document.body);
}

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
		
});