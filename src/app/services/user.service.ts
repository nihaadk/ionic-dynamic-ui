import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoker } from '../interfaces/invoker.interface';
import { Menu } from '../interfaces/menu.interface';
import { Objlist } from '../interfaces/obj-list.interface';
import { SubMenu } from '../interfaces/submenu.interface';
import { DynamicRouterService } from './dynamic-router.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #dynamicRouterService = inject(DynamicRouterService);
  #httpClient = inject(HttpClient);

  subMenuNames: SubMenu[] = [];

  private url: string = `${environment.server}/rest2/sdapi/0.1`;

  getTasks(): Observable<Menu> {
    const url: string = `${this.url}/objects/USER_TASKS`;
    return this.#httpClient.get<Menu>(url).pipe(
      tap(menu => this.#dynamicRouterService.loadDynamicRoutes(menu.subMenus)),
      tap(value => console.log(value)),
    );
  }

  getObjectList(invoker: Invoker): Observable<Objlist> {
    const url: string = `${this.url}/invoke-method`;
    return this.#httpClient.put<Objlist>(url, invoker);
  }
}
