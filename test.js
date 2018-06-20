DBSDK.startDesignTool = function (designit_uri,uuid) {
    var   overlay = DBSDK.$('.db-overlay[data-id="' + uuid + '"]');
   if (overlay.length) {
       overlay[0].style.display = 'block';
   }
   else {
       var iframe = doc.createElement('iframe');
       iframe.style.display = 'none';
       iframe.setAttribute('data-id', uuid);
       iframe.width = '100%';
       iframe.height = '100%';
       iframe.src = designit_uri;
       iframe.name = 'db-design-frame-' + uuid;
       iframe.id = 'db-design-frame-' + uuid;
       var iframeOnLoad = function () {
           if (iframe.removeEventListener) {
               iframe.removeEventListener('load', null, true);
           }
           else if (iframe.detachEvent) {
               iframe.detachEvent('onload', null);
           }
           iframe.style.display = 'block';
           DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-loading')[0].style.display = 'none';
           //source_frame = window.document.getElementById('db-design-frame-'+uuid);
       };
       DBSDK.unbindEventHandler(iframe, 'load', iframeOnLoad, true);
       DBSDK.bindEventHandler(iframe, 'load', iframeOnLoad, true);
       var overlay = '<div class="db-overlay animated fadeIn" data-id="' + uuid + '" style="display: block;">'
           + '<span class="db-close-lightbox">×</span>'
           + '<div class="db-lightbox">'
           + '<div class="db-loading">'
           + '<div class="inner-circles-loader large loading-icon"></div>'
           + '</div>'
           + '</div>'
           + '</div>';
       doc.body.insertAdjacentHTML('beforeend', overlay);
       DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-lightbox')[0].appendChild(iframe);
       source_frame = window.document.getElementById('db-design-frame-'+uuid);
       DBSDK.bindEventHandler(DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-close-lightbox')[0], 'click', function (e) {
           e.currentTarget.parentNode.style.display = 'none';
       });
   }
};


DBSDK.buildButtonUri(image, null, null, 0, 0, null, 'img');