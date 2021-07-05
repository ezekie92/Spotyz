import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCS-dZ7P02MlTn7DbgCCPiTOkhFzMker22DrkOUrMbsv6ryvVjwqa0ALDXIoI9wbHucAv5liERoY3rScnM'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => data.albums.items));
  }

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`).pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe(map((data: any) => data.artists.items));
  }

}
