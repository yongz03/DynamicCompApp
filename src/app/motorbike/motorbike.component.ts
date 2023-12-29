import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'motorbike',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motorbike.component.html',
  styleUrls: ['./motorbike.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotorbikeComponent {
  @Input() title = '';
}