/*
 * jQuery ToggleText Plugin 1.0
 * www.klegseth.com
 * Copyright 2012, Junior Klegseth (klegseth.com)
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
  "use strict";
  $.fn.toggleText = function(options, callback) {
    /*---------------------------
     Default options
    ----------------------------*/

    //if no options passed but a callback was passed we need to account for it
    if ($.isFunction(options)) {  
      callback = options;  
      options = null;  
    }  

    var defaults = {  
      attr: "data-toggle-text", //the attribute to use for text states, pipe delimited: data-toggle-text="Hello|Goodbye"
      defaultText: "",          //if provided, this is the initial text
      toggleText: "",           //if provided, this is the toggle-to text
      toggleClass: "",          //if provided, this class will be toggled, a good way to test for state in the callback
      force: null               //if provided, forces text to provided state (must be 0 or 1 for default/toggled)
    }; 
      
    //Extend
    options = $.extend({}, defaults, options); 

    return this.each(function() {      
      /*---------------------------
       Global Variables
      ----------------------------*/
      var $this = $(this),
          callbackFn,
          stateText, 
          states,
          toggleTo,
          force;

       /*---------------------------
       Get/set values
      ----------------------------*/
      //if options.callback is set && a function, store it
      callbackFn = $.isFunction(callback) && callback;

      //in case we are using an attribute to get our text states, see if it exists
      stateText = $this.attr(options.attr) || null;
      //and if stateText exists, make sure we find a pipe delimited string
      //  ala: data-toggle-text="Hello|Goodbye"
      //  If not, set states to an empty array for later use
      states = (stateText && stateText.indexOf('|') !== -1) ? stateText.split('|') : [];

      //see if we are forcing a state
      force = options.force && (options.force === 'default' ? 0 : 1);

      /*---------------------------
       Our logic
      ----------------------------*/

      //if we have default and toggle text they supercede the attr, so check and set
      if (options.defaultText && options.toggleText) {
        states[0] = options.toggleText;
        states[1] = options.defaultText;                
      }

      //at this point, states[] needs to have two records, either by splitting the attr or using defaultText/toggleText options
      if (states && states.length === 2) {
        //store the text to be shown
        //forcing
        if (options.force) {
          toggleTo = $.trim(states[force]);

        //or just toggling
        } else {
          toggleTo = $this.text() === $.trim(states[0]) ? $.trim(states[1]) : $.trim(states[0]);
        }

        //change the text and add options.toggleClass if provided
        $this.text(toggleTo).toggleClass(options.toggleClass);

        //finally, check if a callback was supplied
        if (callbackFn) {
          callbackFn.call(this);
        }
      } 
    });
  };
})(jQuery);