import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-app',
  templateUrl: '/app/templates/index.html'
})
export class AppComponent { 

	  public alerts = [];

	  private backup;
	  closeResult: string;

	  constructor(private modalService: NgbModal) {


	    this.alerts.push({
	      id: 1,
	      type: 'success',
	      message: 'This is an success alert',
	    }, {
	      id: 2,
	      type: 'info',
	      message: 'This is an info alert',
	    }, {
	      id: 3,
	      type: 'warning',
	      message: 'This is a warning alert',
	    }, {
	      id: 4,
	      type: 'danger',
	      message: 'This is a danger alert',
	    });
	    this.backup = this.alerts.map((alert) => Object.assign({}, alert));

	  }

	  public closeAlert(alert) {
	    const index: number = this.alerts.indexOf(alert);
	    this.alerts.splice(index, 1);
	  }

	  public reset() {
	    this.alerts = this.backup.map((alert) => Object.assign({}, alert));
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

}
