import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-grilla-consulta',
  templateUrl: './grilla-consulta.component.html',
  styleUrls: ['./grilla-consulta.component.scss']
})
export class GrillaConsultaComponent implements OnInit {

  displayedColumns: string[] = [
    'circle', 'id', 'first-name', 'last-name', 'height-feets',
    'height-inches', 'weight-pounds', 'position'
  ];
  dataSource: any = new MatTableDataSource<Player>(DATA);

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getPlayers();
    this.apiService.dataEmitter.subscribe(data => this.dataSource = data);
  }

  setStyle(position: string): string {
    if (position === 'C') {
      return 'red';
    } else if (position === 'G') {
      return 'blue';
    } else if (position === 'F') {
      return 'yellow';
    } else if (position === 'C-F') {
      return 'purple';
    } else if (position === 'F-C') {
      return 'brown';
    } else if (position === 'G-F') {
      return 'green';
    }
    return 'grey';
  }
}
interface Player {
  id: number;
  first_name: string;
  last_name: string;
  height_feet: number;
  height_inches: number;
  weight_pounds: number;
  position: string;
}
const DATA: Array<Player> = [
  {id: null, first_name: null, last_name: null, height_feet: null, height_inches: null, weight_pounds: null, position: null}
];
