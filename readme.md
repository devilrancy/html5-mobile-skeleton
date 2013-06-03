HTML5 Mobile Skeleton
=====================

A skeleton for mobile HTML5 apps. Ready-to-go webroot directory, intended to get things started fast.

## Features
* Static *.html templates
* SLIM PHP app templates
* Support for require.js
* Support for SASS and LESS
* Support for Composer
* Support for Bower 
* Some pre-configured Grunt tasks


## Setup
This repository features a basic HTML-only skeleton as well as a simple [SLIM PHP](https://github.com/codeguy/Slim) app with [Twig](https://github.com/fabpot/Twig) templates. To install [Composer](https://getcomposer.org/) and all dependencies run
```bash
curl -sS https://getcomposer.org/installer | php
php composer.phar install
```

To make your life even easier and use the [Grunt](http://gruntjs.com/) tasks that come with this app skeleton (concat and uglify JavaScript files, watch and compile SCSS files, compile LESS) make sure to install the required node.js modules like so:
```bash
npm install
```

Finally, if you want to use require.js you can fetch it via Bower:
```bash
bower install
```

There's also a neat installer script that does all that dumb work for you and installs everything at once:
```bash
sh install.sh
```