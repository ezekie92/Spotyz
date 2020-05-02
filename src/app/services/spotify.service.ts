import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD_phHppAylQXHWQ3KK7dFzb_5GPpNl97UILn7SwMokCz65DqgYChbpWg30d-DHCDFPF5ZYXEE2oPzhJ7c'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
            .pipe(map((data: any) => data.albums.items));
  }

  getArtist(artist: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD_phHppAylQXHWQ3KK7dFzb_5GPpNl97UILn7SwMokCz65DqgYChbpWg30d-DHCDFPF5ZYXEE2oPzhJ7c'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {headers})
            .pipe(map((data: any) => data.artists.items));
  }

}
