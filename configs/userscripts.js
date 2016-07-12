// ==UserScript==
// @name         ZhiHuLink
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Cacivy
// @match        http://www.zhihu.com/*
// @include      http://www.zhihu.com/*
// @match        https://www.zhihu.com/*
// @include      https://www.zhihu.com/*
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