import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  connections = [
    { id: 'piped-water-dwelling', value: 'Piped water into a dwelling (CMWSSB)', label: 'Piped water into a dwelling (CMWSSB)' },
    { id: 'piped-water-plot', value: 'Piped water into Plot (CMWSSB)', label: 'Piped water into Plot (CMWSSB)' },
    { id: 'mobile-water-tank', value: 'Mobile Water Tank (CMWSSB)', label: 'Mobile Water Tank (CMWSSB)' },
    { id: 'public-tap', value: 'Public Tap/ Standpipe (Connected to CMWSSB)', label: 'Public Tap/ Standpipe (Connected to CMWSSB)' }
  ];

  showHelloWorld = false;

  updateSelection() {
    // Check if any checkbox is checked
    this.showHelloWorld = this.connections.some(connection => {
      const checkbox = document.getElementById(connection.id) as HTMLInputElement;
      return checkbox.checked;
    });
  }
}