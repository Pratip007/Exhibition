import { CommonModule } from '@angular/common';
import { Component, inject, Input, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-section-modal',
  standalone: true,
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `


     <!-- Backdrop -->
<div
  *ngIf="isOpen"
  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
>
  <!-- Modal Container -->
  <div class="bg-white rounded-lg shadow-lg  max-w-3xl w-full p-6">
    <!-- Modal Header -->
    <div class="flex justify-between items-center border-b pb-3">
      <h3 class="text-lg font-semibold">Add Section</h3>
      <button class="text-gray-500 hover:text-gray-700" (click)="closeModal()">X</button>
    </div>

    <!-- Modal Body -->
    <form [formGroup]="exhibitionForm" class="bg-gray-100 p-8 rounded-lg">
    <div class="flex gap-8">
      <div class="flex-1">
        <div class="mb-6">
          <label class="block mb-2">
            Title<span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            formControlName="title"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
        </div>

        <div class="mb-6">
          <label class="block mb-2">Description</label>
          <textarea
            formControlName="description"
            rows="6"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>
      </div>

      <div class="w-72">
        <div
          class="border-2 border-dashed border-gray-300 rounded-lg h-72 flex items-center justify-center"
          (click)="triggerFileInput()"
          (dragover)="onDragOver($event)"
          (drop)="onDrop($event)">
          <div class="text-center text-gray-500">
            <p>Cover Image</p>
            <input
              #fileInput
              type="file"
              (change)="onFileSelected($event)"
              class="hidden"
              accept="image/*">
            <button type="button" class="mt-2 text-blue-500 hover:text-blue-700">Upload Image</button>
          </div>
        </div>
        <div *ngIf="selectedFile" class="mt-4">
          <p>Selected File: {{ selectedFile.name }}</p>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-300 mt-8 pt-8 flex justify-end">
    </div>
  </form>

    <!-- Modal Footer -->
    <div class="mt-2 flex justify-end space-x-2">
      <button
      class="px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-300"

        (click)="closeModal()"
      >
        Cancel
      </button>
      <button class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      (click)="onSubmit()">
        Confirm
      </button>
    </div>
  </div>


</div>

  `,
  styles: ` `,
})
export class AddSectionModalComponent {



  @Input() titleData!: any;

    isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  exhibitionForm: FormGroup;
  selectedFile: File | null = null;
//	private modalService = inject(NgbModal);

  constructor(private fb: FormBuilder, private router : Router) {
    this.exhibitionForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      coverImage: [null],

    });

  }

  // Trigger the file input
  triggerFileInput() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    fileInput?.click(); // Safe usage with type assertion
  }

  // Handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.selectedFile = file;
      this.exhibitionForm.patchValue({
        coverImage: file,
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
        coverImage: files[0],
      });
    }
  }

  updateData(data: any[], id: any, updatedFields: any) {
    return data.map((titleData) => {
      if (titleData.id === id) {
        setTimeout(() => {
          console.log(titleData);
        }, 2000);
        
        return { ...this.titleData, ...updatedFields }; // Merge updated fields
      }
      return titleData;
    });
  }


  onSubmit() {
    this.router.navigate(['/preview-ex']);
    if (this.exhibitionForm.valid) {
      // Retrieve data from local storage by ID

      const storedData = JSON.parse(localStorage.getItem('exhibitionData') || '{}');


      if (storedData) {
        const finalData =this.updateData(storedData, this.titleData.id, this.exhibitionForm.value);
        console.log('Final Data:', finalData);

      } else {
        console.log('No data found for the given ID');
      }

      //console.log('Form Data:', this.exhibitionForm.value);
     // console.log('Selected File:', this.selectedFile);
    }
  }

}
