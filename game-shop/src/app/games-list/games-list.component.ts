import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit{

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGames().subscribe((games) =>{
      console.log(games);
      
    })
  }
}
