var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        if (id == 'deviceready') {
            app.snake();
        }
    },
    buttonClick: function (id) {
        var move;
        if (id == 'btnUp')
            move = 'snake/up';
        else if (id == 'btnDown')
            move = 'snake/down';
        else if (id == 'btnLeft')
            move = 'snake/left';
        else if (id == 'btnRight')
            move = 'snake/right';
        $(document).trigger(move);

        return move;
    },
    snake: function () {
        var canvas = $('#canvas')[0],
            ctx = canvas.getContext('2d'),
            w = $('#canvas').width(),
            h = $('#canvas').height(),
            control = snake_control;

        function init() {
            game_loop = setInterval(paint, 120);
            control.init(w, h);
        }

        init();

        function paint() {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(0, 0, w, h);

            control.update_position();

            for (var i = 0; i < control.snake_array.length; i++) {
                var c = control.snake_array[i];
                paint_cell(c.x, c.y);
            }

            paint_cell(control.food.x, control.food.y);
            var score_text = 'Score: ' + control.score;
            ctx.fillText(score_text, 5, h - 5);
        }

        function paint_cell(x, y) {
            ctx.fillStyle = 'blue';
            ctx.fillRect(x * control.cw, y * control.cw, control.cw, control.cw);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(x * control.cw, y * control.cw, control.cw, control.cw);
        }

        $(document).on('snake/down', function () {
            if (control.d != 'up')
                control.d = 'down';
        });
        $(document).on('snake/up', function () {
            if (control.d != 'down')
                control.d = 'up';
        });
        $(document).on('snake/right', function () {
            if (control.d != 'left')
                control.d = 'right';
        });
        $(document).on('snake/left', function () {
            if (control.d != 'right')
                control.d = 'left';
        });
    }
};