// Chạy khi bấm nút browser action
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            // tạo đoạn script để install SDK trên trang
            var s = document.createElement('script');
            s.src = chrome.extension.getURL('script.js');
            s.onload = function () {
                this.remove()
            };
            (document.head || document.documentElement).appendChild(s);
            //end
            
            console.log(request.url)

            // Thêm nút designit cạnh ảnh trên google image
            var imageList = $("div.irc_mic");
            const tableList = $("div.Qc8zh")

            const addText = (n) => {
                const imgURL = imageList.eq(n).find("img").attr('src')
                tableList.eq(n).append(`<div class="db-btn-design-me" data-db-image="${imgURL}" data-db-title="Edit with DesignBold"> </div>`);
                n === tableList.length ? console.log("end") : addText(n + 1)
            }

            addText(0)
            //end

        }
    }
);

var allUri = []

//chạy khi nhấn vào option trong menu chuột phải
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "context_clicked") {
            //hàm tạo link thiết kế
            const makeLink = (designit_uri, uuid) => {
                var overlay = DBSDK.$('.db-overlay[data-id="' + uuid + '"]');
                if (overlay.length) {
                    overlay[0].style.display = 'block';
                } else {
                    var iframe = document.createElement('iframe');
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
                        } else if (iframe.detachEvent) {
                            iframe.detachEvent('onload', null);
                        }
                        iframe.style.display = 'block';
                        DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-loading')[0].style.display = 'none';
                        //source_frame = window.document.getElementById('db-design-frame-'+uuid);
                    };
                    DBSDK.unbindEventHandler(iframe, 'load', iframeOnLoad, true);
                    DBSDK.bindEventHandler(iframe, 'load', iframeOnLoad, true);
                    var overlay = '<div class="db-overlay animated fadeIn" data-id="' + uuid + '" style="display: block;">' +
                        '<span class="db-close-lightbox">×</span>' +
                        '<div class="db-lightbox">' +
                        '<div class="db-loading">' +
                        '<div class="inner-circles-loader large loading-icon"></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    document.body.insertAdjacentHTML('beforeend', overlay);
                    DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-lightbox')[0].appendChild(iframe);
                    source_frame = window.document.getElementById('db-design-frame-' + uuid);
                    DBSDK.bindEventHandler(DBSDK.$('.db-overlay[data-id="' + uuid + '"] .db-close-lightbox')[0], 'click', function (e) {
                        e.currentTarget.parentNode.style.display = 'none';
                    });
                }
            };
            //End

            //tạo uri từ url được truyền từ background.js
            const uri = DBSDK.buildButtonUri(request.url, null, null, 0, 0, null, 'img');
            if (uri === allUri.slice(-1)[0]) {
                makeLink(uri, "123123123123")
            } else {
                DBSDK.reloadButton();
                makeLink(uri, "aaaaa3123123")
            };
            //thêm vào array uri để check
            allUri.push(uri)

        }
    }
);