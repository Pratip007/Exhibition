import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-exhibition',
  standalone: true,
  imports: [
    CommonModule],
  template: `
    <div class="max-w-6xl mx-auto p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">View Exhibition</h1>
        </div>
        <div>
          <button
            (click)="onSubmit()"
            class="px-6 py-2 mx-2  bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-300"
          >
            Edit
          </button>
        </div>
      </div>
    </div>


    <!-- Main Title Content -->
    <div class="container max-w-6xl  mx-auto  rounded-lg m-4  mb-16 pb-6 p-4   relative">
     <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ml-12">
          <!-- Text Content -->
          <div class="space-y-6 col-span-2">
            <div class="space-y-2">
              <h1 class="text-4xl font-normal">{{ ExTitle}}</h1>
              <p class="text-lg leading-relaxed">
                {{ ExDecs }}
              </p>
            </div>
          </div>

          <!-- Red Image Section -->
          <div class=" rounded-lg  ">
            <img
              src="{{ExImage}}"
              class="w-56 h-full object-cover"

            />
          </div>
        </div>

     </div>



    <div
      class=" max-w-5xl  mx-auto  rounded-lg m-4  mb-16 pb-4 "
      *ngFor="let data of Section; let i = index"
    >
      <!-- Main Section Content -->
      <div class="container mx-auto p-8 bg-gray-100  relative">
        <!-- Section Label -->
        <!-- <div
          class="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-gray-500"
        >
          Section {{ i + 1 }}
        </div> -->

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
  `,
  styles: ``,
})
export class ViewExhibitionComponent {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/preview-ex']);
  }






  readonly ExTitle: string = "Exhibition Title";

  readonly  ExDecs = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
  readonly  ExImage = "assets/image/image.png"

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
