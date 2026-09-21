import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  readonly words = ['Developer', 'Engineer', 'Creator', 'Problem Solver'];
  currentWordIndex = 0;
  displayedWord = this.words[0];

  ngOnInit(): void {
    this.startWordRotation();
  }

  private startWordRotation(): void {
    setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.displayedWord = this.words[this.currentWordIndex];
    }, 1800);
  }
}
