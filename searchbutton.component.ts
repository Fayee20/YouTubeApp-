import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtubeservice.service';


@Component({
  selector: 'app-searchbutton',
  templateUrl: './searchbutton.component.html',
  styleUrls: ['./searchbutton.component.css']
})
export class SearchbuttonComponent {
  searchQuery: string = '';

  constructor(private youtubeService: YoutubeService, private router: Router) {}

  searchVideos() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }
}