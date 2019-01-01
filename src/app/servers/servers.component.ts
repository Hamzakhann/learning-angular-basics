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
  serverCreated = false;
  servers = ['hello' , 'handi']

  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onServerCreated(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationMethod = 'Server is now Online ' + this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName =  (<HTMLInputElement>event.target).value;
  }
}
