import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  key = { headers: {'x-rapidapi-key': '665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093'}};
  dataEmitter = new EventEmitter();
  constructor(private http: HttpClient) { }

  getPlayers() {
    const url = 'https://free-nba.p.rapidapi.com/players';
    this.http.get(url, this.key).toPromise()
      .then(( response: any ) => response.data)
      .then(data => this.dataEmitter.emit(data));
  }

  getTeams() {
    const url = '';
    this.http.get(url, this.key).toPromise()
      .then((response: any) => response.data);
  }
}
