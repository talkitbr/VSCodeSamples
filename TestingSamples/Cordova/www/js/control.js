var snake_control = {
    cw: 10,
    d: '',
    food: {},
    score: 0,
    snake_array: [],
    width: 0,
    height: 0,

    init: function (w, h) {
        this.d = 'right';
        this.create_snake();
        this.create_food();
        this.score = 0;
        this.width = w;
        this.height = h;
    },

    create_snake: function() {
        var length = 5;
        this.snake_array = [];
        for (var i = length - 1; i >= 0; i--) {
            this.snake_array.push({ x: i, y: 0 });
        }
    },

    create_food: function() {
        this.food = {
            x: Math.round(Math.random() * (this.width - this.cw) / this.cw),
            y: Math.round(Math.random() * (this.height - this.cw) / this.cw),
        };
    },

    update_position: function() {
        var nx = this.snake_array[0].x;
        var ny = this.snake_array[0].y;

        if (this.d == 'right') nx++;
        else if (this.d == 'left') nx--;
        else if (this.d == 'up') ny--;
        else if (this.d == 'down') ny++;

        if (nx == -1 || nx == this.width / this.cw || ny == -1 ||
            ny == this.height / this.cw || this.check_collision(nx, ny, this.snake_array)) {
            //restart game
            this.init(this.width, this.height);
            return;
        }

        if (nx == this.food.x && ny == this.food.y) {
            var tail = { x: nx, y: ny };
            this.score++;
            this.create_food();
        }
        else {
            var tail = this.snake_array.pop();
            tail.x = nx; tail.y = ny;
        }

        this.snake_array.unshift(tail);
    },

    check_collision: function(x, y, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].x == x && array[i].y == y)
                return true;
        }
        return false;
    }
};

