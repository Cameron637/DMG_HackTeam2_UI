import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: '.search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent {
    @Input() searchResults = [];
    @Input() startOfRound = true;
    @Output() onPromptUpdated = new EventEmitter<String>();
    @Output() onGuessesUpdated = new EventEmitter<String>();

    updatePrompt(title) {
        this.onPromptUpdated.emit(title);
        this.startOfRound = false;
        this.searchResults = [];
    }

    updateGuesses(title) {
        this.onGuessesUpdated.emit(title);
        this.searchResults = [];
    }
}