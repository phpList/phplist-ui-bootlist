<?php
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
                //if (isset($GLOBALS['pagecategories']['plugins'])) {
                //array_push($GLOBALS['pagecategories']['plugins']['menulinks'],'main&pi='.$pluginName);
                //}
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
        if ($category == 'hide'
            ## hmm, this also suppresses the "dashboard" item
            #     || count($categoryDetails['menulinks']) == 0
        ) {
            continue;
        }

        $thismenu = '';

        foreach ($categoryDetails['menulinks'] as $page) {
            if (!is_array($page)) {
                $title = $GLOBALS['I18N']->pageTitle($page);
                $active = '';
                if ($page == $current_page) {
                    $active = ' class="active"';
                }
                $link = PageLink2($page, $title, '', true);
                if ($link) {
                    $thismenu .= '<li' . $active . '>' . $link . '</li>';
                }
            }
            else {
                $sub = $page;
                $subtitle = key($page);
                $title = $GLOBALS['I18N']->pageTitle($subtitle);
                $active = '';
                if ($subtitle == $current_page || in_array($current_page, $sub[$subtitle])) {
                    $active = ' class="active"';
                }
                $link = PageLink2($subtitle, $title, '', true);
                if ($link) {
                    $thismenu .= '<li' . $active . '>' . $link . '</li>';
                }
            }
        }             
        if (!empty($thismenu)) {
            $thismenu = '<ul>' . $thismenu . '</ul>';
        }

        if (!empty($categoryDetails['toplink'])) {
            $categoryurl = PageUrl2($categoryDetails['toplink'], '', '', true);
            if ($categoryurl) {              
                $topmenu .= '<ul><li><a href="' . $categoryurl . '" title="' . $GLOBALS['I18N']->pageTitleHover($category) . '">' . ucfirst($GLOBALS['I18N']->get($category)) . '</a>' . $thismenu . '</li></ul>';
            } else {
                $topmenu .= '<ul><li><span>' . $GLOBALS['I18N']->get($category) . $categoryurl . '</span>' . $thismenu . '</li></ul>';
            }
        }
    }

    $topmenu .= '</div>';

    return $topmenu;
}