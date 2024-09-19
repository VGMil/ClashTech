import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HeroService } from '../../core/services/heroService/hero.service';


export const heroSelectedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const heroService = inject(HeroService);
  if (heroService.getHeroSelected()) {
    return true;
  }
  console.log("No has seleccionado un heroe");
  router.navigate(['/choice-hero']);
  return false;
};

export const heroNoSelectedGuard: CanActivateFn = (route, state) => {
  const heroService = inject(HeroService);
  const router = inject(Router);
  if (heroService.getHeroSelected()) {
    console.log("Ya has seleccionado un heroe");
    router.navigate(['./dashboard']);
    return false;
  }
  return true;
};