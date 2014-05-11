(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, vel, radius, color, game){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.game = game;
  };

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.hitAsteroids = function() {
    var bullet = this;
    var game = this.game;
    game.asteroids.forEach ( function(asteroid) {
      if (asteroid.isCollidedWith(bullet)) {
        game.removeAsteroid(asteroid);
        game.removeBullet(bullet);
        // game.addSubAsteroids(asteroid);
      }
    });
  };
  
})(this);