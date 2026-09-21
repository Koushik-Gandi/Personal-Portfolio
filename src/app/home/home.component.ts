import { Component } from '@angular/core';
import { PortfollioServiceService } from '../portfollio-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('450ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {

  details: any = { name: "", bio: "", linkedInUrl: "", email: "", github: "" };

  constructor(private service: PortfollioServiceService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.service.getProfileData().subscribe((response) => {
      this.details = response[0];
    });
  }

  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
