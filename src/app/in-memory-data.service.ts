import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Mrs. Mean'},
      {id: 13, name: 'Mr. Doom'},
      {id: 14, name: 'Doom Guy'},
      {id: 15, name: 'No Guy Buy Guy'},
      {id: 16, name: 'Mr. Credible'},
      {id: 17, name: 'Admiral Akbar'},
      {id: 18, name: 'The Trap'},
      {id: 19, name: 'Hum Darkmonth'},
      {id: 20, name: 'The Other One'},
    ];
    return {heroes};
  }

  constructor() { }
}
