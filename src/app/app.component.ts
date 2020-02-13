import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  source: any;
  classList = [];

  getStyle() {
    for (let i = 0; i < 5; i++) {
      let className = document.getElementById("style-" + i);
      if (className) {

        this.classList.push(window.getComputedStyle(className).color);
      }
    }
  }
}
