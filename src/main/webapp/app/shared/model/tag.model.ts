import { IEntry } from 'app/shared/model/entry.model';

export interface ITag {
  id?: number;
  name?: number;
  entries?: IEntry[];
}

export class Tag implements ITag {
  constructor(public id?: number, public name?: number, public entries?: IEntry[]) {}
}
