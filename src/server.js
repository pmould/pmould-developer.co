"use strict";
// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
require('angular2-universal-polyfills');
// Fix Universal Style
var node_1 = require('angular2-universal/node');
function renderComponentFix(componentProto) {
    return new node_1.NodeDomRenderer(this, componentProto, this._animationDriver);
}
node_1.NodeDomRootRenderer.prototype.renderComponent = renderComponentFix;
// End Fix Universal Style
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// Angular 2
var core_1 = require('@angular/core');
// Angular 2 Universal
var angular2_express_engine_1 = require('angular2-express-engine');
// App
var app_module_1 = require('./app/app.module');
// enable prod for faster renders
core_1.enableProdMode();
var app = express();
var ROOT = path.join(path.resolve(__dirname, '..'));
// Express View
app.engine('.html', angular2_express_engine_1.createEngine({
    precompile: true,
    ngModule: app_module_1.AppModule,
    providers: []
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));
//import { serverApi } from './backend/api';
// Our API for demos only
//app.get('/data.json', serverApi);
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: 'http://localhost:3000'
    });
}
// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/', ngApp);
/*
app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});
*/
// Server
var server = app.listen(app.get('port'), function () {
    console.log("Listening on: http://localhost:" + server.address().port);
});
