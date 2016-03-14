$(document).ready(function() {

/* MAIN MENU */
    $('#menuTop').addClass('collapse navbar-collapse navbar-left');
    $('#menuTop ul li ul').parent().parent().addClass('nav navbar-nav');
    $('#menuTop ul li ul').parent().addClass('dropdown');
    $('#menuTop ul li ul').addClass('dropdown-menu');
    $('#menuTop ul li ul').parent().find('a:first').addClass('dropdown-toggle');
    $('#menuTop ul li ul').parent().find('a:first').attr({ 'data-toggle':'dropdown','aria-haspopup':'true','aria-expanded':'false' });

/* BUTTONS */
    $('.submit').addClass('btn btn-primary');
    $('.button').addClass('btn btn-default');
    $('.action-button').addClass('btn btn-lg btn-primary');

/* FORMS */
    $('input[type=text],input[type=password]').addClass('form-control');
    $('#login-form td').addClass('input-group input-group-lg');
    $('div.login').addClass('input-group input-group-sm');
    $('div.login p').contents().unwrap().wrap('<span id=helpBlock class=help-block/>');
    $('input[name=forgotpassword]').attr('aria-describedby','helpblock');
    $('#login-form input[type=submit]').addClass('btn-lg');
    $('#forgotpassword-form input[type=submit]').addClass('btn-sm');

/* COLLAPSIBLE */
    $('.accordion').addClass('panel-group');
    $('.accordion').attr({ 'aria-multiselectable':'true', 'id':'accordion','role':'tablist' });
    $('.accordion h3').addClass('panel-title');
    $('.accordion h3').each(function(){ $(this).next('div').andSelf().wrapAll('<div class="panel panel-default"/>'); });
    $('.accordion h3 a').addClass('collapsed');
    $('.accordion h3 a').attr({ "role":"button", "data-toggle":"collapse", "data-parent":"#accordion", "aria-expanded":"false",
        "aria-controls":function(i) { return 'collapse'+(i+1); }, "href":function(i) { return '#collapse'+(i+1);} });
    $('.accordion .panel-default:first h3 a').attr('aria-expanded','true');
    $('.accordion .panel-default div').not('.accordion .panel-default div div').addClass('panel-collapse collapse');
    $('.accordion .panel-default:first .panel-collapse').addClass(' in ');
    $('.accordion .panel-default .panel-collapse').wrapInner('<div class="panel-body"/>');
    $('.accordion .panel-default .panel-collapse').attr({ 'role':'tabpanel', 'id':function(i) { return 'collapse'+(i+1); },
        'aria-labelledby':function(i) { return 'heading'+(i+1); } });
    $('.accordion h3').wrap('<div class="panel-heading"/>');
    $('.accordion .panel-heading').attr({ 'id':function(i) { return 'heading'+(i+1);}, 'role':'tab' });

/* ALERTS */
    $('div.note').addClass('alert alert-warning');
    $('div.result').addClass('alert alert-danger');

/* typography */
    $('.pagetitle').addClass('page-header');

/* icons */
    /* dashboard */
    $('.send-campaign span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-send');
    $('.manage-campaigns span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-cog');
    $('.manage-users span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-user');
    $('.view-statistics span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-stats');
    $('.manage-lists span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-th-list');
    $('.list-users span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-user');
    $('.import-users span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-import');
    $('.export-users span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-export');
    $('.reconcileusers span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-heart');
    $('.configure span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-cog');
    $('.configure-attributes span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-tags');
    $('.custom-attribute span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-tag');
    $('.spage span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-pencil');
    $('.admins span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-king');
    $('.adminattributes span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-equalizer');
    $('.send-message span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-envelope');
    $('.templates span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-modal-window');
    $('.list-all-msg span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-list');
    $('.processqueue span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-time');
    $('.processbounces span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-hourglass');
    $('.bounces span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-ban-circle');
    $('.plugin span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-pushpin');
    $('.setup span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-wrench');
    $('.dbcheck span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-tasks');
    $('.view-log span.listingname').addClass('btn btn-lg btn-info glyphicon glyphicon-list-alt');
    
/* tables*/
    $('table.listing').not('.home table.listing').addClass('table table-striped');
    
/* show page after loading */
    $('body').removeClass('invisible');

 });
