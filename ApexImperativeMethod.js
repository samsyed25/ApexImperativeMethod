/* eslint-disable no-unused-vars */
import { LightningElement } from 'lwc';
import getAllCases from '@salesforce/apex/caseControllerLwc.getAllCases';

export default class ApexImperativeMethod extends LightningElement {
    subject;
    records;
    errors;

    handleChange(event){
        const sVal = event.target.value;
        this.subject=sVal;

       /*getAllCases({subject:sVal})
       .then(result=>{
        console.log('case records',result);
        this.records = result;
       })
       .catch(error=>{
        console.log('error',error);
        this.error=error;
       })*/
    }

    handleLoad(){
        getAllCases({subject:this.subject})
       .then(result=>{
        console.log('case records',result);
        this.records = result;
       })
       .catch(error=>{
        console.log('error',error);
        this.error=error;
       })
    }
    /*
        handleLoad(){
	getAllCases({
	subject : this.subject
})
.then(result==>{this.data = result;})
.catch(error==>{this.error = error;})
}

    */
}
