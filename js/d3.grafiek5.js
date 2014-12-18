function timeleft() {
    var deathline = new Date(2014, 11, 19, 0, 0);
    var type = 'days';

    function updateTime() {
        var now = new Date();
        var left = (deathline - now) / 1000;
        var str;

        if (left < 0) {
            str = 'Je tijd is op';
        } else {
            if (type === 'days') {
                str = Math.floor(left / (3600 * 24));
            }

            if (type === 'hours') {
                str = Math.floor(left / 3600);
            }

            if (type === 'minutes') {
                str = Math.floor(left / 60);
            }

            if (type === 'seconds') {
                str = Math.floor(left);
            }
        }

        d3.select("#timeleft").text(str);
        setTimeout(updateTime, 1000);
    }

    d3.select('#clockdays').on('click', function() {
        type = 'days';
    });

    d3.select('#clockhours').on('click', function() {
        type = 'hours';
    });

    d3.select('#clockminutes').on('click', function( ){
        type = 'minutes';
    });

    d3.select('#clockseconds').on('click', function() {
        type = 'seconds';
    });

    updateTime();