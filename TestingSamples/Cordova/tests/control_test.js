var assert = chai.assert;

describe('Snake Control Test', function () {
    describe('Checks if the snake is create correctly', function () {
        it('should create a snake with length 5 and with the correct values for each position', function () {
            snake_control.init(300, 400);
            snake_control.create_snake();
            
            assert.equal(snake_control.snake_array.length, 5);
            
            assert.equal(snake_control.snake_array[0].x, 4);
            assert.equal(snake_control.snake_array[0].y, 0);
            
            assert.equal(snake_control.snake_array[1].x, 3);
            assert.equal(snake_control.snake_array[1].y, 0);
            
            assert.equal(snake_control.snake_array[2].x, 2);
            assert.equal(snake_control.snake_array[2].y, 0);
            
            assert.equal(snake_control.snake_array[3].x, 1);
            assert.equal(snake_control.snake_array[3].y, 0);
            
            assert.equal(snake_control.snake_array[4].x, 0);
            assert.equal(snake_control.snake_array[4].y, 0);
        });
    });
    
    describe('Checks if the collision is tested correctly', function () {
        it('should collide', function () {
            snake_control.init(300, 400);
            snake_control.create_snake();
            
            assert.isTrue(snake_control.check_collision(1,0, snake_control.snake_array));
            assert.isTrue(snake_control.check_collision(3,0, snake_control.snake_array));
        });
        
        it('should not collide', function () {
            snake_control.init(300, 400);
            snake_control.create_snake();

            assert.isFalse(snake_control.check_collision(1,1, snake_control.snake_array));
            assert.isFalse(snake_control.check_collision(6,0, snake_control.snake_array));
        });
    });    
    
    describe('Checks if the snake moves correctly', function () {
        it('should create a snake with length 5 and with the correct values for each position', function () {
            snake_control.init(300, 400);
            snake_control.create_snake();
           
            assert.equal(snake_control.snake_array[0].x, 4, 'Initial position is wrong');
            assert.equal(snake_control.snake_array[0].y, 0, 'Initial position is wrong');
            
            snake_control.update_position();
            
            assert.equal(snake_control.snake_array[0].x, 5, 'Should have moved right');
            assert.equal(snake_control.snake_array[0].y, 0, 'Should have moved right');
            
            snake_control.update_position();
            
            assert.equal(snake_control.snake_array[0].x, 6, 'Should have moved right again');
            assert.equal(snake_control.snake_array[0].y, 0, 'Should have moved right again');
            
            snake_control.d = 'down';
            snake_control.update_position();
            
            assert.equal(snake_control.snake_array[0].x, 6, 'Should have moved down');
            assert.equal(snake_control.snake_array[0].y, 1, 'Should have moved down');
            
            snake_control.d = 'left';
            snake_control.update_position();
            
            assert.equal(snake_control.snake_array[0].x, 5, 'Should have moved left');
            assert.equal(snake_control.snake_array[0].y, 1, 'Should have moved left');
            
            snake_control.d = 'up';
            snake_control.update_position();
            
            assert.equal(snake_control.snake_array[0].x, 4, 'Should have moved up, collided and restarted');
            assert.equal(snake_control.snake_array[0].y, 0, 'Should have moved up, collided and restarted');
        });
    });
});