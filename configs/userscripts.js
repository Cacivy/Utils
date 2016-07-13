// ==UserScript==
// @name         ZhiHuLink
// @namespace    https://github.com/Cacivy/utils/blob/master/configs/userscripts.js
// @version      0.1
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
    var arr = [];
    var loading = false;
    redirect();
    setInterval(function() {
        redirect();
    }, 3000);

    function redirect() {
        if (!loading) {
            loading = true;
            var links = document.getElementsByTagName('a');
            var href;
            var length = links.length;
            for (var i = 0; i < length; i++) {
                if (arr.indexOf(links[i]) > -1) {
                    continue;
                }
                href = links[i].getAttribute('href');
                if (href && href.indexOf('//link.zhihu.com') > -1) {
                    links[i].setAttribute('href', unescape(href.split('target=')[1]));
                }
                arr.push(links[i]);
            }
            loading = false;
        }
    }
})();