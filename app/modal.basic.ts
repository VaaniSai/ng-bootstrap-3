import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

class UserData {
  constructor(
    public userName: string,
    public userEmail: string,
  ) {  }
}

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: 'app/templates/modal-basic.html'
})
export class NgbdModalBasic {
  closeResult: string;

  constructor(private modalService: NgbModal) {

  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  model = new UserData('','');

  submitted = false;
  active = true;
  onSubmit(submittedData) { 
     this.submitted = true;
     console.log('submitted data', submittedData) 
   }

}
