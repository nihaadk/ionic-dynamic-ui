import { inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DynamicPage } from '../dynamic/dynamic.page';
import { SubMenu } from '../interfaces/submenu.interface';

@Injectable({
  providedIn: 'root',
})
export class DynamicRouterService {
  #router = inject(Router);

  addNewRoutes(subMenus: SubMenu[]): void {
    const dynamicRoutes: Route[] = this.mapRouteArray(subMenus);
    this.addToRouteConfig(dynamicRoutes);
  }

  private mapRouteArray(subMenus: SubMenu[]): Route[] {
    return subMenus.map((subMenu) => ({
      path: subMenu.name.toLocaleLowerCase(),
      component: DynamicPage,
      data: { invokers: subMenu.invokers },
    }));
  }

  private addToRouteConfig(dynamicRoutes: Route[]): void {
    dynamicRoutes.forEach((route) => {
      if (!this.#router.config.find((r) => r.path === route.path)) {
        this.#router.config.push(route);
      }
    });
  }
}
