export class Player {
  name;
  level;
      constructor(name, level, level2) {
      this.name = name;
      this.level = level;
   
    }
    // crear método info()
  info(){
    return `${this.name} has reached level ${this.level}!`;
  }
 }

  //Crear objetos fuera de la clase
  const namePlayer = new Player("Tara", 6);
  console.log(namePlayer.info());


