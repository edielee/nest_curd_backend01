import { Injectable } from '@nestjs/common';
import { Board, BoardStatus, CreateDto } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    const test = '123';
    console.log(test);
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);

    //console.log(this.boards);
    return board;
  }

  /*createBoard({ title, description }: CreateDto) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);

    //console.log(this.boards);
    return board;
  }*/

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }
}
