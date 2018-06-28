import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryInvestimentoService implements InMemoryDbService {
  createDb() {
    let investimentos = [
      {
        nome: "CDI X", taxa: "12,0%"
      },
      {
        nome: "CDB Y", taxa: "14,0%"
      },
      {
        nome: "DI M", taxa: "13,0%"
      },
      {
        nome: "DI K", taxa: "12,0%"
      },
      {
        nome: "CDI Z", taxa: "11,0%"
      },
      {
        nome: "CDB Q", taxa: "17,0%"
      }
    ];
    return {investimentos};
  }
}
