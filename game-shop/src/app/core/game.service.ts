import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGame } from './interfaces/game';

const apiUrl = environment.apiUrl;

@Injectable()
export class GameService {

  constructor(private http: HttpClient) { }

  loadGameList$(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${apiUrl}/data/catalog`);
  }

  //body type is any <- fix if problem occurs
  addGame$(body: any): Observable<IGame> {
    const token = sessionStorage.getItem('accessToken');

    if (token) {
      return this.http.post<IGame>(`${apiUrl}/data/catalog`, body, { headers: new HttpHeaders({ 'X-Authorization': token }) })
    } else {
      return this.http.post<IGame>(`${apiUrl}/data/catalog`, body)
    }
  }

  loadGameById$(gameId: any): Observable<IGame> {
    return this.http.get<IGame>(`${apiUrl}/data/catalog/${gameId}`)
  }

  editGameById$(gameId: any, body: any): Observable<IGame> {
    const token = sessionStorage.getItem('accessToken');

    if (token) {
      return this.http.put<IGame>(`${apiUrl}/data/catalog/${gameId}`, body, { headers: new HttpHeaders({ 'X-Authorization': token }) });
    } else {
      return this.http.put<IGame>(`${apiUrl}/data/catalog/${gameId}`, body)
    }
  }

  removeGame$(gameId: any) {
    const token = sessionStorage.getItem('accessToken');
    return this.http.delete(`${apiUrl}/data/catalog/${gameId}`, { headers: new HttpHeaders({ 'X-Authorization': token }) });

  }

  likeGame$(gameId: any) {
    const token = sessionStorage.getItem('accessToken');
    return this.http.get<IGame>(`${apiUrl}/data/catalog/like/${gameId}`, { headers: new HttpHeaders({ 'X-Authorization': token }) });

  }

  buyGame(gameId: any) {
    const token = sessionStorage.getItem('accessToken');
    return this.http.get<IGame>(`${apiUrl}/data/catalog/buy/${gameId}`, { headers: new HttpHeaders({ 'X-Authorization': token }) });


  }
}
