
/**
 * Defining required selectors
 */
const   SPOILER_TRIGGER             = '.spoiler-trigger',
        SPOILER_BODY_OPENED_CLASS   = 'its-opened';


  /**
   * Function to close all opened spoilers. Obviously.
   */
  function closeOpenedSpoilers() {
   
    jQuery('body *').removeClass( SPOILER_BODY_OPENED_CLASS );
        
    let custom_body_class = localStorage.getItem('custom-body-class'),
        custom_self_class = localStorage.getItem('custom-self-class');
        
    if(undefined !== custom_body_class) {
      jQuery('body').removeClass(custom_body_class);
      localStorage.removeItem('custom-body-class'); 
    }
          
    if(undefined !== custom_self_class) {
      jQuery(SPOILER_TRIGGER).removeClass(custom_self_class);
      localStorage.removeItem('custom-self-class'); 
    }
        
  }//closeOpenedSpoilers()


  //Closing all spoilers by clicking outside trigger or spoiler body
  jQuery(document).on('click',function (e) {
    if (jQuery(e.target).closest(SPOILER_TRIGGER).length || jQuery(e.target.form).length ) return;
    closeOpenedSpoilers();
   });
   

   // Closing all open triggers on Esc key
   jQuery(document).keyup(function(e) {
     if (e.key === "Escape") {
       closeOpenedSpoilers();
     }
   });
  
  
  //Processing spoiler mechanics
  jQuery(SPOILER_TRIGGER).click(function(e) {

    // If clicking on/inside spoiler body that is inside a spoiler trigger element - do nothing 
    if( jQuery(e.target).parents(SPOILER_TRIGGER).length ) {
      return;
    }

    e.preventDefault();

        //selector of spoiler body attached to current trigger (required)
    let target              = jQuery(this).data('target'),
        
        //class, that will be added to <body> on spoiler open (optional)
        custom_body_class   = jQuery(this).data('custom-body-class'),

        //class, that will be added to current trigger element on spoiler open (optional)
        custom_self_class   = jQuery(this).data('custom-self-class');

    
    /** 
     * Reseting posible leftover classes 
     */
    jQuery('body').removeClass( custom_body_class );
    jQuery(this).removeClass( custom_self_class );


    if(undefined !== jQuery( target )) {

      let spoiler_body = jQuery( target );

      if( spoiler_body.hasClass( SPOILER_BODY_OPENED_CLASS ) ) {
        
        spoiler_body.removeClass( SPOILER_BODY_OPENED_CLASS );

      }
      else {

        // Close evrything. Staring up from scratch
        closeOpenedSpoilers();

        spoiler_body.addClass( SPOILER_BODY_OPENED_CLASS );

        if( undefined !== custom_body_class ) {
          jQuery('body').addClass( custom_body_class );
          let ls_bodyclasses = localStorage.getItem('custom-body-class');
          localStorage.setItem( 'custom-body-class', ls_bodyclasses + ' ' + custom_body_class );
        }

        if( undefined !== custom_self_class ) {
          jQuery(this).addClass( custom_self_class );
          let ls_selfclasses = localStorage.getItem('custom-self-class');
          localStorage.setItem( 'custom-self-class', ls_selfclasses + ' ' + custom_self_class );
        }

      }
    }
  });