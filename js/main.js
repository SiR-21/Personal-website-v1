// --------------------------------------------------------
// Navigation Animation
// --------------------------------------------------------

// Sandfich menu 
// --------------------------------------------------------

var navsandwich = $("[data=hamburger-menu]");     // Menu button
var bar1 = navsandwich.find("b:nth-child(1)");    // Menu bars
var bar2 = navsandwich.find("b:nth-child(2)");    // Menu bars
var bar3 = navsandwich.find("b:nth-child(3)");    // Menu bars




navsandwich.click( function() {                   // Menu button click event
  $(this).toggleClass("active");                  // Toggle class active
  if (navsandwich.hasClass("active")) {           // If class active

    bar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});                            // Move bars
    bar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})                             // Move bars
        .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });           // Rotate bars
    navsandwich.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });   // Rotate bars
    
  } else {                                                                      // If not class active
    navsandwich.velocity("reverse");                                            // Reverse bars
    bar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })         // Rotate bars
        .velocity({ top: "100%" }, {duration: 200, easing: "swing"});           // Move bars
    bar1.velocity("reverse", {delay: 800});                                     // Reverse bars
  }
});


