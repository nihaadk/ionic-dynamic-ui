import { ShowTypeItem } from './show-type-item.interface';

export interface ShowType {
  t: string;
  name: string;
  items: ShowTypeItem[];
  maxHSize: number;
  maxVSize: number;
}
