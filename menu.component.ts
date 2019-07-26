import { Component, OnInit } from '@angular/core';
import { Tool, TOOLS } from './menu';
import { System } from './system';
import { SYSTEMS } from './pool-system'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menu_name = 'tool box';

  tools = TOOLS;

  selectedTool: Tool = {id: 0, name: 'none'};
  Selecting = false ;

  systems = SYSTEMS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(tool: Tool): void{
    this.Selecting = ! this.Selecting;
    if (this.Selecting){
      this.selectedTool = tool;
    }
  }
}
