
// this is code for redirecting link with animation using 
// --------------------------------------------------------
let redirect_Page_About = (ele) => {
  ele.disabled = true;
  let iCnt = 3;	// for time in seconds.
  $('#bt3').addClass('hiding_with_delay');
  $('#bt1').addClass('hiding_with_delay');
  $('#bt2').addClass('hiding_with_delay');
  $('#bt').addClass('hiding');
  $('#preloader').addClass('hiding');
  

  let iTimerId = setInterval(function () {
  iCnt--;     // decrease counter by 1. 
  if (iCnt === 0) {
      // now, redirect page.
      window.location.href = 'about.html';
      clearInterval(iTimerId);		// clear time interval.
  }
}, 1000);
}
// --------------------------------------------------------
let redirect_Page_CV = (ele) => {
  ele.disabled = true;
  let iCnt = 3;	// for time in seconds.
  $('#bt').addClass('hiding_with_delay');
  $('#bt3').addClass('hiding_with_delay');
  $('#bt2').addClass('hiding_with_delay');
  $('#bt1').addClass('hiding');
  $('#preloader').addClass('bluring');

  let iTimerId = setInterval(function () {
  iCnt--;     // decrease counter by 1. 
  if (iCnt === 0) {
      // now, redirect page.
      window.location.href = 'cv.html';
      clearInterval(iTimerId);		// clear time interval.
  }
}, 1000);
}
// --------------------------------------------------------
let redirect_Page_Portfolio = (ele) => {
  ele.disabled = true;
  let iCnt = 3;	// for time in seconds.
  $('#bt').addClass('hiding_with_delay');
  $('#bt1').addClass('hiding_with_delay');
  $('#bt3').addClass('hiding_with_delay');
  $('#bt2').addClass('hiding');
  $('#preloader').addClass('hiding');

  let iTimerId = setInterval(function () {
  iCnt--;     // decrease counter by 1. 
  if (iCnt === 0) {
      // now, redirect page.
      window.location.href = 'portfolio.html';
      clearInterval(iTimerId);		// clear time interval.
  }
}, 1000);
}
// --------------------------------------------------------
let redirect_Page_Contacts = (ele) => {
    ele.disabled = true;
    let iCnt = 3;	// for time in seconds.
    $('#bt').addClass('hiding_with_delay');
    $('#bt1').addClass('hiding_with_delay');
    $('#bt2').addClass('hiding_with_delay');
    $('#bt2').addClass('hiding_with_delay');
    $('#preloader').addClass('hiding');

    let iTimerId = setInterval(function () {
    iCnt--;     // decrease counter by 1. 
    if (iCnt === 0) {
        // now, redirect page.
        window.location.href = 'contacts.html';
        clearInterval(iTimerId);		// clear time interval.
    }
  }, 1000);
}
// --------------------------------------------------------
// End of redirecting delay

// --------------------------------------------------------
// Navigation Animation
// --------------------------------------------------------
var navsandwich = $("[data=hamburger-menu]");
var bar1 = navsandwich.find("b:nth-child(1)");
var bar2 = navsandwich.find("b:nth-child(2)");
var bar3 = navsandwich.find("b:nth-child(3)");




navsandwich.click( function() {
  $(this).toggleClass("active");
  
  if (navsandwich.hasClass("active")) {
    bar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
    bar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
        .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
    navsandwich.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
  } else {
    navsandwich.velocity("reverse");
    bar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
        .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
    bar1.velocity("reverse", {delay: 800});
  }
});


