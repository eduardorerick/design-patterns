interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(list: string[]): void;
}

class GameStore implements Subject {
  private observers: Observer[] = [];

  private stock = ["Game1", "Game2"];

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.stock);
    }
  }

  addNewGame(game: string) {
    console.log(`Game adicionado ao stock: ${game}`);
    this.stock.push(game);
    this.notifyObservers();
  }

  removeGame(game: string) {
    let index = this.stock.indexOf(game);
    this.stock.splice(index, 1);
    this.notifyObservers();
  }
}

class Customer1 implements Observer {
  private subject: Subject;

  constructor(gameStore: Subject) {
    this.subject = gameStore;
    gameStore.registerObserver(this);
  }
  update(list: string[]): void {
    if (list.includes("Zelda")) {
      console.log("Customer1: Tem o produto que eu quero! Zelda ");
      return;
    }
    console.log("Customer1: Não tem o produto que eu quero!");
  }
}

class Customer2 implements Observer {
  private subject: Subject;

  constructor(gameStore: Subject) {
    this.subject = gameStore;
    gameStore.registerObserver(this);
  }
  update(list: string[]): void {
    if (list.includes("GTA")) {
      console.log("Customer2: Tem o produto que eu quero! GTA ");
      return;
    }
    console.log("Customer2: Não tem o produto que eu quero!");
  }
}

let gameStore = new GameStore();

let customer1 = new Customer1(gameStore);
let customer2 = new Customer2(gameStore);

gameStore.addNewGame("Mario");

gameStore.addNewGame("Zelda");

gameStore.addNewGame("GTA");
