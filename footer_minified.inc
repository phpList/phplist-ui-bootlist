<?php if (empty($_GET['page']) || $_GET['page'] == 'dashboard' || $_GET['page'] == 'home') { ?>
                <div class="clear"></div>
                <div id="newsfeed" class="menutableright block">
                           <h3><span class="glyphicon glyphicon-bullhorn text-danger"></span> <?php print s('phpList community news'); ?></h3>
                                <?php  include 'communityfeed.php'; ?>
            </div>
<?php } ?>
        </div> <!-- end #Wrapp -->
            <div id="footer">
                <div class="version pull-left">
                    <a target="_blank" href="https://phplist.com">&copy; phpList ltd.</a> - v<?php echo VERSION?>
                </div>
                <div class="ressources pull-right">
                    <a target="_blank" href="./?page=about"><?php echo s('About'); ?></a>&nbsp;  |
                        <a target="_blank" href="./?page=community"><?php echo ('Help'); ?></a>&nbsp;  |
                    <a target="_blank" href="https://resources.phplist.com"><?php echo s('Resources'); ?></a>&nbsp;  |
                    <a target="_blank" href="http://twitter.com/phplist">Twitter</a>
                </div>
            </div>
    </div> <!-- end #content-->

</div> <!-- end #container-->
<a id="back-to-top" href="#" class="btn btn-info btn-lg back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>

</div> <!-- end .container-fluid -->


<script type="text/javascript" src="ui/phplist-ui-bootlist/js/jquery-1.12.1.min.js?v=<?php echo VERSION ?>"></script>
<script type="text/javascript" src="js/phplistapp.js?v=<?php echo VERSION ?>"></script>
<script type="text/javascript" src="ui/phplist-ui-bootlist/js/dist/phpList_ui_bootlist.min.js?v=<?php echo VERSION ?>"></script>
<script>
/* do not remove this from here */
$(document).ready(function(){
    if ( $('body').hasClass('invisible') ){
        applyCustomFormatting(); applyJqueryUiTabMigration();
    }
    $('#edit_list_categories input.form-control').tagsinput('refresh');

});
</script>
