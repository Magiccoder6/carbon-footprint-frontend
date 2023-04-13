import { Component, Input } from '@angular/core';
import { FootprintResult, Models } from '../../models/models';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-private-vehicle',
  templateUrl: './private-vehicle.component.html',
  styleUrls: ['./private-vehicle.component.scss']
})
export class PrivateVehicleComponent {
  @Input('nav') nav:any

  vehicleData = Models

  class1MPG = 25

  class2MPG = 15

  class3MPG = 10

  motorcycleMPG = 30

  footprint = 0.00

  public form = new FormGroup({
    vehicleClass : new FormControl('',[]),
    fuelType : new FormControl('',[]),
    motorcycleClass : new FormControl('',[]),
    distance : new FormControl(0,[]),
    years : new FormControl(1,[]),
  })

  constructor(private toastr:ToastrService){}

  calculate(){
    var data = this.form.value

    if(this.form.get('fuelType')?.value == ''){
      this.toastr.error("Please select a fuel type")
      return
    }
    if(this.form.get('years')?.value == 0){
      this.toastr.error("Please select atleast 1 year")
      return
    }

    if(this.form.get('distance')!.value == 0){
      this.toastr.error("Distance travel must be greater than 0!")
      return
    }


    if(this.form.get('vehicleClass')?.value == "CLASS1"){

      switch(this.form.get('fuelType')!.value){
        case "PETROL":
          this.footprint += (this.form.get('distance')!.value!/this.class1MPG) * 0.14836
          break;
        case "DIESEL":
          this.footprint += (this.form.get('distance')!.value!/this.class1MPG) * 0.13721
          break;
        case "CNG":
          this.footprint += (this.form.get('distance')!.value!/this.class1MPG) * 0.178621
          break;
        case "LPG":
          this.footprint += (this.form.get('distance')!.value!/this.class1MPG) * 0.19754
          break;
        case "BATTERY":
          this.footprint += (this.form.get('distance')!.value!/this.class1MPG) * 0.06995
          break;
        default:
          break;
      }
    }else if(this.form.get('vehicleClass')?.value == "CLASS2"){
      switch(this.form.get('fuelType')!.value){
        case "PETROL":
          this.footprint += (this.form.get('distance')!.value!/this.class2MPG) * 0.18659
          break;
        case "DIESEL":
          this.footprint += (this.form.get('distance')!.value!/this.class2MPG) * 0.16637
          break;
        case "CNG":
          this.footprint += (this.form.get('distance')!.value!/this.class2MPG) * 0.15935
          break;
        case "LPG":
          this.footprint += (this.form.get('distance')!.value!/this.class2MPG) * 0.17847
          break;
        case "BATTERY":
          this.footprint += (this.form.get('distance')!.value!/this.class2MPG) * 0.06995
          break;
        default:
          break;
      }
    }else if(this.form.get('vehicleClass')?.value == "CLASS3"){
      switch(this.form.get('fuelType')!.value){
        case "PETROL":
          this.footprint += (this.form.get('distance')!.value!/this.class3MPG) * 0.27807
          break;
        case "DIESEL":
          this.footprint += (this.form.get('distance')!.value!/this.class3MPG) * 0.20419
          break;
        case "CNG":
          this.footprint += (this.form.get('distance')!.value!/this.class3MPG) * 0.2368
          break;
        case "LPG":
          this.footprint += (this.form.get('distance')!.value!/this.class3MPG) * 0.26606
          break;
        case "BATTERY":
          this.footprint += (this.form.get('distance')!.value!/this.class3MPG) * 0.06995
          break;
        default:
          break;
      }
    }else if(this.form.get('vehicleClass')?.value == "MOTORCYCLE"){
      this.footprint += (this.form.get('distance')!.value!/this.motorcycleMPG) * 0.11337
    }

    if(this.footprint == 0.00){
      this.toastr.error("Your carbon footprint calculation is 0.00 please enter valid values!!")
      return
    }

    var result = new FootprintResult();
    result.title = "Private Transportation"
    result.result = this.footprint

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
