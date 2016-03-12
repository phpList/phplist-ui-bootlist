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


/* show page after loading */
    $('body').removeClass('invisible');

 });
