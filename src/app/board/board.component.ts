import { Component } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  cells: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
  playerPosition = 1;
  noOfPlayer = 4;
  players = ['Player1', 'Player2', 'Player3', 'Player4'];
  playersPos = [1, 1, 1, 1];
  currentPlayer = 0;
  diceRolled = false;
  rollValue: number = 0;


  snakesAndLadderStart: number[] = Array.from(
    { length: 10 },
    (_, i) => Math.floor(Math.random() * 99) + 2
  );


  snakesAndLadderEnd: number[] = Array.from(
    { length: 10 },
    (_, i) => Math.floor(Math.random() * 99) + 1
  );


  ngOnInit(): void {
    for (let i = 10; i < 100; i += 20) {
      for (let j = 0, k = 9; j < k; j++, k--) {
        let temp = this.cells[i+j];
        this.cells[i+j] = this.cells[i+k];
        this.cells[i+k] = temp;
      }
    }
    console.log(this.snakesAndLadderStart);
    console.log(this.snakesAndLadderEnd);
  }


  isExists(cell: number) {
    const index = this.playersPos.indexOf(cell);
    if (index != -1) {
      return this.players[index];
    }
    return '';
  }


  movePlayer(): void {
    // if (!this.diceRolled) {
    //   return;
    // }
    // Check for snake or ladder
    let newPosition = this.playerPosition;
    const index = this.snakesAndLadderStart.indexOf(newPosition);
    if (index != -1) {
      newPosition = this.snakesAndLadderEnd[index];
      if (this.snakesAndLadderEnd[index] > this.snakesAndLadderStart[index]) {
        console.log('got a ladder to', this.snakesAndLadderEnd[index]);
      } else {
        console.log('got a snake to', this.snakesAndLadderEnd[index]);
      }
    }
    if (newPosition >= 100) {
      alert(`${this.currentPlayer} wins!`);
      this.resetGame();
      return;
    }

    this.playerPosition = newPosition;
    this.playersPos[this.currentPlayer] = newPosition; //
    this.currentPlayer = (this.currentPlayer + 1) % this.noOfPlayer;
  }


  rollDice(): void {
    if (this.diceRolled) {
      return; // Prevent rolling the dice multiple times
    }

    const diceRoll = Math.floor(Math.random() * 6) + 1;
    this.rollValue = diceRoll;
    this.playersPos[this.currentPlayer] += diceRoll; //
    this.playerPosition = this.playersPos[this.currentPlayer];
    // Implement your logic to handle snake and ladder
    // (You'll need to define the snakes and ladders positions)
    this.movePlayer();
    this.diceRolled = true;
    setTimeout(() => (this.diceRolled = false), 500);
  }


  resetGame(): void {
    this.playerPosition = 1;
    this.playersPos = [1, 1, 1, 1];
    this.currentPlayer = 0;
    this.diceRolled = false;
  }

  getPlayerIcon(player: string): string {
    console.log(`assets/${player.toLowerCase()}.png`);
    return `assets/${player.toLowerCase()}.png`;
  }

}