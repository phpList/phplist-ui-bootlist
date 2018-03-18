<?php if (empty($_GET['page']) || $_GET['page'] == 'dashboard' || $_GET['page'] == 'home') { ?>
	            <div class="clear"></div>
	            <div id="newsfeed" class="menutableright block">
					       <h3><span class="glyphicon glyphicon-bullhorn text-danger"></span> <?php print s('phpList community news'); ?></h3>
								<?php  include 'communityfeed.php'; ?>
		    </div>
<?php } ?>
	    </div> <!-- end #content -->
	        <div id="footer">
	            <div class="version pull-left">
	                <a target="_blank" href="https://phplist.com">&copy; phpList ltd.</a> - v<?php echo VERSION?>               
	            </div>
	            <div class="ressources pull-right">
                    <a target="_blank" href="./?page=community">Help</a>&nbsp;  | 
	                <a target="_blank" href="https://resources.phplist.com">Resources</a>&nbsp;  |  
	                <a target="_blank" href="http://twitter.com/phplist">Twitter</a>
	            </div>
	        </div>
	</div> <!-- end #container .row-->

</div> <!-- end .container-fluid-->
<script type="text/javascript" src="ui/phplist-ui-bootlist/js/jquery-1.12.1.min.js"></script>
<script type="text/javascript" src="js/phplistapp.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootlist/js/dist/phpList_ui_bootlist.min.js"></script>
<script>
/* do not remove this from here */
$(document).ready(function(){
    if ( $('body').hasClass('invisible') ){
        myfunction();
    }
	$('#edit_list_categories input.form-control').tagsinput('refresh');

});
</script>
