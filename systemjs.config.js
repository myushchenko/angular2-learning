(function(global) {

  // Map tells the System loader where to look for things
  var map = {
    "app":                        "dist", // "dist",
    "rxjs":                       "node_modules/rxjs",
    "angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api",
    "@angular":                   "node_modules/@angular"
  };

  // Packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    "app":                        { main: "main.js",  defaultExtension: "js" },
    "rxjs":                       { defaultExtension: "js" },
    "angular2-in-memory-web-api": { defaultExtension: "js" },
  };

  var packageNames = [
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/http",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/router",
    "@angular/router-deprecated",
    "@angular/testing",
    "@angular/upgrade",
  ];

  // Add package entries for angular packages in the form "@angular/common": { main: "index.js", defaultExtension: "js" }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: "index.js", defaultExtension: "js" };
  });

  var config = {
    map: map,
    packages: packages
  };

  // FilterSystemConfig - index.html"s chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
