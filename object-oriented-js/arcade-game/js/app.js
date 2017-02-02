// Enemies our player must avoid
var Enemy = function() {
    //random start x position for spacing the enemys out
    this.x = (-grid.col) * Math.floor((Math.random() * 3) + 1);
    //random starting row
    var row = Math.floor((Math.random() * 3) + 1) * 83;
    this.y = row - 20;
    this.size = 60;
    this.speed = Math.floor(Math.random() * 100) + 100;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var hasCollided = this.checkForPlayer();
    if (hasCollided) {
      //do not update
    } else {
      if (this.x > grid.col * 5) {
        this.x = -grid.col;
      }
      this.x = this.x + (this.speed * dt);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//check for collision with player
//returns true if collision has occured
Enemy.prototype.checkForPlayer = function() {
  //the rendered position of the bug is different from its x/y position
  var renderedPos = {
    x: this.x + 50,
    y: this.y + 100
  };
  //find the distance between this enemy and the player
  var difX = Math.abs(this.x - player.x);
  var difY = Math.abs(this.y - player.y - 40);
  var dist = Math.sqrt(Math.pow(difX, 2) + Math.pow(difY, 2));
  if (dist < this.size) {
    return true;
  }
  return false;
}

//Main player controlled by user
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.startPos = {
      x: grid.col * 2,
      y: (grid.row * 4) + grid.row/2
    }
    this.x = this.startPos.x;
    this.y = this.startPos.y;
    this.maxY = grid.col * 4;
    this.maxX = grid.row * 4;
    this.speed = 2;
};

// Update the player's position on the screen
Player.prototype.update = function(dt) {
  //reset the player if they reach the water
  if (this.y < grid.row/2) {
    this.reset();
  }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Reset the player's location to the starting position
Player.prototype.reset = function() {
  this.x = this.startPos.x;
  this.y = this.startPos.y
}

// Handle user input. Update the player postion based on the key pressed
Player.prototype.handleInput = function(keyName) {
  switch (keyName) {
    case 'up':
      if (this.y < grid.row - grid.row/2) {
        //limit reached, don't allow player to move this way anymore
        break;
      }
      this.y = this.y - grid.row;
    break;
    case 'down':
      if (this.y >= grid.row * 4) {
        break;
      }
      this.y = this.y + grid.row;
    break;
    case 'right':
      if (this.x >= grid.row * 4) {
        break;
      }
      this.x = this.x + grid.col;
    break;
    case 'left':
      if (this.x < grid.row - grid.row/2) {
        break;
      }
      this.x = this.x - grid.col;
    break;
  }
}


var checkCollisions = function() {
  allEnemies.forEach(function(enemy) {
    var hasCollided = enemy.checkForPlayer();
    if (hasCollided) {
      // console.log("Hit");
      player.reset();
    }
  })
}

//Simple referance for grid size
var grid = {
  col: 101,
  row: 83
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [];
for (var i = 0; i < 8; i++) {
  allEnemies.push(new Enemy());
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
