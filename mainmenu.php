<?php

// functions for theme bootstrap
include_once dirname(__FILE__).'/functions.php';

/* fix sections not opening submenues on first click */
if (isset($GLOBALS['pagecategories']['statistics'])) {
    $GLOBALS['pagecategories']['statistics']['toplink'] = 'statsoverview';
}
if (isset($GLOBALS['pagecategories']['develop'])) {
    $GLOBALS['pagecategories']['develop']['toplink'] = 'tests';
}
if (isset($GLOBALS['pagecategories']['system'])) {
    if ( !in_array('system', $GLOBALS['pagecategories']['system']['menulinks']) ){
        array_push($GLOBALS['pagecategories']['system']['menulinks'],'system');
    }
}
if (isset($GLOBALS['pagecategories']['subscribers'])) {
    if ( !in_array('editlist', $GLOBALS['pagecategories']['subscribers']['pages']) ){
        array_push($GLOBALS['pagecategories']['subscribers']['pages'],'editlist');
    }
}

/* add dashboard to top */
if ( !isset($GLOBALS['pagecategories']['home']) && !isset($GLOBALS['pagecategories']['dashboard']) ){
    $pcrev = array_reverse($GLOBALS['pagecategories']);
    $pcrev['dashboard'] = array(
        'toplink' => 'dashboard',
        'pages' => array('dashboard'),
        'menulinks' => array(),
    );
    $GLOBALS['pagecategories'] = array_reverse($pcrev);
}
