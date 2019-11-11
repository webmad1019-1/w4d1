class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveTo(newX, newY) {
    this.x = newX;
    this.y = newY;
  }

  getPointData() {
    return {
      posX: this.x,
      posY: this.y
    };
  }
}

class WarcraftSoldier {
  constructor(xParam, yParam, life) {
    this.coords = new Point(xParam, yParam);
    this.life = life;
  }

  receiveHit(hitPoint) {
    this.life -= hitPoint;
  }
}

let soldiers = Array(5)
  .fill()
  .map(soldier => new WarcraftSoldier(100, 200, 100));

soldiers.push(new WarcraftSoldier(200, 200, 80));
soldiers.push(new WarcraftSoldier(300, 200, 100));
soldiers.push(new WarcraftSoldier(400, 200, 120));

let output = soldiers.filter(soldier => soldier.coords.x >= 200);
let totalLifePoints = output.reduce((ac, cu) => {
  ac += cu.life;
  return ac;
}, 0);

console.log(output);
console.log(`total life points= ${totalLifePoints}`);
