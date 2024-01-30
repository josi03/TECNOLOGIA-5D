import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBtvTYFEDl1ULDDb5j3rnhQS06rcW0Jp7QW9aTx2xJ1xruTVQCEN2Q3Uo1kxwT8EO9oQu5C5U_cFTklKkwYsSjEqOTVHjj_swtbfkrisIxtA30dipyTrUZK1PQTIEJB8r4I4T8iOReXga0awUyOEB9sYv2uCyKakMFZuy1uIeuiGHfwHT6-0ZSZNbk'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}