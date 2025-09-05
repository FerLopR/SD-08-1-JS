export class Player {
  name;
  level;
  xp;
    constructor(name,level,xp) {
      this.name = name;
      this.level = level;
      this.xp = xp;
    }
  //método info()
  info(){
    return `${this.name} has reached Level ${this.level}! `
  }

 raiseXp(){
        this.xp += 10;
        return this.levelUp();
    }


  //método levelUp()
  levelUp(){
    if(this.xp >=100){
      this.level++;
      this.xp -=100;
      return `${this.name} alcanzo 100 puntos, ahora sube a nivel ${this.level}`;
    }else{
      return `${this.name} no alcanzo los puntos, así que no sube de nivel`;
    }
  }
    
  }

  const namePlayer = new Player("Fernando",10, 100);
  console.log(namePlayer.info())
  console.log(namePlayer.levelUp());

