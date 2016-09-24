// ==UserScript==
// @name         ZhiHuLink
// @namespace    https://github.com/Cacivy/utils/blob/master/configs/userscripts.js
// @version      0.5
// @description  直接访问知乎外链
// @author       Cacivy
// @match        http://*.zhihu.com/*
// @include      http://*.zhihu.com/*
// @match        https://*.zhihu.com/*
// @include      https://*.zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var loading = false;
    redirect();
    setInterval(function() {
        redirect();
    }, 3000);

    function redirect() {
        if (!loading) {
            loading = true;
            var links = document.querySelectorAll("a[href*='//link.zhihu.com']");
            var href;
            var length = links.length;
            for (var i = 0; i < length; i++) {
                href = links[i].getAttribute('href');
                if (href) {
                    links[i].setAttribute('href', unescape(href.split('target=')[1]));
                }
            }
            loading = false;
        }
    }
})();
