import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  results = '';
  submitted = false

  click(): void {
    console.log('Clicking...')
  }

  async onSubmit(formValue: NgForm): Promise<void> {
    this.submitted = true
    const options = {
      method: 'GET',
      url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${formValue.value.givenName}+${formValue.value.familyName}`,
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': 'ba126a33bcmshd223f0fa99deabcp1c50c4jsn0990b1c2c7af'
      }
    }
    await axios.request(options).then(response => {
      console.log(response.data)
      this.results = JSON.stringify(response.data)
    }).catch(err => {
      console.error(err)
    })
    console.log(formValue.value)
    console.log(formValue.valid)
  }

}
