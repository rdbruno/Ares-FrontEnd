import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

interface MenuData {
  routerLink: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public navData: MenuData[] = [];
  public menuIcon = 'menu';
  public isExpanded = false;

  mobileQuery: MediaQueryList;
  mediaSub: Subscription;
  deviceXs: boolean;

  private mobileQueryListener: () => void;

  constructor(
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public mediaObserver: MediaObserver
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
      if (this.deviceXs) {
        this.isExpanded = true;
      }
    });

    if (localStorage.getItem('Login') === 'Clinica') {
      this.navData = [
        { routerLink: 'servicos', icon: 'home', label: 'Serviços' },
        { routerLink: 'perfil', icon: 'manage_accounts', label: 'Perfil' }
      ]
    } else {
      this.navData = [
        { routerLink: 'servicos', icon: 'home', label: 'Serviços' }
      ]
    }

  }

  public changeIcon(): void {
    if (this.deviceXs) {
      if (this.menuIcon === 'menu') {
        this.menuIcon = 'menu_open';
      } else {
        this.menuIcon = 'menu';
      }
    } else {
      if (this.isExpanded) {
        this.menuIcon = 'menu_open';
      } else {
        this.menuIcon = 'menu';
      }
    }    
  }

  public logOut(): void {
    localStorage.clear();
    this.router.navigate(['acesso']);
  }

}
