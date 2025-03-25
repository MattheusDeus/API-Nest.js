import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  findAll() {
    return [
      { id: 1, title: 'Comprar Pão ', description: 'Pão doce' }
    ];

  }

  findOne(id: string) {
    return "Buscar tarefa com id " + id;
  }

  create(body: any) {
    console.log(body);
    return "Criar tarefa com os dados " + body;
  }


}
