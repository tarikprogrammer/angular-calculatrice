import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    calcVal:number=0;
    value:string='NoValue';
    FirstNumber:number=0;
    SecondNumber:number=0;
    funcT:string='noFunction';
    OnclickValue(val:string,type:any){
      if(type=='number'){
        this.OnNumberClick(val);
      }else if(type=='function'){
        this.OnFunctionClick(val);
      }
    }

    OnNumberClick(val:string){
        if(this.value!='NoValue'){
           this.value+=val;
        }else{
          this.value=val;
        }
        this.calcVal=parseFloat(this.value);
    }


    OnFunctionClick(val:string){
      if(val=='delete'){
        this.OnDelete();
      }
      else if(val=='AC'){
        this.OnClearAll()
      }
      else if(this.funcT=='noFunction'){
        this.FirstNumber=this.calcVal;
        this.calcVal=0;
        this.funcT=val;
        this.value='NoValue';
       }
       else if(this.funcT!='noFunction'){
        this.SecondNumber=this.calcVal;
         this.onCalcule(val);
       }
    }
    onCalcule(val:string){
       if(this.funcT=='+'){
        const total=this.FirstNumber + this.SecondNumber;
        this.calcVal=total;
        this.FirstNumber=total;
        this.SecondNumber=0;
        this.value='NoValue'
        this.funcT=val;
        if(val=='='){
          this.funcT='noFunction';
          this.calcVal=total;
        }
       }
       else if(this.funcT=='*'){
        const total=this.FirstNumber + this.SecondNumber;
        this.calcVal=total;
        this.FirstNumber=total;
        this.SecondNumber=0;
        this.value='NoValue';
        this.funcT=val;
        if(val=='='){
          this.funcT='noFunction';
          this.calcVal=total;
        }

       }
       else if(this.funcT=='-'){
        const total=this.FirstNumber - this.SecondNumber;
        this.calcVal=total;
        this.FirstNumber=total;
        this.SecondNumber=0;
        this.value='NoValue';
        this.funcT=val;
        if(val=='='){
          this.funcT='noFunction';
          this.calcVal=total;
        }

       }
       else if(this.funcT=='/'){
        const total=this.FirstNumber / this.SecondNumber;
        this.calcVal=total;
        this.FirstNumber=total;
        this.SecondNumber=0;
        this.value='NoValue';
        this.funcT=val;
        if(val=='='){
          this.funcT='noFunction';
          this.calcVal=total;
        }

       }
    }
    OnClearAll(){
      this.FirstNumber=0;
      this.SecondNumber=0;
      this.calcVal=0;
      this.value='NoValue';
      this.funcT='noFunction';
    }
    OnDelete(){
     
    }
}
