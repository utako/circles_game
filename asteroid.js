(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, color){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLORS = ["#A5C7C1", "#D1E0DE", "#8CA39F", "#C8E0E3", "#ACC2B1", "#D3E0BF"];
  //  Asteroid.RADIUS = 50;
  Asteroid.POSITIONS = [[screen.width, screen.height], [0, 0], [0, screen.height], [screen.width, 0]];

  Asteroid.randomAsteroid = function () {
    var dimX = Math.floor(screen.width * Math.random());
    var dimY = Math.floor(screen.height * Math.random());
    var pos = [dimX, dimY];
    // var pos = Asteroid.POSITIONS[Math.floor(Asteroid.POSITIONS.length*Math.random())];
    var vel = Asteroid._randomVec();
    var radius = Math.random() * 100 + 5;
    var color = Asteroid.COLORS[Math.floor(Asteroid.COLORS.length * Math.random())];
    return new Asteroid(pos, vel, radius, color);
  };
  
  Asteroid.subAsteroid = function(asteroid) {
    var pos = asteroid.pos;
    var vels = Asteroid._computeSubAsteroidVel(asteroid);
    var radius = asteroid.radius/2;
    var color = asteroid.color;
    return [new Asteroid(pos, vels[0], radius, color), new Asteroid(pos, vels[1], radius, color)]
  };
  
  Asteroid._computeSubAsteroidVel = function(asteroid) {
    var orig_vel = asteroid.vel;
    
    return [new_vels[0], new_vels[1]]
  };

  Asteroid._randomVec = function() {
    var max = 2
    var velX = Math.floor(Math.random() * (max + 1)) - 1;
    var velY = Math.floor(Math.random() * (max + 1)) - 1;
    return [velX, velY]
  };

})(this);