<?php

// functions for theme bootstrap
include dirname(__FILE__).'/functions.php';

/* fix sections not opening submenues on first click */
$GLOBALS['pagecategories']['statistics']['toplink'] = 'statsoverview';
 array_push($GLOBALS['pagecategories']['system']['menulinks'],'system');
