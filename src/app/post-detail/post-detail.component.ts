import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post = [
    { 
      postId: 1, 
      postTitle: "Job is required for Prakash Acharya. The quick brown fox jumps over the lazy dogs.", 
      postContent: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ",
      comments: [
        { commentId: 1, username: 'prakash', commentContent: "Comment 1"},
        { commentId: 1, username: 'prakash', commentContent: "Comment 1"},
        { commentId: 1, username: 'prakash', commentContent: "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid"},
        { commentId: 4, username: 'pacharya', commentContent: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry"}
      ]
    
    }
  ]
  closeResult: string;
  currentRate: number = 5;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.post[0].comments.push({commentId: 5, username:'test',  commentContent: "Added"})
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log('ESC');
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log('background');
      return 'by clicking on a backdrop';
    } else {
      console.log('cross');
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
