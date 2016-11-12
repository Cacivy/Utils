// ==UserScript==
// @name         NetMusicTime
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  查看网易云音乐歌单总时间
// @author       Cacivy
// @match        http://music.163.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var _m_tables = document.getElementsByClassName('m-table');
    if (_m_tables) {
        var _table = _m_tables[0];
        if (_table && _table.children) {
            var _tbody = _table.children[1];
            var _trs = _tbody.children;
            var times = [];
            for (var i = 0; i< _trs.length; i++) {
                var _tr = _trs[i];
                var _span = _tr.children[2].children[0];
                var time = _span.innerText;
                times.push(time);
            }
            if (times.length) {
                var h=0, m=0, s=0;
                times.forEach(function(x) {
                    var arr = x.split(':');
                    var minute = parseInt(arr[0]);
                    var second = parseInt(arr[1]);
                    m += minute;
                    s += second;
                    if (s >= 60) {
                        m++;
                        s-=60;
                    }
                    if (m >= 60) {
                        h++;
                        m-=60;
                    }
                });
            var text = h+':'+m+':'+s;
            console.log('Time: '+text);
            var _span = document.getElementsByClassName('s-fc4')[0];
            _span.innerText = _span.innerText  + ' ('+text+')';
        }
    }
}
})();