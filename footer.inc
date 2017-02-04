<?php

	// use the minified version
	include dirname(__FILE__).'/footer_minified.inc';
	return;
?>


	            <div class="clear"></div>
	            <div id="newsfeed" class="menutableright block">
	       			<h3><span class="glyphicon glyphicon-bullhorn text-danger"></span> <?php print s('phpList community news');?></h3>
					<?php include 'communityfeed.php'; ?>
				</div>
		    </div>

    	    <div id="footer">
    	        <div class="version pull-left">
    	            <a target="_blank" href="https://phplist.com">&copy; phpList ltd.</a> - v<?php echo VERSION?>               
    	        </div>
    	        <div class="ressources pull-right">
                    <a target="_blank" href="./?page=community">Help</a>&nbsp; | 
    	            <a target="_blank" href="https://resources.phplist.com">Resources</a>&nbsp; |  
    	            <a target="_blank" href="http://twitter.com/phplist">Twitter</a>
    	        </div>
    	    </div>
    	</div> <!-- end #content -->
	</div> <!-- end #container -->
</div> <!-- end .container-fluid-->

<script type="text/javascript" src="ui/phplist-ui-bootlist/js/jquery-1.12.1.min.js"></script>
<script type="text/javascript" src="js/phplistapp.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootlist/js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootlist/js/phpList3ToBootstrap.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootlist/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootlist/js/jcarousellite_1.0.1.min.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootlist/js/phplist.js"></script>

<script>
/* do not remove this from here */
$(document).ready(function(){
    if ( $('body').hasClass('invisible') ){
        myfunction();
    }
});
</script>
