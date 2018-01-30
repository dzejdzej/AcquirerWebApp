import { AbstractControl, ValidationErrors } from "@angular/forms";

export class JmbgValidators {

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true }; 
        
            return null; 
    }



    static proveraContrBr(control: AbstractControl): ValidationErrors | null {

           

            if((control.value as string) != null && (control.value as string).length == 13) {
                let konCif = "765432765432";
                let raz = 0;
        
                for (let i = 0; i <= 12; i++) {
                    raz = raz + Number((control.value as string).substr(i, 1)) * Number(konCif.substr(i, 1));
                    // console.log('JMBG');
                    // console.log((control.value as string).substr(i, 1));
                    // console.log('BROJ');
                    // console.log(konCif.substr(i, 1));
                }
    
                // console.log(raz);
                raz = 11 - (raz % 11);
                // console.log('RAZ');
                // console.log(raz);
                let num = Number((control.value as string).substr(12, 1));
                // console.log('NUM');
                // console.log(num);
                if (raz != 10 && ((raz % 11) === num)) {
                    // console.log("TO JE TO");
                    return null;
                }
                else {
                    return { proveraContrBr: true }; 
                }   
            }  
            else {
                return null; 
            }     
    }
        

}




























