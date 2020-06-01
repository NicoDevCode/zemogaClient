import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  votosUp = 30;
  votosDown = 70;
  porcentUp = 30;
  porcentDown = 70;
  votos = 100;
  votoBool: boolean;
  constructor() { }

  ngOnInit() {
    document.getElementById("up-votes").style.width = `${this.porcentUp}%`;
    document.getElementById("down-votes").style.width = `${this.porcentDown}%`;
  }

  selectVoto = (voto) => {
      if (voto) {
        this.votoBool = true;
      } else {
        this.votoBool = false;
      }
  }

  votar = () => {
    if(this.votoBool != undefined){
      this.votos += 1;
      if(this.votoBool) {
        this.votosUp += 1;
        this.porcentUp = Math.round((this.votosUp/this.votos)*100);
        this.porcentDown = Math.round((this.votosDown/this.votos)*100);
        document.getElementById("up-votes").style.width = `${this.porcentUp}%`;
        document.getElementById("down-votes").style.width = `${this.porcentDown}%`;
        this.votoBool = undefined;
      } else {
        this.votosDown += 1;
        this.porcentUp = Math.round((this.votosUp/this.votos)*100);
        this.porcentDown = Math.round((this.votosDown/this.votos)*100);
        document.getElementById("up-votes").style.width = `${this.porcentUp}%`;
        document.getElementById("down-votes").style.width = `${this.porcentDown}%`;
        this.votoBool = undefined;
      }
    }  
  }


}
