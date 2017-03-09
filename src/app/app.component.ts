import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  player;
  otherPlayer;
  gameStart = false;
  startOfRound = true;
  isMyTurn = true;
  prompt = this.startOfRound && this.isMyTurn ? 'Choose a Prompt' : 'Wait for a Prompt';
  guessList = [];
  otherPlayersGuessList = [];

  updatePrompt(title) {
    this.prompt = title;
    this.startOfRound = false;
    this.isMyTurn = false;
  }

  updateGuessList(title) {
    this.guessList.push({
      title: title,
      isBadGuess: (this.prompt === title || this.guessList.find(guess => guess.title === title) || this.otherPlayersGuessList.find(guess => guess.title === title)) ? true : false
    });
  }

  login(login) {
    this.player = {
      username: login.username,
      password: login.password
    }
    this.gameStart = true;
  }
}
