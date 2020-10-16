window.talktype = window.talktype || function(f) {
    if (talktype.loaded)
      f();
    else
      (talktype.q = talktype.q || []).push(arguments);
  };
talktype(function() {
    var pageUrl = window.location.href;
    var pageMetadata = < metadata - object - here > ;
    var accountId = '1000699';
    var metypeHost = 'https://www.metype.com/';
    talktype.pageMetadataSetter(accountId, pageUrl, pageMetadata, metypeHost);
  });
