"use strict";

function getTime() {
    var t = new Date();
    var seconds = t.getSeconds();
    var minutes = t.getMinutes();
    var hours = t.getHours();
    var days = t.getDate();
    var month = t.getMonth();
    return {
        'total': t,
        'months': month,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    var daySpan = clock.querySelector('.day');
    var monthSpan = clock.querySelector('.month');

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function updateClock() {
        var t = getTime();
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        daySpan.innerHTML = ('0' + t.days).slice(-2);
        monthSpan.innerHTML = monthNames[t.months];
    }

    updateClock();
    setInterval(updateClock, 1000);
}

initializeClock('Clockdiv');

/*
(function(){
    var app = angular.module("mainapp", []);
    var query = "abc";

    var QuoteController = function($scope, $http)
    {
        var WriteQuote = function(response)
        {
            $scope.quote = response.data;
        }

        $http.get("http://api.duckduckgo.com/?q=" + query +"&format=json")
            .then(WriteQuote);
    }

    app.controller("QuoteController", QuoteController);

}());
*/

var $iframe = document.getElementById('searchbar');

var iframefn =  function() {
    $iframe.contents().find("head")
        .append($("<style type='text/css'> #search_form_input_homepage{border: none; border-radius: 0;  -webkit-border-radius: 0; -webkit-border-top-left-radius: 0; border-right: 0;  -moz-border-radius: 0; border-radius: 0; -moz-border-radius: 0;} </style>"));
}();