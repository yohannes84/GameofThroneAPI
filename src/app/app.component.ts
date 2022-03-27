import { Component } from '@angular/core';
import { Memes } from './classes/memes';
import { MemeService } from './services/meme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MemeCreator';
  constructor(private _memeservice : MemeService){
 
  }

  lstMemes:Memes[];

  ngOnInit(){
    this._memeservice.getMemes()
    .subscribe(
      
      data=>{
        this.lstMemes = data
      }
     
    );

    

  }
}
