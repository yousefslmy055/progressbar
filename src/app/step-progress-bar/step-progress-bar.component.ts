import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss']
})
export class StepProgressBarComponent implements OnInit {
  public step : string = 'step1';

  constructor() { }

  ngOnInit() {
  }
  onProgress() {
    console.log(this.step);
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    if (this.step === 'step1') {
      this.step = 'step2';
      console.log(this.step);
      step1.classList.remove("is-active-record");
      step1.classList.add("is-complete");
      step2.classList.add("is-active-record");
    }
    else if (this.step === 'step2') {
      this.step = 'step3';
      step2.classList.remove("is-active-record");
      step2.classList.add("is-complete");
      step1.classList.remove("is-active-record");
      step1.classList.add("is-complete");
      step3.classList.add("is-active-record");

    } else if (this.step === 'step3') {
      this.step = 'step4';
      step3.classList.remove("is-active-record");
      step3.classList.add("is-complete");
      step4.classList.add("is-active-record");

    } else if (this.step === 'step4') {
      this.step = 'complete';
      step4.classList.remove("is-active-record");
      step4.classList.add("is-complete");

    } else if (this.step === 'complete') {
      this.step = 'step1';
      step4.classList.remove("is-complete");
      step4.classList.remove("is-active-record");
      step3.classList.remove("is-complete");
      step3.classList.remove("is-active-record");
      step2.classList.remove("is-complete");
      step2.classList.remove("is-active-record");
      step1.classList.remove("is-complete");
      step1.classList.add("is-active-record");
    }

  }

}
