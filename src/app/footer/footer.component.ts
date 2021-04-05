import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  showFullLocationDetails = false;
  locationDetails = 'Show Location Details'
  constructor() { }

  ngOnInit(): void {
  }

  showLocationDetails(){
    this.showFullLocationDetails = !this.showFullLocationDetails
    if(this.locationDetails === 'Show Location Details'){
      this.locationDetails = 'Hide Location Details'
    } else {
      this.locationDetails = 'Show Location Details'
    }
  }

}
