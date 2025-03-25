import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  listAllTasks() {
    return [
      { id: 1, title: 'Comprar Pão ', description: 'Pão doce' }
    ];

  }

}
