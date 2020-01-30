import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts =[
    { postId: 1, postTitle: "Lorem ipsum dolor sit amet, consectetur", isExpanded: true, postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { postId: 2, postTitle: "Lorem ipsum dolor sit amet, consectetur", isExpanded: true, postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { postId: 3, postTitle: "Lorem ipsum dolor sit amet, consectetur", isExpanded: true, postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { postId: 4, postTitle: "Lorem ipsum dolor sit amet, consectetur", isExpanded: true, postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { postId: 5, postTitle: "Lorem ipsum dolor sit amet, consectetur", isExpanded: true, postContent: "This is a simple post 3." }
  ]
  activeIds = [];

  advs=[
    { adId: 1, adTitle: "Learn Angular", adContent: "This is a simple ad.", adLink: "apple" },
    { adId: 2, adTitle: "Restaurant", adContent: "This is a simple ad 2.", adLink: "google" },
    { adId: 3, adTitle: "Honda", adContent: "This is a simple ad 23.", adLink: "facebook" }
  ]; 

  constructor() { 
    for (let index = 1; index <= this.posts.length; index++) {
      this.activeIds.push('panel-'+index);
    }
  }

  ngOnInit() {
  }

  toggleExpanded(post){
    if(post.isExpanded){
      post.isExpanded = false;
    }
    else{
      post.isExpanded = true;
    }
  }
}
