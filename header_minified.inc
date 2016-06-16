</head>
<body class="<?php if(isset($GLOBALS['page'])) print $GLOBALS['page'];else print "home-not-auth"; ?>">
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
        <div class="collapse" id="helptarget">
            <div class="alert alert-info">
                <?php print $globalhelp ?>
            </div>
        </div>
        <button class="btn btn-xs btn-danger pull-right glyphicon glyphicon-info-sign" type="button" data-toggle="collapse" data-target="#helptarget" aria-expanded="false" aria-controls="collapseExample" title="<?php echo s('HELP') ?>"></button>
    <?php } ?>
    </div>
	<div class="clearfix"></div>
    <div id="content" class="col-md-9">
    <div id="wrapp">
    <div id="progressbar"></div>
<!-- content start here -->
