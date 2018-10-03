import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Record } from './Model/record';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const records = [
      { id: 11, f1: 'record1-f1', f2: 'record1-f2', f3: 'record1-f3' },
      { id: 12, f1: 'record2-f1', f2: 'record2-f2', f3: 'record2-f3'},
      { id: 13, f1: 'record3-f1', f2: 'record3-f2', f3: 'record3-f3' },
      { id: 14, f1: 'record4-f1', f2: 'record4-f2', f3: 'record4-f3' },
      { id: 15, f1: 'record5-f1', f2: 'record5-f2', f3: 'record5-f3' },
      { id: 16, f1: 'record6-f1', f2: 'record6-f2', f3: 'record6-f3' },
      { id: 17, f1: 'record7-f1', f2: 'record7-f2', f3: 'record7-f3'  },
      { id: 18, f1: 'record8-f1', f2: 'record8-f2', f3: 'record8-f3'  },
      { id: 19, f1: 'record9-f1', f2: 'record9-f2', f3: 'record9-f3'  },
      { id: 20, f1: 'record10-f1', f2: 'record10-f2', f3: 'record10-f3'  }
    ];
    return {records};
  }

  genId(records: Record[]): number {
    return records.length > 0 ? Math.max(...records.map(record => record.id)) + 1 : 11;
  }
}
