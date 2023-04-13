import { Component } from '@angular/core';
import { FootprintResult } from 'src/app/models/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  results: Array<FootprintResult> = []

  constructor(private toastr:ToastrService){
    this.viewResults()
  }

  viewResults(){
    var data = localStorage.getItem("result")

    if(data != null){
      this.results = JSON.parse(data) as Array<FootprintResult>
    }
  }

  removeRecord(record:FootprintResult){
    this.results.splice(this.results.indexOf(record), 1)

    localStorage.setItem("result", JSON.stringify(this.results))

    this.toastr.success("Item was removed successfully!!")
  }

  get getFootPrintTotal(){
    var total = 0;
    this.results.forEach((r, i)=>{
      total += (r.result * 2.2) //kg to lbs
    })

    return total
  }

}
