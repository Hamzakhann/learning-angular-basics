import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationMethod:string = 'Server is now offline';
  serverName = '';
  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onServerCreated(){
    this.serverCreationMethod = 'Server is now Online'
  }

  onUpdateServerName(event:Event){
    this.serverName =  (<HTMLInputElement>event.target).value;
  }
}
