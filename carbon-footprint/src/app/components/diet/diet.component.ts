import { Component, Input } from '@angular/core';
import { FootprintResult, Models } from 'src/app/models/models';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss']
})
export class DietComponent {
  @Input('nav') nav:any
  data = Models

  form = new FormGroup({
    consumerType : new FormControl('',[])
  })

  constructor(private toastr:ToastrService){}

  calculate(){
    var footprint = 0.00

    if(this.form.get('consumerType')!.value == ""){
      this.toastr.error("Please select a valid consumer type!!")
      return
    }

    switch(this.form.get('consumerType')!.value){
      case "Medium Meat Eater":
        footprint = 0.73 * 0.192
        break;
      case "Heavy Meat Eater":
        footprint = 0.73 * 0.245
        break;
      case "Vegetarian & Pescatarian":
        footprint = 0.73 * 0.13
        break;
      case "Vegan":
        footprint = 0.73 * 0.1
        break;
      case "Light Meat Eater":
        footprint = 0.73 * 0.16
        break;

    }

    var result = new FootprintResult();
    result.title = "Diet"
    result.result = footprint

    var footprintData = localStorage.getItem("result")

    var footprintNewData = new Array<FootprintResult>();

    if(footprintData != null){
      footprintNewData = JSON.parse(footprintData) as Array<FootprintResult>
    }

    footprintNewData.push(result)

    localStorage.setItem("result", JSON.stringify(footprintNewData))

    this.toastr.success("Your carbon footprint was calculated successfully!!")

    this.nav.select(3)
  }
}
