<?php
/* This array is to add third level to phpList menu, adding orphan items to a menulink */
$GLOBALS['subcat'] = array(
	'import' => array ('import1','import2','import3','import4','importsimple'),
	'users' => array('user','userhistory'),
	'list' => array('members','editlist'),
	'usermgt' => array('massremove','usercheck','reconcileusers'),
	'messages' => array('message'),
	'templates' => array('template'),
	'system' => array('converttoutf8'),
	'bouncemgt' => array('bounce','bounces','processbounces','generatebouncerules'),
	'bouncerules' => array('bouncerule'),
	'spage' => array('spageedit'),
	'attributes' => array('editattributes','defaults'),
	);


/* This function is to add third level to phpList menu */
function pageSubCategory($menulinks = array(), $current) {
    foreach ($GLOBALS['subcat'] as $subcategory => $subcat_details) {
        if ( !in_array($current, $menulinks) /* <-first check if is not a menulink */ 
        	&& in_array($current, $subcat_details) /* then find the menulink in array above */ ) {
            return $subcategory;
        }
    }
    return '';
}


/* replace topmenu() function */
function _topMenu()
{
    if ( !isset($_GET['page'] ) ) { $_GET['page'] = ''; }
    $current_page = htmlentities($_GET['page']);
    if (empty($_SESSION['logindetails'])) {
        return '';
    }

    if ($_SESSION['logindetails']['superuser']) { // we don't have a system yet to distinguish access to plugins
        if (count($GLOBALS['plugins'])) {
            foreach ($GLOBALS['plugins'] as $pluginName => $plugin) {
                $menulinks = $plugin->topMenuLinks;
                foreach ($menulinks as $link => $linkDetails) {
                    if (isset($GLOBALS['pagecategories'][$linkDetails['category']])) {
                        array_push($GLOBALS['pagecategories'][$linkDetails['category']]['menulinks'],
                            $link . '&pi=' . $pluginName);
                    }
                }
            }
        }
    }

    $topmenu = '';
    $topmenu .= '<div id="menuTop">';
    if (!DEVVERSION) {
        unset($GLOBALS['pagecategories']['develop']);
    }

    foreach ($GLOBALS['pagecategories'] as $category => $categoryDetails) {
        if ($category == 'hide') {
            continue;
        }

        $thismenu = '';
        $icon = 'glyphicon-plus';
        $icontext = "";
        $open = '';
        switch ($category) {
			case "dashboard" : $icon = "glyphicon-home"; break;
			case "subscribers" : $icon = "glyphicon-user"; break;
			case "campaigns" : $icon = "glyphicon-envelope"; break;
			case "statistics" : $icon = "glyphicon-stats"; break;
			case "system" : $icon = "glyphicon-wrench"; break;
			case "config" : $icon = "glyphicon-cog"; break;
			case "info" : $icon = "";$icontext= "<samp style='line-height:1.5;font-weight:bold;font-size:19px'>i</samp>"; break;
			case "develop" : $icon = "glyphicon-console"; break;
			case "account" : $icon = "glyphicon-briefcase"; break;
        }
        foreach ($categoryDetails['menulinks'] as $page) {
               $title = $GLOBALS['I18N']->pageTitle($page);
                $active = '';
				if ( isset($_GET['pi']) && $page == $current_page.'&pi='.$_GET['pi']
                	|| !$_GET['pi'] && $page == $current_page 
                	|| $page == pageSubCategory($categoryDetails['menulinks'], $current_page) ) {
					   $active = ' class="active"';
                }
                elseif (!isset($_GET['pi']) && $category == pageCategory($current_page) ){ // third level
                    $open = ' class="active open"';
                }
                $link = PageLink2($page, $title, '', true);
                if ($link) {
                    $thismenu .= '<li' . $active . '>' . $link . '</li>';
                }
         }
        $twohomes = array('dashboard','home');
        if ( in_array($current_page,$twohomes) && $categoryDetails['toplink'] == 'dashboard' ) { // page 'home' redirect from dashboard
                    $open = ' class=" active open"';
        }
        if (!empty($thismenu)) {
            $thismenu = '<ul>' . $thismenu . '</ul>';
        }

        if (!empty($categoryDetails['toplink'])) {
            $categoryurl = PageUrl2($categoryDetails['toplink'], '', '', true);
            if ($categoryurl) {
            	$categoryurl = ($thismenu == "") ? $categoryurl : "#";
                $topmenu .= '<ul><li '.$open.' id="'.$category.'"><a class="level0" href="' . $categoryurl . '" title="' . $GLOBALS['I18N']->pageTitleHover($category) . '"><span class="glyphicon '.$icon.'">'.$icontext.'</span>' . ucfirst($GLOBALS['I18N']->get($category)) . '</a>' . $thismenu . '</li></ul>';
            } else {
                $topmenu .= '<ul><li><span>' . $GLOBALS['I18N']->get($category) . $categoryurl . '</span>' . $thismenu . '</li></ul>';
            }
        }
    }

    $topmenu .= '</div>';

    return $topmenu;
}

