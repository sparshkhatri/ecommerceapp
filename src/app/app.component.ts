import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommerceapp';
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (!user) return; 

      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return; 

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }

  ngOnInit(){
    var dynamicFrontJS = [
      "assets/js/jquery.min.js",
      "assets/js/jquery-migrate-3.0.1.min.js",
      "assets/js/popper.min.js",
      "assets/js/bootstrap.min.js",
      "assets/js/jquery.easing.1.3.js",
      "assets/js/jquery.waypoints.min.js",
      "assets/js/jquery.stellar.min.js",
      "assets/js/owl.carousel.min.js",
      "assets/js/jquery.magnific-popup.min.js",
      "assets/js/aos.js",
      "assets/js/jquery.animateNumber.min.js",
      "assets/js/bootstrap-datepicker.js",
      "assets/js/scrollax.min.js",
      //"assets/js/google-map.js",
      "assets/js/main.js",
      //"https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"
    ];

    for (var i = 0; i < dynamicFrontJS.length; i++) {
      this.appendJS(dynamicFrontJS[i]);
    }

  }

  appendJS(path) {
    let jsNode = document.createElement('script');
    jsNode.type = 'text/javascript';
    jsNode.src = path;
    jsNode.async = false;
    jsNode.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(jsNode);
  }


}
