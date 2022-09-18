import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: 
   `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <div class="container-fluid">
   <a class="navbar-brand" href="#">Top Restaurants</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarScroll">
     <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
       <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Booking</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Tips</a>
       </li>
     </ul>
     <form class="d-flex">
       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
       <button class="btn btn-outline-success" type="submit">Search</button>
     </form>
   </div>
 </div>
</nav>`,

styles: [ '.navbar-brand { font-family: "Times New Roman",serif; }' ],
})

export class HeaderComponent implements OnInit {

  
 

  constructor() { }

  ngOnInit(): void {}

}
