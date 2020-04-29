import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC2nxULWA0rElGdrEC4IHyzBGDfDYL0EeeWgbPuu8sKBFjZDvhLuNsHnzQPQBcUmllTdVpo2ppbU-RJTUY'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).subscribe(data => {
      console.log(data);
    });
  }

}
