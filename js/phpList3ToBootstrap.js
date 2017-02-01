var myfunction = function() {
    /* fix elements using .hidden class */
    $("#resumequeue").hide(); 
    $("#resumequeue").removeClass('hidden');

    /* fix elements with bad inline styles */
    $('body.list .rows .listingelement div').css({'width':'auto','float':'none'});
    $('body.list .rows .listingelement span.view').css({ 'width':'auto','float':'none','margin-left':'10px'});
    
    /*fix Bounce Details (?page=bounce&id=xx) */
    $('body.bounce .content div.content').css({'min-height':'60px'}).addClass('well').removeClass('content'); 
    $('body.bounce .content div').not('.fleft,.fleft div').addClass('col-sm-12');
	$('body.bounce .content div.fleft div.well').css({'margin-left':'-15px','margin-right':'-15px'});
	$('body.bounce .content div.fleft:first-child').addClass('col-sm-1').removeClass('fleft'); 
	$('body.bounce .content div.fleft:nth-child(2)').addClass('col-sm-4 col-sm-offset-1').removeClass('fleft'); 
	$('body.bounce .content div.fleft:nth-child(3)').addClass('col-sm-5 col-sm-offset-1').removeClass('fleft'); 



/* STRUCTURE */
    $('.content, body.configure fieldset, body.adminattributes table.attributeSet,body.adminattributes table.attributeNew,table.spageeditListing,body.reconcileusers #content form,body.export #content form').not('.accordion .content, .content table .content,body.dbcheck table, body.adminattributes .content').addClass('well');
    $('.fleft').addClass('pull-left');
 

/* languageswitcher */
    $('#languageswitcher select').addClass('selectpicker').attr({ 'data-style':'btn-primary' });

/* BUTTONS */
    $('button, #prev.prevtab, #next.nexttab').addClass('btn');
    $('.submit, input[type=submit]').not('p.submit,body.import2 div.submit').addClass('btn btn-primary');
    $('button[type=submit]').addClass('btn-primary');
    $('.button').addClass('btn btn-default');
    $('table .button').addClass('btn-xs');
    $('.action-button').addClass('btn btn-lg btn-primary');
    $('.reset').addClass('btn btn-link');
    $('span.button a.opendialog span.view').parent().parent().parent().find('span.button').removeClass('btn-default');
    $('.actions .fright').addClass('pull-right');
    $('ul.reconcile').addClass('list-unstyled');
    $('.btn-primary.btn-default').removeClass('btn-default');
    $('a.confirm').not('.dropButton a.confirm').addClass('btn btn-default');
    $('a.resourceslink').addClass('btn btn-link');

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
    $('.dropButton a img').parent().html('');
    $('.dropButton .submenu').wrap('<ul />');
    $('.dropButton .submenu a').each(function(){$(this).wrapAll('<li />');});
    $('.dropButton .submenu li').unwrap();
if(!$('#dropdown-tabs').hasClass('btn-group')){
    $('#dropdown-tabs').addClass('btn-group');
    $('#dropdown-tabs ul').addClass('dropdown-menu');
    $('#dropdown-tabs ul').before('<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></button>');
    $('.dropButton button').html('Delete <span class="caret"></span>');
    $("#dropdown-tabs .dropdown-menu li").each(function(){
      $("#dropdown-tabs .btn:first-child").html($(this).parent().find('.current').text()+' &nbsp; <span class="caret"></span>');
      $("#dropdown-tabs .btn:first-child").val($(this).parent().find('.current').text());
   });
}
    $('.filterdiv,.usersFind').addClass('navbar navbar-default navbar-form');
    $('.filterdiv,.usersFind,.minitabs,#webblertabs').after('<div class="clearfix" />');
    $('.filter label[for=sortby]').before('<div class="clearfix"></div>');
    
/* FORMS */
    $('input[type=text],input[type=password],textarea,select,input[type=email],input[type=phone],input[type=file]').addClass('form-control');
    $('#login-form td').addClass('input-group input-group-lg');
    $('div.login').addClass('input-group input-group-sm');
    $('div.login p').contents().unwrap().wrap('<span id=helpBlock class=help-block/>');
    $('input[name=forgotpassword]').attr('aria-describedby','helpblock');
    $('#login-form input[type=submit]').addClass('btn-lg');
    $('#forgotpassword-form input[type=submit]').addClass('btn-sm');
    $('div[id*=list] ul').addClass('list-unstyled');
    $('input[type=checkbox]').not('label input[type-checkbox], div.checkbox input[type=checkbox]').wrap('<div class="checkbox checkbox-inline" />');
    $('input[type=checkbox]').each(function(){
        var checkid= $(this).attr('name') + $(this).attr('value');
        $(this).attr('id',checkid);
        if(!$(this).next('label').length) $(this).after('<label for="'+checkid+'"> </label>');
    });    
    $('input[type=radio]').not('label input[type-radio], div.radio input[type=radio]').wrap('<div class="radio radio-inline" />');
    $('input[type=radio]').each(function(){
        var radioid= $(this).attr('name') + $(this).attr('value');
        $(this).attr('id',radioid);
        if(!$(this).next('label').length) $(this).after('<label for="'+radioid+'"> </label>');
    });
    $('body.configure div.shade1, body.configure div.shade2').addClass('form-group');
    $('div, label').removeClass('label');
    $('#sendTest br').remove();
    $('body.editattributes form').addClass('form-inline');
    $('.accordion label,#sendmessageform .well label').not('.checkbox label,.radio label').before('<div class="clearfix"></div>');
    $('label[for=htmlchoice], label[for=emaildoubleentry]').after('<div class="clearfix"></div>');


/* PROGRESSBAR */
    $('#progressbar').wrap('<div class="progress"/>').addClass('progress-bar progress-bar-striped active').attr({"role":"progressbar","aria-valuemin":"0"});
    $('.progress').hide();

/* process output */
    $('#processqueueprogress').addClass('text-info well');
    $('#processqueuesummary').addClass('well');
    $('#progresscount').addClass('text-warning');
    $('#processqueuecontrols a').addClass('btn-xs');

/* COLLAPSIBLE */
    if ( !$('.accordion').hasClass('panel-group') ){
        $('.accordion').addClass('panel-group').attr({ 'aria-multiselectable':'true', 'id':'accordion','role':'tablist' });
        $('.accordion h3').addClass('panel-title').each(function(){ $(this).next('div').andSelf().wrapAll('<div class="panel panel-default"/>'); });
        $('.accordion h3 a').addClass('collapsed').attr({ "role":"button", "data-toggle":"collapse", "data-parent":"#accordion", "aria-expanded":"false", "aria-controls":function(i) { return 'collapse'+(i+1); }, "href":function(i) { return '#collapse'+(i+1);} });
        $('.accordion .panel-default:first h3 a').attr('aria-expanded','true');
        $('.accordion .panel-default div').not('.accordion .panel-default div div').addClass('panel-collapse collapse');
        $('.accordion .panel-default:first .panel-collapse').addClass(' in ');
        $('.accordion .panel-default .panel-collapse').wrapInner('<div class="panel-body"/>').attr({ 'role':'tabpanel', 'id':function(i) { return 'collapse'+(i+1); },'aria-labelledby':function(i) { return 'heading'+(i+1); } });
        $('.accordion h3').wrap('<div class="panel-heading"/>');
        $('.accordion .panel-heading').attr({ 'id':function(i) { return 'heading'+(i+1);}, 'role':'tab' });
    }
/* TABS*/
    if ( !$('.tabbed ul:first').hasClass('nav-tabs') ){
        $('.tabbed ul:first').addClass('nav nav-tabs');
        $('.tabbed ul.nav-tabs').attr('role','tablist');
        $('.tabbed ul.nav-tabs li').attr('role','presentation');
        $('.tabbed ul.nav-tabs li a').attr({ 'role':'tab', 'data-toggle':'tab' });
        $('.tabbed div[id]').not('.tabbed ul div').wrapAll('<div class="tab-content"/>');
        $('.tabbed .tab-content div[id]').addClass('tab-pane fade');
        $('.tabbed .tab-pane').attr('role','tabpanel');
        $('.tabbed ul.nav-tabs li a:first').tab('show');
    }

/* #sendtabs */
    $('.sendtabs_container').addClass('text-center');
    $('#sendtabs ul').addClass('list-unstyled');
    $('#sendtabs ul li').css({'height':'100px'});
    $('#sendtabs ul li a').not('li.current a').addClass('btn btn-default');
    $('#sendtabs ul li.current a').addClass('btn btn-danger');

/* ALERTS */
    $('div.note').addClass('alert alert-warning');
    $('div.result').addClass('alert alert-danger');

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
    $('.home .setup span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-wrench"/>').removeClass('listingname');
    $('.home .upgrade span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-circle-arrow-up"/>').removeClass('listingname');
    $('.home .dbcheck span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tasks"/>').removeClass('listingname');
    $('.home .view-log span.listingname a.listingname').prepend('<span aria-hidden="true" class="glyphicon glyphicon-list-alt"/>').removeClass('listingname');
    $('.dashboard .panel').addClass('col-md-4');
    /*buttons*/
    $('.home span.listingname a').addClass('btn btn-xs btn-info');
	$('span.listingelement a, div.configEdit a').not('body.members a.listingelement, .home span.listingelement a,a[name]').addClass('btn btn-xs btn-primary');
    $('span.edit a, .edit-list a, .configEdit a').html('<span aria-hidden="true" class="glyphicon glyphicon-edit"/>');
    $('.send-list a').html('<span aria-hidden="true" class="glyphicon glyphicon-send"/>');
    $('.add_member a').html('<span aria-hidden="true" class="glyphicon glyphicon-plus"/>'); 
    $('span.viewusers a').html('<span aria-hidden="true" class="glyphicon glyphicon-user"/>');
    $('span.delete a, a.del, a[title=Del]').html('<span aria-hidden="true" class="glyphicon glyphicon-trash"/>');
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
    $('.import #wrapp ul li a, .system #wrapp ul li a,.usermgt #wrapp ul li a, ul.navigation_list li a').addClass('glyphicon glyphicon-menu-right');
    $('#wrapp .nav.nav-pills li ul').addClass('small');
    /*yes/no icons */
    $('span.yes').addClass('glyphicon glyphicon-ok text-success').empty();
    $('span.no').addClass('glyphicon glyphicon-ban-circle text-danger').empty();

   /* modals */
    $('.opendialog').each(function(k,val){
        var value = $(this).attr('href');
        $(this).attr({ 'data-target':'#mymodal'+k, 'data-toggle':'modal', 'href':value + '&embed=yes&omitall=yes'});
        $('#footer').append('<div class="modal fade" id="mymodal'+k+'" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><button type="button" class="close externo" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button><div class="modal-content well col-lg-12"></div></div></div>');
    });

/* tables*/
    $('.content').not('.listingelement .content').addClass('table-responsive');
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

    
/* news widget */
    $('#newsfeed ul').addClass('well list-unstyled');

/* tooltip */
    $(function () {
  	$('[data-toggle="tooltip"]').tooltip();
    });
    $('a.btn-warning').attr({'data-toggle':'tooltip'});

/* show page after loading */
    $('body').removeClass('invisible');
}

$( window ).load(function(){
    if ( $('body').hasClass('invisible') ){ myfunction();}
 });
 
$('#dialog').not('body.templates #dialog').on('shown.bs.modal', myfunction);

$( document ).ajaxComplete(function() {
	if ( !$('table').hasClass('table') ){
		myfunction();
	}
});


/**************************** INCLUDE JS AND CSS FILES RELATED ***********************/

/******** RESPONSIVE TABS *******/
//$('.tabbed').tabCollapse();

/******** SELECT TO DROPDOWN *******/
$('.selectpicker').selectpicker();

/**************************** ///////////////////////////// ****************************/



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
    if ( $('body').hasClass('invisible') ){ myfunction(); }
    $('.progress').show();
    if (ac == 'destroy'){ $('.progress').hide(); }
}

$.fn.updateProgress = function() {
    if ( $('body').hasClass('invisible') ){ myfunction(); }
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
};
