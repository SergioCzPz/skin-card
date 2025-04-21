import { ChangeDetectionStrategy, Component } from '@angular/core';
import { members } from '@constants/constants';
import { BtnSecondaryComponent } from '@shared/components/btn-secondary/btn-secondary.component';
import { TeamCardComponent } from '@shared/components/team-card/team-card.component';

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
export class TeamComponent {
  public members = members;
}
