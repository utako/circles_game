(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Ship = Asteroids.Ship = function(pos, vel, radius, color){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }
  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];    
  };

  Ship.prototype.fireBullet = function(game) {
    var ship = this;
    if (ship.vel !== 0) {
      var bulletPos = ship.pos;
      var s = Math.sqrt(Math.pow(ship.vel[0], 2) + Math.pow(ship.vel[1], 2));
      var bulletVel = [10*ship.vel[0]/s, 10*ship.vel[1]/s];
      return new Asteroids.Bullet(bulletPos, bulletVel, 2, "#3F3A78", game)
    }
  };

})(this);