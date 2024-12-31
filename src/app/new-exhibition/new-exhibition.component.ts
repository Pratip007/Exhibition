import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSectionModalComponent } from './add-section-modal/add-section-modal.component';

@Component({
  selector: 'app-new-exhibition',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddSectionModalComponent],
  templateUrl: './new-exhibition.component.html',
  styleUrls: ['./new-exhibition.component.css'],
})
export class NewExhibitionComponent {
  exhibitionForm: FormGroup;
  selectedFile: File | null = null;



  constructor(private fb: FormBuilder) {
    this.exhibitionForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      coverImage: [null],
    });
  }

  // Trigger the file input
  triggerFileInput() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    fileInput?.click();
  }

  // Handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.selectedFile = file;
      this.exhibitionForm.patchValue({
        coverImage: file.name,
      });
    }
  }

  // Handle drag and drop
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.selectedFile = files[0];
      this.exhibitionForm.patchValue({
        coverImage: files[0].name,
      });
    }
  }

  // Generate random ID
  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
  // Retrieve all saved data from local storage
    allSavedData: any[] = JSON.parse(localStorage.getItem('exhibitionData') || '[]');


    onSubmit() {
      if (this.exhibitionForm.valid) {
        const randomId = this.generateRandomId();
        const formData = this.exhibitionForm.value;
        const owner = "Owner";
        const date = new Date();

        // Set the cover image path (assuming a static folder 'uploads' for storing images)
        const coverImagePath = this.selectedFile ? `assets/image/${this.selectedFile.name}` : null;

        const dataToStore = {
          id: randomId,
          ...formData,
          coverImagePath,
          owner,
          date,
        };

        // Retrieve existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('exhibitionData') || '[]');

        // Append new data to existing data
        existingData.push(dataToStore);

        // Save updated data back to local storage
        localStorage.setItem('exhibitionData', JSON.stringify(existingData));

        alert('Form data saved to local storage!');
        console.log('Saved Data:', dataToStore);
      } else {
        alert('Form is invalid. Please fill out all required fields.');
      }
    }
}
