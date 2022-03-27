import { Component, OnInit } from '@angular/core';
import { Memes } from '../classes/memes';
import { MemeService } from '../services/meme.service';

@Component({
  selector: 'app-memecreator',
  templateUrl: './memecreator.component.html',
  styleUrls: ['./memecreator.component.css']
})
export class MemecreatorComponent implements OnInit {

  lstMemes:Memes[];
  constructor(private _memeservice : MemeService){
 
  }

  ngOnInit(){
    this._memeservice.getMemes()
    .subscribe(
      
      data =>{
        this.lstMemes = data
      }
     
    );

}
}
