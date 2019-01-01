import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
  styles : [`
  .online{
    color : green;
  }
  `]
})
export class ServerComponent {
  serverId : number = 10;
  serverStatus : string = 'offline';
  
  getServerStatus(){
    setTimeout(() =>{
      this.serverStatus = 'online'
 
    }, 3000)
  } 
}
