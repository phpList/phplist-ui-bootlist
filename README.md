# Trevelin theme (formerly 'Bootlist') 
A bootstrap-based theme for [phpList 3](https://github.com/phpList/phplist3/)

[![Build Status](https://travis-ci.org/phpList/phplist-ui-bootlist.svg?branch=master)](https://travis-ci.org/phpList/phplist-ui-bootlist)

<p float="left">
  <img src="https://www.phplist.com/site/images/readme-images/dashboard_trevelin_theme.PNG" width="400" />
  <img src="https://www.phplist.com/site/images/readme-images/subscribers_list_trevelin_theme.PNG" width="400" /> 
</p>

Bootstrap class names and extra html needed, inserted by jQuery with the script:
`js/phpList3ToBootstrap.js`

## Issues

* [View issues](https://mantis.phplist.org/search.php?project_id=2&category=Theme%20-%20bootstrap&sticky_issues=off&sortby=last_updated&dir=DESC&hide_status_id=-2&match_type=0) on Mantis issue tracker
* [Report issues](https://mantis.phplist.org/bug_report_page.php) on Mantis issue tracker (use category *Theme - bootstrap*)

## Getting started
If you are not going to develop, you don't need the /less and the /bootstrap directories:
* https://github.com/phpList/phplist-ui-bootlist/tree/master/bootstrap
* https://github.com/phpList/phplist-ui-bootlist/tree/master/less

If you are going to develop you need to follow this instructions:

### Building the project 
Requires nodejs & npm. See https://nodejs.org for setup.

### Install Grunt globally
``` 
sudo npm install -g grunt-cli
```
### Grunt plugins
To minify js we use this grunt plugins:

https://github.com/gruntjs/grunt-contrib-concat

https://github.com/gruntjs/grunt-contrib-uglify


### Install project dependencies
``` 
cd THEME_DIR # Replace THEME_DIR by theme path.
sudo npm install
```
### Watch the project
``` 
grunt watch
```
### Minify CSS
``` 
grunt less
```
Each time a less file is changed, style.css will be generated automatically.

### Minify the javascript
``` 
grunt concat
```
To unify all .js in one file: phplist_ui_bootlist.js

And then, to minify that file, you have to run:
``` 
grunt uglify
```
