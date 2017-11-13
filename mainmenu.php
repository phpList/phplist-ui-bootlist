<?php

// functions for theme bootstrap
include_once dirname(__FILE__).'/functions.php';

if ($page_title == 'userclicks') $page_title = s('Click Statistics'); /* REMOVE AFTER RESOLVE MANTIS #18945 */

/* fix sections not opening submenues on first click */
$GLOBALS['pagecategories']['statistics']['toplink'] = 'statsoverview';
$GLOBALS['pagecategories']['develop']['toplink'] = 'tests';
if ( !in_array('system', $GLOBALS['pagecategories']['system']['menulinks']) ){
	array_push($GLOBALS['pagecategories']['system']['menulinks'],'system');
}
if ( !in_array('editlist', $GLOBALS['pagecategories']['subscribers']['pages']) ){
	array_push($GLOBALS['pagecategories']['subscribers']['pages'],'editlist');
}



/* remove dashboard from info submenu */
if ( in_array('home', $GLOBALS['pagecategories']['info']['menulinks']) ){
		$dashk= array_search('home',$GLOBALS['pagecategories']['info']['menulinks']);
	unset($GLOBALS['pagecategories']['info']['menulinks'][$dashk]);
	unset($GLOBALS['pagecategories']['info']['pages'][$dashk]);
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
