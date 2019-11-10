</head>
<body class="invisible <?php if(isset($GLOBALS['page'])) print $GLOBALS['page'];else print "home-not-auth"; ?>">
<?php include __DIR__.'/../'.$THEMEINFO['dir'].'/body_trackers.php'; ?>
<div id="dialog"></div><div id="hiddendiv"></div>

<div class="container-fluid">

	<div id="container">

			<nav id="navigation" class="navbar navbar-inverse  navbar-fixed-top col-lg-2 col-md-3">
    	        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse_" data-target="#menuTop" aria-expanded="false">
    	            <span class="sr-only">Toggle navigation</span>
    	            <span class="icon-bar"></span>
    	            <span class="icon-bar"></span>
    	            <span class="icon-bar"></span>
    	        </button>
    	        <a href="./" class="navbar-brand"><img src="ui/phplist-ui-bootlist/logo.svg" style="height: 45px; width: auto;" alt="phpList, email newsletter manager, logo" title="phpList, the world's most popular Open Source newsletter manager" /></a>
			</nav>
    		<div id="sidebar" class="sidebar col-lg-2 col-md-3">
    		    <?php echo $firstInstallButton?>
    		    <div id="context-menu" class="menu block">
    		        <?php print _topMenu(); ?>
    		    </div>
    		    <div id="recent" class="menu visited block">
    		        <?php print recentlyVisited(); ?>
    		    </div> 
    		    <div class="col-sm-12 sidebar-footer">
	    		    <div id="language">
    			        <?php print $languageswitcher; ?>
    			    </div>

    			    <div id="logged">
    			        <?php
    		          if (empty($_SESSION["adminloggedin"])) {
						  if (empty($_SESSION['firstinstall']) && empty($_GET['firstinstall'])) {
							  print ('<a id="login" class="navbar-btn btn-primary btn-sm" href="./?page=home">' . s('Login') . '</a> ');
						  }
    		          } else {
    		            print ('<a id="logout" class="navbar-btn btn-primary btn-sm" href="./?page=logout">'.s('Logout').'</a>');
    		          }
    		        ?>
    			    </div>
				</div>
    		</div>    <!-- end #sidebar -->

	    <div class="col-lg-10 col-md-9 col-lg-offset-2 col-md-offset-3" id="content" tabindex=-1>
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
		    <div id="wrapp">
			    <div id="progressbar"></div>
<!-- content starts here -->
