</head>
<body class="invisible <?php if(isset($GLOBALS['page'])) print $GLOBALS['page'];else print "home-not-auth"; ?>">
<div id="dialog"></div><div id="hiddendiv"></div>

<nav id="navigation" class="navbar navbar-inverse <?php /* navbar-fixed-top*/ ?>">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menuTop" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="http://www.phplist.com" target="_blank" class="navbar-brand"><img src="ui/dressprow/images/branding.png" alt="phpList, email newsletter manager, logo" title="phpList, the world's most popular Open Source newsletter manager" /></a>
        </div>
        <?php print topMenu(); ?>
        <div id="logged" class="navbar-right">
            <?php
              if ($GLOBALS["require_login"] && (!isset ($_SESSION["adminloggedin"]) || !$_SESSION["adminloggedin"])) {
                print ('<a id="login" class="navbar-btn btn-primary btn-sm" href="./?page=home">Login</a> ');
              } else {
                print ('<a id="logout" class="navbar-btn btn-primary btn-sm" href="./?page=logout">Logout</a>');
              }
            ?>
        </div>
    </div>
</nav>

<div id="container" class="container">
    <div id="globalhelp">
    <?php
      $globalhelp = $pageinfo->content();
      if (!empty($globalhelp)) { ?>
        <div class="content">
            <div class="text">
                <?php print $globalhelp ?>
            </div>
        </div>
        <div class="buttonhelp open"><?php echo s('HELP') ?></div>
        <div class="buttonhelp close"><?php echo s('HELP') ?></div>
    <?php } ?>
    </div>
	<div class="clear"></div>
    <div id="content" class="col-md-9">
    <div id="wrapp">
    <div id="progressbar"></div>
<!-- content start here -->
