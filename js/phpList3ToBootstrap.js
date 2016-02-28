$(document).ready(function() {

/* MAIN MENU */
    $('#menuTop').addClass('collapse navbar-collapse navbar-left');
    $('#menuTop ul li ul').parent().parent().addClass('nav navbar-nav');
    $('#menuTop ul li ul').parent().addClass('dropdown');
    $('#menuTop ul li ul').addClass('dropdown-menu');
    $('#menuTop ul li ul').parent().find('a:first').addClass('dropdown-toggle');
    $('#menuTop ul li ul').parent().find('a:first').attr('data-toggle','dropdown');
    $('#menuTop ul li ul').parent().find('a:first').attr('aria-haspopup','true');
    $('#menuTop ul li ul').parent().find('a:first').attr('aria-expanded','false');

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

/* ALERTS */
    $('div.note').addClass('alert alert-warning');
    $('div.result').addClass('alert alert-danger');

/* typography */
    $('.pagetitle').addClass('page-header');


/* show page after loading */
    $('body').removeClass('invisible');

 });
