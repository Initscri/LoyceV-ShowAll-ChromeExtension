/**
 * @name LoyceV ShowAll Chrome Extension
 * @author Initscri (https://bitcointalk.org/index.php?action=profile;u=186520)
 */

var LoyceVShowAllChromeExtension = {
  logPrefix: 'LoyceV Show All Chrome Extension V1.0',
  verbose: true, // I mean, you should probably leave this on.
  logIfVerbose: function(message) {
    var controller = this;
    
    if(controller.verbose == true) {
      console.log(controller.logPrefix + ': ' + message);
    }
  },
  checkIfOnTopicPage: function() {
    // Get the mirrortab_back container.
    var mirrortab_b = document.getElementsByClassName("mirrortab_back");
    var url_identifier = '//bitcointalk.org/index.php?topic='; // This also ensures this only runs on BitcoinTalk, and not similar SMF forums which share the same URL structure.
    var cur_url = window.location.href;

    // Check if mirrortab is avail, and on topic page.
    if(mirrortab_b.length > 0 && cur_url.indexOf(url_identifier) !== -1) {
      // on a BitcoinTalk.org topic page, proceed.
      console.log('Adding Show All Link');
      controller.addShowAllLinkForTopic(mirrortab_b);
    }
  },
  addShowAllLinkForTopic(location) {
    if(location.length > 0) {
      // Adding!
      // @todo
    }
  },
  init: function() {
    var controller = this;
    
    // Check if on topic page.
    // And this runs everything else.
    controller.checkIfOnTopicPage();
  }
}
