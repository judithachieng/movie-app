import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suggest-movies',
  templateUrl: './suggest-movies.component.html',
  styleUrls: ['./suggest-movies.component.css']
})
export class SuggestMoviesComponent implements OnInit {
  suggestionForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.suggestionForm = this.formBuilder.group({
      type: ['suggest', Validators.required],
      reason: ['', Validators.required],
      image: ['']
    });
  }

  handleImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.convertImageToBase64(file);
    }
  }

  convertImageToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64Image = e.target.result;
      this.suggestionForm.patchValue({ image: base64Image });
    };
    reader.readAsDataURL(file);
  }

  submitSuggestion(): void {
    this.submitted = true;

    if (this.suggestionForm.invalid) {
      return;
    }

    const suggestionData = this.suggestionForm.value;
    console.log(suggestionData);
    // Save suggestionData to localStorage or send it to the server for further processing
    
    const storedSuggestions = localStorage.getItem('suggestions');
  const suggestions = storedSuggestions ? JSON.parse(storedSuggestions) : [];
  suggestions.push(suggestionData);
  localStorage.setItem('suggestions', JSON.stringify(suggestions));
    this.suggestionForm.reset();
    this.submitted = false;
  }
}
