import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { members } from '@constants/constants';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';
import { TeamCardComponent } from '@shared/components/team-card/team-card.component';
import { fromTo } from 'src/app/shared/animations/fromTo.animation';
import { staggerAnimation } from 'src/app/shared/animations/stagger.animation';

@Component({
  selector: 'app-team',
  imports: [TeamCardComponent, BtnSecondaryComponent],
  templateUrl: './team.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  public members = members;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    fromTo('#team-section', 'top bottom');
    staggerAnimation('#team-card', '#team-section', 'top center');
  }
}
