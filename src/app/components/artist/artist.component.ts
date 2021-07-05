import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {

    this.loading = true;

    this.route.params.subscribe(params => {
      this.getArtist(params['id'])
    });
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.loading = true;

    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

}
