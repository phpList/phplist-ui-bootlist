var applyJqueryUiTabMigration = function() {
        $('.tabbed').each(function(){
            if ( !$(this).find('ul:first').hasClass('nav-tabs')) {
                $(this).find('ul:first').addClass('nav nav-tabs');
                $(this).find('ul.nav-tabs').attr('role','tablist');
                $(this).find('ul.nav-tabs li').attr('role','presentation');
                $(this).find('ul.nav-tabs li a').attr({ 'role':'tab', 'data-toggle':'tab' });
                $(this).find('div[id]').not('.tabbed ul div').wrapAll('<div class="tab-content"/>');
                $(this).find('.tab-content div[id]').addClass('tab-pane');
                $(this).find('.tab-pane').attr('role','tabpanel');
                $(this).find('ul.nav-tabs li a:first').tab('show');
            }
        });

        // Hash links and keep state to have valid identifiers
        var linkMap = [];
        $('.tabbed > ul > li > a').each(function () {
            currentLink = this.getAttribute("href");

            if (currentLink.substr(0, 2) === "./") {
                hash = btoa(currentLink).replace(/=/g, "").replace(/\//, "");
                linkMap[hash] = this.href;
                this.href = "#" + hash;
                this.setAttribute("jqueryui-ajaxify-migrate", "true");
            }
        });
        if ( $('.tabbed ul.nav-tabs li').length == 0 ){
            $('.tabbed .tab-content .tab-pane').css({'display':'block'});
        }
        $('[jqueryui-ajaxify-migrate="true"]').click(function(e) {
            var tabDom = $('[jqueryui-ajaxify-migrate="true"]').closest(".tabbed").find(".tab-content");
            hash = this.getAttribute("href").replace("#", "");
            urlToLoad = linkMap[hash];
            existingDomElement = $("#"+hash);
            if(existingDomElement.html() == undefined) {
                $(tabDom).append(
                    $('<div/>')
                        .attr("id", hash)
                        .attr("role", "tabpanel")
                        .append("<span/>")
                        .html("Loading...")
                );
            } else {
                existingDomElement.html("Loading...");
            }
            $("#" + hash).addClass("tab-pane content well jquery-ui-tab-migration");
            $('.tabbed').tab();
            var $link = $('li.active a[data-toggle="tab"]');
            $link.parent().removeClass('active');
            $("a[href='#"+hash+"']").tab('show');
            $.get(urlToLoad).done(function(data) {
                $("#"+hash).html(data);
                applyCustomFormatting();
            });
        });
    }
;




var applyCustomFormatting = function() {

	/* script to center radio and checkbox column th in spage */
	if ($('body').hasClass('spage')){
		$('td.text-center').each(function(){
		var td = $(this);
		var th = td.closest('table').find('th').eq(td.index());
		$(th).addClass('text-center');
		});
	}

    /* fix elements using .hidden class */
    $("#resumequeue").hide(); 
    $("#resumequeue").removeClass('hidden');

    /* fix elements with bad inline styles */
    $('body.list .rows .listingelement div').css({'width':'auto','float':'none'});
    $('body.list .rows .listingelement span.view').css({ 'width':'auto','float':'none','margin-left':'10px'});
    
    /*fix Bounce Details (?page=bounce&id=xx) */
    $('body.bounce .content div.content').css({'min-height':'45px','padding':'10px 20px 10px 10px'}).addClass('well').removeClass('content'); 
		$('body.bounce .content div.fleft:first-child').css({'margin-left':'-15px','margin-right':'15px'}).addClass('col-sm-1').removeClass('fleft'); 
		$('body.bounce .content div.fleft:nth-child(2)').css({'margin-left':'-15px','margin-right':'	15px'}).addClass('col-sm-5').removeClass('fleft'); 
		$('body.bounce .content div.fleft:nth-child(3)').css({'margin-left':'-15px'}).addClass('col-sm-6').removeClass('fleft'); 
		$('body.bounce .content div.clear').addClass('clearfix');

/* subscribe page */
$('body.fixed .required').addClass('text-danger');
$('body.fixed ul.list').addClass('list-unstyled');
$('body.fixed p.information').addClass('text-info text-underline').wrapInner('<big />');
$('body.fixed table:first-of-type').addClass('jumbotron'); 
$('body.fixed div.attributename').wrapInner('<big />');
$('body.fixed li.list').each(function(){
	$(this).addClass('form-group');
	var iname = $(this).find('input').attr('name'); 
	$(this).find('input').attr('id',iname);
	$(this).find('input').nextUntil('listdescription').wrapAll('<div class="btn-group" />');
	$(this).find('b').before('<label for="'+iname+'" class="btn btn-default"><span class="[ glyphicon glyphicon-ok ]"></span><span>&nbsp;</span></label>').wrap('<label for="'+iname+'"  class="btn btn-default active" />');
	});
/* STRUCTURE */
    $('.content, body.configure fieldset, body.adminattributes table.attributeSet,body.adminattributes table.attributeNew,table.spageeditListing,body.reconcileusers #content form,body.export #content form').not('.usermgt .content, .accordion .content, .content table .content,body.dbcheck table, body.adminattributes .content').addClass('well');
    $('.fleft').addClass('pull-left');

/* languageswitcher */
    $('#languageswitcher select').addClass('selectpicker').attr({ 'data-style':'btn-primary' });

/* BUTTONS */
    $('button, #prev.prevtab, #next.nexttab').addClass('btn');
    $('.submit, input[type=submit], #generatetextversion a.ajaxable').not('p.submit,body.import2 div.submit').addClass('btn btn-primary');
    $('button[type=submit]').addClass('btn-primary');
    $('.button').not('#wrapp > p.button.pull-right, form.spageEdit >.button.pull-right').addClass('btn btn-default');
    $('table .button').addClass('btn-xs');
    $('.action-button, form[name="categoryedit"] .pull-right > .button, form.spageEdit > .button.pull-right > a, .actions .pull-right .button, .statsoverview .pull-right > .button, .actions.pull-right > .button, .actions .pull-right > .confirm,  #wrapp .pull-right > .confirm, #wrapp > .button.pull-right > a, #wrapp >#contentdiv > .pull-right > a.button,#wrapp > .pull-right > a.button').addClass('btn btn-lg btn-primary');
    $('.reset').addClass('btn btn-link');
    $('span.button a.opendialog span.view').parent().parent().parent().find('span.button').removeClass('btn-default');
    $('.actions .fright').addClass('pull-right');
    $('ul.reconcile').addClass('list-unstyled');
    $('.btn-primary.btn-default').removeClass('btn-default');
    $('a.confirm').not('.dropButton a.confirm').addClass('btn btn-default');
    $('#initialisecontinue').addClass('btn-lg');

/* PAGINATION */
	$('.paging .range').not('.small.pull-left').addClass('small pull-left');
	$('.paging .controls').not('.controls.pull-right').wrapInner('<div class="btn-group btn-group-xs" />');
	$('.paging .controls a').not('.controls.pull-right a').addClass('btn btn-primary');
	$('.paging .controls a.first').not('.controls.pull-right a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-step-backward" />');
	$('.paging .controls a.last').not('.controls.pull-right a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-step-forward" />');
	$('.paging .controls a.previous').not('.controls.pull-right a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-chevron-left" />');
	$('.paging .controls a.next').not('.controls.pull-right a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-chevron-right" />');
	$('.paging .controls').not('.controls.pull-right').addClass('pull-right');

/* MINITABS, WEBBLERTABS, dropButton and FILTERDIVS */
    $('.minitabs #webblertabs').addClass('navbar navbar-left navbar-default');
    $('.minitabs #webblertabs ul').addClass('nav navbar-nav');
    $('.minitabs #webblertabs ul li.current').addClass('active');
    $('.minitabs #webblertabs').attr('id','');
    $('#webblertabs, .dropButton').attr('id','dropdown-tabs');
    $('.dropButton a img').parent().addClass('hidden');
    $('.dropButton .submenu').wrap('<ul />');
    $('.dropButton .submenu a').each(function(){$(this).wrapAll('<li />');});
    $('.dropButton .submenu li').unwrap();
	if(!$('#dropdown-tabs').hasClass('btn-group')){
    	$('#dropdown-tabs').addClass('btn-group');
    	$('#dropdown-tabs ul').addClass('dropdown-menu');
    	$('#dropdown-tabs ul').before('<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></button>');
    $('.dropButton button').html($('.dropButton a img').parent().text()+' &nbsp; <span class="caret"></span>');
    	$("#dropdown-tabs .dropdown-menu li").each(function(){
    	  $("#dropdown-tabs .btn:first-child").html($(this).parent().find('.current').text()+' &nbsp; <span class="caret"></span>');
    	  $("#dropdown-tabs .btn:first-child").val($(this).parent().find('.current').text());
   		});
	}
	$('.pull-right').find('.dropdown-menu').addClass('dropdown-menu-right');
    $('.filterdiv,.usersFind').addClass('navbar navbar-default navbar-form');
    if (!$('body').hasClass('modal-open')){
	    $('.filterdiv,.usersFind,.minitabs,#webblertabs').after('<div class="clearfix break" />');
    	$('.filter label[for=sortby]').before('<div class="clearfix break"></div>');
    }
    $('body.eventlog #wrapp > .paging').addClass('pull-right');
    $('body.eventlog #wrapp > .paging >.range').css({'padding-right':'15px'});
    
    
/* FORMS */
    $('input[type=text],input[type=password],textarea,select,input[type=email],input[type=phone],input[type=file]').addClass('form-control');
    $('#login-form td').addClass('input-group input-group-lg');
    $('div.login').addClass('input-group input-group-sm');
    $('div.login p').contents().unwrap().wrap('<span id="helpBlock" class="help-block" />');
    $('input[name=forgotpassword]').attr('aria-describedby','helpblock');
    $('#login-form input[type=submit]').addClass('btn-lg');
    $('#forgotpassword-form input[type=submit]').addClass('btn-sm');
    $('div[id*=list] ul').addClass('list-unstyled');
   	$('#edit_list_categories .form-control').attr('data-role','tagsinput');



/* remove checkbox style because is not submiting on import2 form 

    $('input[type=checkbox]').not('label input[type-checkbox], div.checkbox input[type=checkbox]').wrap('<div class="checkbox checkbox-inline" />');
    $('input[type=checkbox]').each(function(){
        var checkid= $(this).attr('name') + $(this).attr('value');
        $(this).attr('id',checkid);
        if(!$(this).next('label').length) $(this).after('<label for="'+checkid+'"> </label>');
    });
 */
    $('input[type=radio]').not('label input[type-radio], div.radio input[type=radio]').wrap('<div class="radio radio-inline" />');
    $('input[type=radio]').each(function(){
        var radioid= $(this).attr('name') + $(this).attr('value');
        $(this).attr('id',radioid);
        if(!$(this).next('label').length) $(this).after('<label for="'+radioid+'"> </label>');
    });
    $('body.configure div.shade1, body.configure div.shade2').addClass('form-group');
    $('div, label').removeClass('label');
    if (!$('body').hasClass('modal-open')){
	    $('.accordion label,#sendmessageform .well label').not('.checkbox label,.radio label').before('<div class="clearfix break"></div>');
    	$('label[for=htmlchoice], label[for=emaildoubleentry]').after('<div class="clearfix break"></div>');
	}
/* PROGRESSBAR */
	if ( !$('#progressbar').hasClass('progress-bar') ){
    	$('#progressbar').wrap('<div class="progress"/>').addClass('progress-bar progress-bar-striped active').attr({"role":"progressbar","aria-valuemin":"0"});
    	$('.progress').hide();
	}
/* process output */
    $('#processqueueprogress').addClass('text-info well');
    $('#processqueuesummary').addClass('well');
    $('#progresscount').addClass('text-warning');
    $('#processqueuecontrols a').addClass('btn-xs');

/* COLLAPSIBLE */
    if ( !$('.accordion').hasClass('panel-group') ){
        $('.accordion').addClass('panel-group').attr({ 'aria-multiselectable':'true', 'id':'accordion','role':'tablist' });
        $('.accordion h3').addClass('panel-title').each(function(){ $(this).next('div').addBack().wrapAll('<div class="panel panel-default"/>'); });
        $('.accordion h3').wrap('<div class="panel-heading clickeable"/>');
        $('.accordion .panel-heading').attr({ 'id':function(i) { return 'heading'+(i+1);}, 'role':'tab' });
        $('.accordion .panel-heading').addClass('collapsed').attr({ "data-toggle":"collapse", "data-parent":"#accordion", "aria-expanded":"false", "aria-controls":function(i) { return 'collapse'+(i+1); }, "data-target":function(i) { return '#collapse'+(i+1);} });
        $('.accordion .panel-default:first h3 .panel-heading').attr('aria-expanded','true');
        $('.accordion .panel-default div').not('.accordion .panel-default div div, .accordion .panel-heading').addClass('panel-collapse collapse');
        $('.accordion .panel-default:first .panel-collapse').addClass(' in ');
        $('.allexpanded .panel-default .panel-collapse').addClass(' in');
        $('.allexpanded .panel-default h3 .panel-heading').attr('aria-expanded:true');
        $('.accordion .panel-default .panel-collapse').wrapInner('<div class="panel-body"/>').attr({ 'role':'tabpanel', 'id':function(i) { 
        	return 'collapse'+(i+1); },'aria-labelledby':function(i) { return 'heading'+(i+1); } });
	    }
/* TABS*/
    $('.tabbed').each(function(){
    	if ( !$(this).find('ul:first').hasClass('nav-tabs') ){
        	$(this).find('ul:first').addClass('nav nav-tabs');
        	$(this).find('ul.nav-tabs').attr('role','tablist');
	        $(this).find('ul.nav-tabs li').attr('role','presentation');
	        $(this).find('ul.nav-tabs li a').attr({ 'role':'tab', 'data-toggle':'tab' });
	        $(this).find('div[id]').not('.tabbed ul div').wrapAll('<div class="tab-content"/>');
	        $(this).find('.tab-content div[id]').addClass('tab-pane');
	        $(this).find('.tab-pane').attr('role','tabpanel');
	        $(this).find('ul.nav-tabs li a:first').tab('show');
	    }
    });
	if ( $('.tabbed ul.nav-tabs li').length == 0 ){
	        $('.tabbed .tab-content .tab-pane').css({'display':'block'});
	    }

/* #sendtabs */
    $('.sendtabs_container').addClass('text-center');
    $('#sendtabs ul').addClass('list-unstyled');
    $('#sendtabs ul li').css({'height':'100px'});
    $('#sendtabs ul li a').not('li.current a').addClass('btn btn-default');
    $('#sendtabs ul li.current a').addClass('btn btn-danger');

/* ALERTS */
    $('div.note').addClass('alert alert-warning');
		if ($('div.actionresult').text().indexOf('success') > -1){
			$('div.actionresult').addClass('alert alert-success');
		} else if ($('div.actionresult').text().indexOf('error') > -1){
	    $('div.actionresult').addClass('alert alert-danger');
		} else {
		   $('div.actionresult').addClass('alert alert-info');
		}
    $('div.result, div.error').not('body.fixed div.error').addClass('alert alert-danger');
	if ( !$('body.send #sendmessageform #addtoqueue .missing').hasClass('h4') ){
		$('body.send #sendmessageform #addtoqueue .missing').prepend('<span class="glyphicon glyphicon-warning-sign"></span>&nbsp; ');
	}
    $('body.send #sendmessageform #addtoqueue .missing').addClass('h4');
    $('body.initialise p.information').addClass('alert bg-success');
    $('body.initialise div.information').addClass('alert bg-warning');
    $('body.initialise #continuesetup, body.initialise .initialiseOptions').addClass('alert bg-info');
    $('body.initialise .initialiseOptions ul').addClass('list-unstyled');

/* typography */
    $('.pagetitle').addClass('page-header');
    $('.inactivelist').addClass('small text-danger');
    $('.activelist').addClass('small text-primary');
    $('.dbcheck .listingelement h2').wrapInner('<small />');
    $('.configcontent').wrapInner('<code />');
    $('.missing').addClass('text-danger');
    $('body.bouncerules p.information').addClass('well text-right');
    $('.memberCount').addClass('text-success');
    $('.blacklistedCount').addClass('text-danger');
    $('.unconfirmedCount').addClass('text-warning');

/* icons */
    /* dashboard */
    $('.home .send-campaign span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-send"/>').removeClass('listingname');
    $('.home .manage-campaigns span.listingname a.listingname, .home .configure span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-cog"/>').removeClass('listingname');
    $('.home .manage-users span.listingname a.listingname, .home .list-users span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-user"/>').removeClass('listingname');
    $('.home .view-statistics span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-stats"/>').removeClass('listingname');
    $('.home .manage-lists span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-th-list"/>').removeClass('listingname');
    $('.home .import-users span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-import"/>').removeClass('listingname');
    $('.home .export-users span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-export"/>').removeClass('listingname');
    $('.home .reconcileusers span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-heart"/>').removeClass('listingname');
    $('.home .configure-attributes span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tags"/>').removeClass('listingname');
    $('.home .custom-attribute span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tag"/>').removeClass('listingname');
    $('.home .spage span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-pencil"/>').removeClass('listingname');
    $('.home .admins span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-king"/>').removeClass('listingname');
    $('.home .adminattributes span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-equalizer"/>').removeClass('listingname');
    $('.home .send-message span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-envelope"/>').removeClass('listingname');
    $('.home .templates span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-modal-window"/>').removeClass('listingname');
    $('.home .list-all-msg span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-list"/>').removeClass('listingname');
    $('.home .processqueue span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-time"/>').removeClass('listingname');
    $('.home .processbounces span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-hourglass"/>').removeClass('listingname');
    $('.home .bounces span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-ban-circle"/>').removeClass('listingname');
    $('.home .plugin span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-pushpin"/>').removeClass('listingname');
    $('.home .setup span.listingname a.listingname,.home .config-link span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-wrench"/>').removeClass('listingname');
    $('.home .upgrade span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-circle-arrow-up"/>').removeClass('listingname');
    $('.home .dbcheck span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tasks"/>').removeClass('listingname');
    $('.home .view-log span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-list-alt"/>').removeClass('listingname');
    /*buttons*/
    $('.home span.listingname a').addClass('btn btn-xs btn-info');
	$('.listingelement a.del, .listingelement a.button, .listingelement a.opendialog, .listingelement a.confirm, .listingelement a.ajaxable, body.mclicks .listingelement  a, body.mviews .listingelement a, body.uclicks .listingelement a, .configEdit a.ajaxable').addClass('btn btn-xs btn-primary');
    $('span.edit a, .edit-list a, .configEdit a.ajaxable').html('<span aria-hidden="true" class="glyphicon glyphicon-edit"/>');
    $('span.copy a, .copy-list a, .configCopy a').html('<span aria-hidden="true" class="glyphicon glyphicon-duplicate"/>');
    $('.send-list a').html('<span aria-hidden="true" class="glyphicon glyphicon-send"/>');
    $('.add_member a').html('<span aria-hidden="true" class="glyphicon glyphicon-plus"/>'); 
    $('span.viewusers a').html('<span aria-hidden="true" class="glyphicon glyphicon-user"/>');
    $('span.delete a, a.del, a[title=Del]').html('<span aria-hidden="true" class="glyphicon glyphicon-trash"/>');
    $('span.resettemplate a, a.reset, a[title=reset]').html('<span aria-hidden="true" class="glyphicon glyphicon-repeat"/>');
    $('span.view a, a.opendialog span.view').html('<span aria-hidden="true" class="glyphicon glyphicon-eye-open"/>');
    $('span.marksent a').html('<span aria-hidden="true" class="glyphicon glyphicon-ok"/>');
    $('span.resend a').html('<span aria-hidden="true" class="glyphicon glyphicon-repeat"/>');
    $('span.stats a').html('<span aria-hidden="true" class="glyphicon glyphicon-stats"/>');
    $('span.suspend a').html('<span aria-hidden="true" class="glyphicon glyphicon-pause"/>');
    $('a.hide').html('x');$('a.hide').addClass('close');$('a.hide.close').removeClass('hide');
    $('a.helpdialog').html('<span class="glyphicon glyphicon-question-sign text-warning" />');
    $('#prev.prevtab').replaceWith('<span class="pull-left prevtab btn btn-xs btn-danger glyphicon glyphicon-chevron-left" id="#prev" />');
    $('#next.nexttab').replaceWith('<span class="pull-right nexttab btn btn-xs btn-danger glyphicon glyphicon-chevron-right" id="#next" />');
    $('.step-nav').first().addClass('pull-right').css('margin-top','-40px');
    $('.step-nav .back').html('<span class="glyphicon glyphicon-arrow-left" />');
    $('.step-nav .next').html('<span class="glyphicon glyphicon-arrow-right" />');
    $('.import #wrapp ul, .system #wrapp ul.dashboard_button, .usermgt #wrapp ul, ul.navigation_list').addClass('nav nav-pills nav-stacked');
   /* $('.import #wrapp ul li a, .system #wrapp ul li a,.usermgt #wrapp ul li a, ul.navigation_list li a').not('#newsfeed ul li a').addClass('glyphicon glyphicon-menu-right'); 
    $('#wrapp .nav.nav-pills li ul').addClass('small');*/
    $('.updatepluginbutton').addClass('btn-xs');
    $('body.initialise #continuesetup .btn').addClass('btn-primary');

    /*yes/no icons */
    $('span.yes').addClass('glyphicon glyphicon-ok text-success').empty();
    $('span.no').addClass('glyphicon glyphicon-ban-circle text-danger').empty();

/* tables*/

    $('body.userhistory #subscription .content, body.statsoverview .content, body.domainstats .content,body.dbcheck .content,body.bouncerules .content,body.plugins .content,body.eventlog .content').first().addClass('table-responsive');
    $('table').not('table.table').attr('border',null);
    $('.listingelement table,body.dbcheck table, table.spageeditListing').not('table.table').addClass('table-condensed');
    $('table.spageeditListing tr:first-child,table.attributeSet tr:first-child').addClass('info');
    $('table.listing, table.templateForm, table.importadmin, table.import1,table.importcsvMain,table.userAdd').not('.home table.listing,table.table').addClass('table-striped');
    $('table.messageView, body.about table.about').not('table.table').addClass('table-bordered');
    $('table.setupMain').not('table.table').addClass('table-hover');
    $('table.spageeditListing').not('table.table').wrap('table-responsive');
    $('table').not('table.table').each(function(){
		var bgcolor = $(this).attr('bgcolor');
		$(this).css({'background-color':bgcolor});
    });
    $('table').not('.home table, table.loginPassUpdate, table.table').addClass('table');
    $(".jquery-ui-tab-migration table").parent().addClass("table-responsive");
        
/* news widget */
    $('#newsfeed ul').addClass('well list-unstyled');

/* tooltip */
    $(function () {
	  	$('[data-toggle="tooltip"]').tooltip();
    });
    $('a.btn-xs').attr({'data-toggle':'tooltip'});

	/* show page after loading */
    $('body').removeClass('invisible'); 


} /* ---> END MYFUNCION */


/* fire applyCustomFormatting on: */
$( window ).on("load", function(){
    if ( $('body').hasClass('invisible') ){ applyCustomFormatting(); applyJqueryUiTabMigration();}
});

$('#dialog').not('body.templates #dialog').on('shown.bs.modal', applyCustomFormatting);

$( document ).ajaxComplete(function() {
    if ( !$('table').hasClass('table') && !$('.clearfix').hasClass('break') ){
        applyCustomFormatting();
        applyJqueryUiTabMigration();
    }
});


/**************************** INCLUDE JS AND CSS FILES RELATED ***********************/



/******** modals instead of dialog *******/

function openHelpDialog(url) {
    $("#dialog").html('<div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><button type="button" class="close externo" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button><div class="modal-content well col-lg-12"><div class="openhelpimage">'+busyImage+'</div></div></div></div>');
    var destpage = urlParameter('page',url);
    url = url.replace(/page=/,'origpage=');
    $("#dialog .modal-content").load(url+'&ajaxed=true&page=pageaction&action='+destpage);
    $("#dialog #mymodal").modal('show');
}

function initialiseTranslation(text) {
    $("#dialog").html('<div class="modal fade" id="mymodaltrans" tabindex="-1" role="dialog" aria-labelledby="mymodaltransLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><button type="button" class="close externo" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button><div class="modal-content well col-lg-12"><div class="openhelpimage">'+text+'<br />'+busyImage+'</div></div></div></div>');
    $("#dialog .modal-content").load('./?ajaxed=true&page=pageaction&action=initlanguage');
    $("#dialog #mymodaltrans").modal('show');
    $('#dialog #mymodaltrans').bind("DOMSubtreeModified",function(){ $('#dialog #mymodaltrans').modal('hide'); });
}



/********* progressbar ***********/

$.fn.progressbar = function(ac){
    if ( $('body').hasClass('invisible') ){ applyJqueryUiTabMigration(); applyCustomFormatting(); }
    $('.progress').show();
    if (ac == 'destroy'){ $('.progress').hide(); }
}

$.fn.updateProgress = function() {
    if ( $('body').hasClass('invisible') ){ applyJqueryUiTabMigration(); applyCustomFormatting(); }
    $('.progress').show();
  if ($.isNumeric(arguments[0])) {
    var total = parseInt(arguments[1]);
    var done = parseInt(arguments[0]);
  } else {
    var args = arguments[0].split(',') || {}; 
    var total = parseInt(args[1]);
    var done = parseInt(args[0]);
  }
  var perc;
  if (total == 0) {
    perc = 0;
  } else {
    perc = parseInt((done / total) * 100);
  }
  $("#progresscount").html(done + ' / '+ total);
  $("#progresscount").show();
  $("#progressbar" ).css('width', perc+'%').attr({'aria-valuenow': perc,'aria-valuemax':done});   
  if (perc >= 100){ $('.progress').hide(); }
};

$(window).focus(function(){
	if ( $('#progressbar').attr('aria-valuenow') == "100" ){
		$('.progress').hide();
	}
});
$('#stopqueue').click(function(){
		$('.progress').hide();
});



$(document).ready(function(){

	/* vertical scrolling */
	if ( $('body').hasClass('configure') ){
		var id = location.hash;
		console.log(id);
		setTimeout(function(){
			$('html, body').animate({
		        scrollTop: $(id).offset().top
		    }, 1000);
		},1000);
	}

    $('#dontsaveitem_list_categories').click(function(){
		if(window.location.href.indexOf("id=list_categories") > -1)
			location.reload();
	});

	/* Back to top */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});    
		$('#back-to-top').tooltip('show');

	
}); /* <-- end document.ready */
