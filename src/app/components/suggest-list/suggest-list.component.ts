import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-list',
  templateUrl: './suggest-list.component.html',
  styleUrls: ['./suggest-list.component.css']
})
export class SuggestListComponent implements OnInit {
  suggestions: any[] = [];

  ngOnInit(): void {
    this.loadSuggestions();
  }

  loadSuggestions(): void {
    const storedSuggestions = localStorage.getItem('suggestions');
    if (storedSuggestions) {
      this.suggestions = JSON.parse(storedSuggestions);
    }
  }
}
