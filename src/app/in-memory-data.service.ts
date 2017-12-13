import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Atleta } from './model/atleta';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const atletas: Atleta[] = [
        new Atleta(1, 'Luca', 10),
        new Atleta(2, 'Ana', 9),
        new Atleta(1, 'Arthur', 9)
      ]
      return {atletas};
  }
}