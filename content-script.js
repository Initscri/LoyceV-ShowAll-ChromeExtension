/**
 * @name LoyceV ShowAll Chrome Extension
 * @author Initscri (https://bitcointalk.org/index.php?action=profile;u=186520)
 */

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

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
    var controller = this;	  
	  
    // Get the mirrortab_back container.
    var mirrortab_b = document.getElementsByClassName("mirrortab_back")[0];
    var url_identifier = '//bitcointalk.org/index.php?topic='; // This also ensures this only runs on BitcoinTalk, and not similar SMF forums which share the same URL structure.
    var cur_url = window.location.href;

    // Check if mirrortab is avail, and on topic page.
    if(mirrortab_b != null && cur_url.indexOf(url_identifier) !== -1) {
      // on a BitcoinTalk.org topic page, proceed.
      console.log('Adding Show All Link');
      controller.addShowAllLinkForTopic(mirrortab_b);
    }
  },
  addShowAllLinkForTopic(location) {
    var controller = this;
	 
    // First, get the topic ID from the url.
    var queryParams = getQueryParams(document.location.href);
    var topicId = queryParams['https://bitcointalk.org/index.php?topic'];
    topicId = topicId.substring(0, topicId.indexOf('.'));
    topicId = topicId.replace('.', '');
	  
    if(location != null && topicId != null) {
      // Adding!
      var nodeSeperator = document.createElement('span');
      nodeSeperator.innerHTML = '  |  ';
	    
      // Create the link
      var nodeLink = document.createElement('a');
      nodeLink.setAttribute('href', 'http://loyce.club/showall/' + topicId + '.html');
      nodeLink.setAttribute('target', '_BLANK');

      // Set the icon of the link.
      nodeLink.innerHTML = 'Show All';
      
      // And set the link!
      controller.logIfVerbose('Setting the link!');
      location.appendChild(nodeSeperator);
      location.appendChild(nodeLink);
      
      controller.logIfVerbose('All Done!');
    }
  },
  init: function() {
    var controller = this;
    
    // Check if on topic page.
    // And this runs everything else.
    controller.checkIfOnTopicPage();
  }
}

setTimeout(function() {
	LoyceVShowAllChromeExtension.init();
}, 500);
