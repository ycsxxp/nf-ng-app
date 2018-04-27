import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-policy-reputation-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public rangeValue = [2, 4]
  public marks = { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }
  public enabled = false
  public enable_web = false
  
  enable_web_onChange(value) {
    let offsetMin = this.rangeValue[0] * 20
    let offsetMax = this.rangeValue[1] * 20
    if (value) {
      this.renderer.setElementStyle(this.sliderDiv['slider'].nativeElement.querySelector('div.ant-slider-rail'), 'backgroundImage', 'linear-gradient(to right, #a5d770 '+offsetMin+'%, #f1eb6b '+offsetMin+'%, #f1eb6b '+offsetMax+'%, #ff5252 '+offsetMax+'%, #ff5252 100%)')
    } else {
      this.renderer.setElementStyle(this.sliderDiv['slider'].nativeElement.querySelector('div.ant-slider-rail'), 'backgroundImage', '')
    }
  }

  onChange(value) {
    let offsetMin = value[0] * 20
    this.renderer.setElementStyle(this.sliderDiv['slider'].nativeElement.querySelector('div.ant-slider-rail'), 'backgroundImage', 'linear-gradient(to right, #a5d770 '+ offsetMin +'%, #ff5252 '+ offsetMin +'%, #ff5252 100%)')
  }

  @ViewChild('nzSlider') private sliderDiv: ElementRef

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
    
  }

  ngOnInit() {
    // 绿色 #a5d770 红色 #ff5252
    // 绿色 #48c35d 红色 #cc2e2f
    if (this.enable_web) {
      let offsetMin = this.rangeValue[0] * 20
      this.renderer.setElementStyle(this.sliderDiv['slider'].nativeElement.querySelector('div.ant-slider-rail'), 'backgroundImage', 'linear-gradient(to right, #a5d770 '+ offsetMin +'%, #ff5252 '+ offsetMin +'%, #ff5252 100%)')
    }
  }
  ngAfterViewInit() {
    // this.greetDiv.nativeElement.style.backgroundColor  = 'red';
     // console.log(this.sliderDiv.nativeElement)
  }

}
