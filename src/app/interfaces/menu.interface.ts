
import { Invoker } from './invoker.interface';
import { Path } from './path.interface';
import { SubMenu } from './submenu.interface';

export interface Menu {
  t: string;
  target: string | null;
  subMenus: SubMenu[];
  bulkOperations: any[];
  path: Path;
  invokers: Invoker[];
  imperativeInvoker: any | null;
}
