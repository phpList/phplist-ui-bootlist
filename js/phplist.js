/* JS function to handle media queries */
window.matchMedia = window.matchMedia || (function(doc, undefined){
  
  var bool,
      docElem = doc.documentElement,
      refNode = docElem.firstElementChild || docElem.firstChild,
      // fakeBody required for <FF4 when executed in <head>
      fakeBody = doc.createElement('body'),
      div = doc.createElement('div');
  
  div.id = 'mq-test-1';
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.appendChild(div);
  
  return function(q){
    
    div.innerHTML = '&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';
    
    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth == 42;
    docElem.removeChild(fakeBody);
    
    return { matches: bool, media: q };
  };
  
})(document);


/* JS to execute on loading document */
$(document).ready(function() {
	// adding add and even classes to table in dbcheck page
	$(".dbcheck tr.row:even").addClass("even");
	$(".dbcheck tr.row:odd").addClass("odd");
	// make the content collapsible
	$('.dbcheck table div.header').each(function(index) {
		$(this).click(function () {
		$(this).next("div.content").toggle("slow");
		});
	});
    // Set active link
    $('.sidebar li.active').parents('li').addClass('active open');

    // Sidebar
    $('.navbar-toggle').click(function() {
        if ($('#sidebar.sidebar-open').length) {
            $('#sidebar').removeClass('sidebar-open');
        } else {
            $('#sidebar').addClass('sidebar-open');
        }
        
    });
    
    // Force reloading of select picker menus to workaround missing language menu issue
    // See:
    //   https://stackoverflow.com/questions/34954785/bootstrap-select-didnt-show-on-page-load
    //   https://mantis.phplist.org/view.php?id=19988
    $(".selectpicker").selectpicker("refresh");

    /* Misc */
    var min_height = ($("#container").height()+15) + "px";
    $('#content').css('min-height', min_height);

    /* menu */
	$('#menuTop a.level0').click(function(){
		$(this).parent().toggleClass('open');
		$('#menuTop li').not($(this).parent()).removeClass('open');
	});
	
	$('#login-form').submit(function(){
			if ($('input[type=text].form-control').val().length < 1 || $('input[type=password].form-control').val().length < 2 ) {
				alert('Please enter your credentials');
				return false;
			}
	});

});
