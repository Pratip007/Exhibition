import { Component } from '@angular/core';
import { AddSectionModalComponent } from '../add-section-modal/add-section-modal.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-exhibition',
  standalone: true,
  imports: [
    AddSectionModalComponent,
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="max-w-6xl mx-auto p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">Preview Exhibition</h1>
          <p class="text-sm text-gray-500">All * marked fields are mandatory</p>
        </div>
        <div>
          <button
            (click)="onSubmit()"
            class="px-6 mx-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-300"
          >
            Preview
          </button>
          <button
            (click)="onSubmit()"
            class="px-6 py-2 mx-2  bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-300"
          >
            Save
          </button>
        </div>
      </div>

      <form
        [formGroup]="exhibitionForm"
        class="bg-gray-100 p-8 mb-16 rounded-lg"
      >
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
              />
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
              (drop)="onDrop($event)"
            >
              <div class="text-center text-gray-500">
                <p>Cover Image</p>
                <input
                  #fileInput
                  type="file"
                  (change)="onFileSelected($event)"
                  class="hidden"
                  accept="image/*"
                />
                <button
                  type="button"
                  class="mt-2 text-blue-500 hover:text-blue-700"
                >
                  Upload Image
                </button>
              </div>
            </div>
            <div *ngIf="selectedFile" class="mt-4">
              <p>Selected File: {{ selectedFile?.name }}</p>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-300 mt-8 pt-8 flex justify-end">
          <button
            class="px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-300"
            (click)="modal.openModal()"
          >
            Add Section
          </button>
          <app-add-section-modal #modal></app-add-section-modal>
        </div>
      </form>

      <div
        class=" max-w-6xl  mx-auto  rounded-lg   pb-4 "
        *ngFor="let data of Section; let i = index"
      >
        <!-- Top Navigation -->

        <nav class="bg-black w-48  col-span-7  p-2 flex rounded-t-lg gap-2">
          <button class="text-white p-2 hover:bg-gray-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M20.71 5.63l-2.34-2.34a2 2 0 00-2.83 0l-10 10a1 1 0 00-.26.45l-1.17 4.27a1 1 0 001.22 1.22l4.27-1.17a1 1 0 00.45-.26l10-10a2 2 0 000-2.83zm-2.83 1.41L15.41 4.58 16 4a1 1 0 011.41 0l1.29 1.29a1 1 0 010 1.41zM5.24 15.66l1.92.51.51 1.92-2.43-2.43z"
              ></path>
            </svg>
          </button>
          <button class="text-white p-2 hover:bg-gray-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M17 10h-2v8H9v-8H7v-2h3V6a3 3 0 016 0v2h3zm-5-4a1 1 0 00-1 1v2h2V7a1 1 0 00-1-1zM4 20h16v2H4z"
              ></path>
            </svg>
          </button>
          <button class="text-white p-2 hover:bg-gray-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M3 3h8v8H3zm2 2v4h4V5zm8 6h8v8h-8zm2 2v4h4v-4zm-2-12h8v8h-8zm2 2v4h4V3zm-12 8h8v8H3zm2 2v4h4v-4z"
              ></path>
            </svg>
          </button>
          <button class="text-white p-2 hover:bg-gray-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M18 8h3a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h3V6a6 6 0 1112 0v2zM8 6v2h8V6a4 4 0 00-8 0zm-4 5v9h16v-9zm7 3h2v3h-2z"
              ></path>
            </svg>
          </button>
        </nav>

        <!-- Main Content -->
        <div class="container mx-auto p-8 bg-gray-100  relative">
          <!-- Section Label -->
          <div
            class="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-gray-500"
          >
            Section {{ i + 1 }}
          </div>

          <!-- Content Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ml-12">
            <!-- Text Content -->
            <div class="space-y-6 col-span-2">
              <div class="space-y-2">
                <h1 class="text-4xl font-normal">{{ data.title }}</h1>
                <p class="text-lg leading-relaxed">
                  {{ data.desc }}
                </p>
              </div>
            </div>

            <!-- Red Image Section -->
            <div class=" rounded-lg  ">
              <img
                src="{{ data.bgImage }}"
                class="w-56 h-full object-cover"
                alt="Poster {{ i + 1 }}"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PreviewExhibitionComponent {
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

  constructor(private fb: FormBuilder, private router: Router) {
    this.exhibitionForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      coverImage: [null],
    });
  }

  // Trigger the file input
  triggerFileInput() {
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
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

  onSubmit() {
    this.router.navigate(['/view-ex']);
    if (this.exhibitionForm.valid) {
      //this.router.navigate(['/preview-ex']);
      console.log('Form Data:', this.exhibitionForm.value);
      console.log('Selected File:', this.selectedFile);
    }
  }

  Section = [
    {
      title: 'lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
      bgImage: 'assets/image/img.png',
    },
    {
      title: 'lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
      bgImage: 'assets/image/img.png',
    },
    {
      title: 'lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
      bgImage: 'assets/image/img.png',
    },
    {
      title: 'lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
      bgImage: 'assets/image/img.png',
    },
    {
      title: 'lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
      bgImage: 'assets/image/img.png',
    },
  ];
}
