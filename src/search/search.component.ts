import { Component, EventEmitter, Input, Output } from '@angular/core';

declare let fetch;

@Component({
    selector: '.search-bar',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {
    search = "";
    searchResults = [];
    @Input() startOfRound = true;
    @Input() isMyTurn = true;
    @Output() onPromptUpdated = new EventEmitter<String>();
    @Output() onGuessesUpdated = new EventEmitter<String>();

    searchMovies() {
        fetch(`http://www.omdbapi.com/?s=${this.search}&type=movie`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw {
                        status: response.status,
                        statusText: response.statusText
                    }
                }
            })
            .then(searchResults => {
                this.searchResults = searchResults.Search;
            })
            .catch(error => console.error(error));
    }

    updatePrompt(title) {
        this.onPromptUpdated.emit(title);
    }

    updateGuessList(title) {
        this.onGuessesUpdated.emit(title);
    }
}