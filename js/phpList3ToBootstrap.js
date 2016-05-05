var myfunction = function() {
    /* fix elements using .hidden class */
    $("#resumequeue").hide(); 
    $("#resumequeue").removeClass('hidden'); 
    
/* STRUCTURE */
    $('.content').not('.accordion .content').addClass('well');

    
/* MAIN MENU */
    $('#menuTop').addClass('collapse navbar-collapse navbar-left');
    $('#menuTop ul li ul').parent().parent().addClass('nav navbar-nav');
    $('#menuTop ul li ul').parent().addClass('dropdown');
    $('#menuTop ul li ul').addClass('dropdown-menu');
    $('#menuTop ul li ul').parent().find('a:first').addClass('dropdown-toggle').attr({ 'data-toggle':'dropdown','aria-haspopup':'true','aria-expanded':'false' });

/* BUTTONS */
    $('button, #prev.prevtab, #next.nexttab').addClass('btn');
    $('.submit, input[type=submit]').not('p.submit').addClass('btn btn-primary');
    $('button[type=submit]').addClass('btn-primary');
    $('.button').addClass('btn btn-default');
    $('table .button').addClass('btn-xs');
    $('.action-button').addClass('btn btn-lg btn-primary');
    $('.reset').addClass('btn btn-link');
    $('span.button a.opendialog span.view').parent().parent().parent().find('span.button').removeClass('btn-default');
    $('.actions .fright').addClass('text-right');
    $('ul.reconcile').addClass('list-unstyled');

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
    $('#dropdown-tabs').addClass('btn-group');
    $('#dropdown-tabs ul').addClass('dropdown-menu');
    $('#dropdown-tabs ul').before('<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></button>');
    $('.dropButton button').html('Delete <span class="caret"></span>');
    $("#dropdown-tabs .dropdown-menu li").each(function(){
      $("#dropdown-tabs .btn:first-child").html($(this).parent().find('.current').text()+' &nbsp; <span class="caret"></span>');
      $("#dropdown-tabs .btn:first-child").val($(this).parent().find('.current').text());
   });
    $('.filterdiv').addClass('navbar navbar-default navbar-form navbar-right');
    $('.filterdiv, .minitabs,#webblertabs').after('<div class="clearfix" />');
    
/* FORMS */
    $('input[type=text],input[type=password],textarea').addClass('form-control');
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
    $('select').addClass('form-control');

/* PROGRESSBAR */
    $('#progressbar').wrap('<div class="progress"/>').addClass('progress-bar progress-bar-striped active').attr({"role":"progressbar","aria-valuemin":"0"});
    $('.progress').hide();

/* process output */
    $('#processqueueprogress').addClass('text-info well');
    $('#processqueuesummary').addClass('text-dagner well');
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

/* icons */
    /* dashboard */
    $('.send-campaign span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-send"/>');
    $('.manage-campaigns span.listingname a, .configure span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-cog"/>');
    $('.manage-users span.listingname a, .list-users span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-user"/>');
    $('.view-statistics span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-stats"/>');
    $('.manage-lists span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-th-list"/>');
    $('.import-users span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-import"/>');
    $('.export-users span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-export"/>');
    $('.reconcileusers span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-heart"/>');
    $('.configure-attributes span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tags"/>');
    $('.custom-attribute span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tag"/>');
    $('.spage span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-pencil"/>');
    $('.admins span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-king"/>');
    $('.adminattributes span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-equalizer"/>');
    $('.send-message span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-envelope"/>');
    $('.templates span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-modal-window"/>');
    $('.list-all-msg span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-list"/>');
    $('.processqueue span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-time"/>');
    $('.processbounces span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-hourglass"/>');
    $('.bounces span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-ban-circle"/>');
    $('.plugin span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-pushpin"/>');
    $('.setup span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-wrench"/>');
    $('.dbcheck span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-tasks"/>');
    $('.view-log span.listingname a').prepend('<span aria-hidden="true" class="glyphicon glyphicon-list-alt"/>');
    /*buttons*/
    $('span.listingname a').addClass('btn btn-xs btn-info');
    $('span.listingelement a, div.configEdit a').not('.home span.listingelement a,a[name]').addClass('btn btn-xs btn-warning');    
    $('span.edit a, .edit-list a, .configEdit a').html('<span aria-hidden="true" class="glyphicon glyphicon-edit"/>');
    $('.send-list a').html('<span aria-hidden="true" class="glyphicon glyphicon-send"/>');
    $('.add_member a').html('<span aria-hidden="true" class="glyphicon glyphicon-user"/>');
    $('span.delete a, a.del, a[title=Del]').html('<span aria-hidden="true" class="glyphicon glyphicon-trash"/>');
    $('span.view a, a.opendialog span.view').html('<span aria-hidden="true" class="glyphicon glyphicon-eye-open"/>');
    $('span.marksent a').html('<span aria-hidden="true" class="glyphicon glyphicon-ok"/>');
    $('span.resend a').html('<span aria-hidden="true" class="glyphicon glyphicon-repeat"/>');
    $('span.suspend a').html('<span aria-hidden="true" class="glyphicon glyphicon-pause"/>');
    $('a.hide').html('x');$('a.hide').addClass('close');$('a.hide.close').removeClass('hide');
    $('a.helpdialog').html('<span class="glyphicon glyphicon-question-sign text-warning" />');
    $('#prev.prevtab').replaceWith('<span class="pull-left prevtab btn btn-xs btn-danger glyphicon glyphicon-chevron-left" id="#prev" />');
    $('#next.nexttab').replaceWith('<span class="pull-right nexttab btn btn-xs btn-danger glyphicon glyphicon-chevron-right" id="#next" />');
    $('.step-nav').first().addClass('pull-right').css('margin-top','-40px');
    $('.step-nav .back').html('<span class="glyphicon glyphicon-hand-left" />');
    $('.step-nav .next').html('<span class="glyphicon glyphicon-hand-right" />');

/* modals */
    $('.opendialog').each(function(k,val){
        var value = $(this).attr('href');
        $(this).attr({ 'data-target':'#mymodal'+k, 'data-toggle':'modal', 'href':value + '&embed=yes&omitall=yes'});
        $('#footer').append('<div class="modal fade" id="mymodal'+k+'" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><button type="button" class="close externo" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button><div class="modal-content well col-lg-12"></div></div></div>');
    });

/* tables*/
//    $('.content').addClass('table-responsive');
    $('table').attr('border',null);
    $('table').not('.home table, table.loginPassUpdate').addClass('table');
    $('table.listing, table.templateForm, table.importadmin').not('.home table.listing').addClass('table-striped');
    $('table.messageView').addClass('table-bordered');
    $('table.setupMain').addClass('table-hover');

/* show page after loading */
    $('body').removeClass('invisible');
}

$( window ).load(function(){
    if ( $('body').hasClass('invisible') ){ myfunction();}
 });
 
$('#dialog').not('body.templates #dialog').on('shown.bs.modal', myfunction);



/******** RESPONSIVE TABS *******/
$.getScript("ui/phplist-ui-bootstrap/js/bootstrap-tabcollapse.js", function(){
    $('.tabbed').tabCollapse();
});



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