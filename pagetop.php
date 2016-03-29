<?php
/*
  We request you retain the full headers below including the links.
  This not only gives respect to the large amount of time given freely
  by the developers, but also helps build interest, traffic and use of
  phpList, which is beneficial to it's future development.

  Michiel Dethmers, phpList Ltd 2003 - 2015
  * 
*/
?>
<!DOCTYPE html>
<html lang="<?php echo $_SESSION['adminlanguage']['iso']?>" dir="<?php echo $_SESSION['adminlanguage']['dir']?>" prefix="og: http://ogp.me/ns#">
<head>
<meta charset="utf-8" />
<meta charset="utf-8" />
<?php if (isset($_SERVER['HTTP_USER_AGENT']) && (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== false)) header('X-UA-Compatible: IE=edge'); ?>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="License" content="GNU Affero General Public License, http://www.gnu.org/licenses/agpl.html" />
<meta name="Author" content="Michiel Dethmers - http://www.phplist.com" />
<meta name="Copyright" content="Michiel Dethmers, phpList Ltd - http://phplist.com" />
<meta name="Powered-By" content="phplist version <?php echo VERSION?>" />
<meta property="og:title" content="phpList" />
<meta property="og:url" content="http://phplist.com" />
<link rel="shortcut icon" href="./images/phplist.ico" />
<link rel="icon" href="./images/phplist.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="./images/phplist-touch-icon.png" />
<link rel="apple-touch-icon-precomposed" href="./images/phplist-touch-icon.png" />


<!-- initial styles and JS from basic application -->
<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/jquery.tools.scrollable.js"></script>
<script type="text/javascript" src="js/phplistapp.js"></script>
<link rel="stylesheet" href="css/app.css" />

<!-- now override the above with the styles and JS from the UI theme -->
<link href='ui/bootlist/bootstrap/css/gen.css' rel='stylesheet' />
<link rel="stylesheet" href="ui/bootlist/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="ui/bootlist/css/style.css?v=<?php echo filemtime(dirname(__FILE__).'/css/style.css'); ?>" />

<!-- Style for rtl language <link rel="stylesheet" href="ui/dressprow/css/style_rtl.css" /> -->

<?php
if (isset($GLOBALS['config']['head'])) {
    foreach ($GLOBALS['config']['head'] as $sHtml) {
        print $sHtml;
        print "\n";
        print "\n";
    }
}
