export class Player {
  name;
  level;
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
  }
  //crear objetos
const namePlayer = new Player("MasterChief", 100);
console.log(namePlayer);
