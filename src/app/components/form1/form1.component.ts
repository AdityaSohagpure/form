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

  connections1 = [
    { id: 'Borewell', value: 'Borewell', label: 'Borewell' },
    { id: 'Protected open well', value: 'Protected open well', label: 'Protected open well' },
    { id: 'Rain-water', value: 'Rainwater', label: 'Rainwater' }
  ];

  showHelloWorld1 = false;

  updateSelection1() {
    this.showHelloWorld1 = this.connections1.some(connection1 => {
      const checkbox = document.getElementById(connection1.id) as HTMLInputElement;
      return checkbox.checked;
    })
  }

  connections2 = [
    {id:'Water Can-Bottled Water-Bubble Top', value:'Water Can/ Bottled Water/ Bubble Top', label: 'Water Can/ Bottled Water/ Bubble Top'},
    {id: 'Private Tanker-Truck', value: 'Private Tanker - Truck', label: 'Private Tanker - Truck'}
  ];

  showHelloWorld2 = false;

  updateSelection2  () {
    this.showHelloWorld2 = this.connections2.some(connection2 => {
      const checkbox = document.getElementById(connection2.id) as HTMLInputElement;
      return checkbox.checked;
    })
  }

  connections3 = [
    {id: 'STP', value:'STP', label: 'STP'},
    {id: 'Recycle or Reuse Water (Non-RO)', value: 'Recycle or Reuse Water (Non-RO)', label: 'Recycle or Reuse Water (Non-RO)'},
    {id: 'Grey Water Treatment Plant', value: 'Grey Water Treatment Plant', label: 'Grey Water Treatment Plant'},
    {id: 'Black Water Treatment Plant', value: 'Black Water Treatment Plant', label: 'Black Water Treatment Plant'},
    {id: 'Both Grey and Black Water', value: 'Both Grey and Black Water', label: 'Both Grey and Black Water'},
  ];

  showHelloWorld3 = false;

  updateSelection3  () {
    this.showHelloWorld3 = this.connections3.some(connection3 => {
      const checkbox = document.getElementById(connection3.id) as HTMLInputElement;
      return checkbox.checked;
    })
  }
}