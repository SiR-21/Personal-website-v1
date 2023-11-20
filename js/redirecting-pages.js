// --------------------------------------------------------
// this is code for redirecting link on index page

// --------------------------------------------------------
// About redirection
// --------------------------------------------------------

let redirect_Page_About = (ele) => {
    ele.disabled = true;                                // disable button.
    let iCnt = 3;	                                    // for time in seconds.
    $('#bt3').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt1').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt2').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt').addClass('hiding');                        // hiding using predefined class
    $('#preloader').addClass('hiding');                 // hiding using predefined class
    
    let iTimerId = setInterval(function () {            // start time interval.
        iCnt--;                                         // decrease counter by 1. 
        if (iCnt === 0) {                               // when counter is 0,     
            window.location.href = 'about.html';        // now, redirect page.
            clearInterval(iTimerId);		            // clear time interval.
        }
    }, 1000);                                           // time interval is 1000 milliseconds.
}

// --------------------------------------------------------
// CV redirection
// --------------------------------------------------------

let redirect_Page_CV = (ele) => {
    ele.disabled = true;                                // disable button.
    let iCnt = 3;	                                    // for time in seconds.
    $('#bt').addClass('hiding_with_delay');             // hiding with delay using predefined class
    $('#bt3').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt2').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt1').addClass('hiding');                       // hiding using predefined class
    $('#preloader').addClass('opacity');                // hiding using predefined class opacity
  
    let iTimerId = setInterval(function () {            // start time interval.
        iCnt--;                                         // decrease counter by 1. 
        if (iCnt === 0) {                               // when counter is 0,
            window.location.href = 'cv.html';           // now, redirect page.
            clearInterval(iTimerId);		            // clear time interval.
        }
    }, 1000);                                           // time interval is 1000 milliseconds.
}

// --------------------------------------------------------
// Portfolio redirection
// --------------------------------------------------------

let redirect_Page_Portfolio = (ele) => {
    ele.disabled = true;                                // disable button.
    let iCnt = 3;	                                    // for time in seconds.
    $('#bt').addClass('hiding_with_delay');             // hiding with delay using predefined class
    $('#bt1').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt3').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt2').addClass('hiding');                       // hiding using predefined class
    $('#preloader').addClass('hiding');                 // hiding using predefined class
  
    let iTimerId = setInterval(function () {            // start time interval.
        iCnt--;                                         // decrease counter by 1. 
        if (iCnt === 0) {                               // when counter is 0,
            window.location.href = 'portfolio.html';    // now, redirect page.
            clearInterval(iTimerId);		            // clear time interval.
        }
    }, 1000);
}

// --------------------------------------------------------
// Contacts redirection
// --------------------------------------------------------

let redirect_Page_Contacts = (ele) => {                 
    ele.disabled = true;                                // disable button.
    let iCnt = 3;	                                    // for time in seconds.
    $('#bt').addClass('hiding_with_delay');             // hiding with delay using predefined class
    $('#bt1').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt2').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#bt2').addClass('hiding_with_delay');            // hiding with delay using predefined class
    $('#preloader').addClass('hiding');                 // hiding using predefined class
  
    let iTimerId = setInterval(function () {            // start time interval.
        iCnt--;                                         // decrease counter by 1. 
        if (iCnt === 0) {                               // when counter is 0,
            window.location.href = 'contacts.html';     // now, redirect page.
            clearInterval(iTimerId);		            // clear time interval.
        }
    }, 1000);                                           // time interval is 1000 milliseconds.
}

// --------------------------------------------------------
// End of redirectings
// --------------------------------------------------------