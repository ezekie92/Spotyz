import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBkAdOXmmdgu20-31pF6nQPrChRIswSr9vC_hqWAlIjA3vPERTRMKyzZ_MUWSfzYCMKWWdNPp8c3h3BHBU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(artist: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBkAdOXmmdgu20-31pF6nQPrChRIswSr9vC_hqWAlIjA3vPERTRMKyzZ_MUWSfzYCMKWWdNPp8c3h3BHBU'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {headers});
  }

}
