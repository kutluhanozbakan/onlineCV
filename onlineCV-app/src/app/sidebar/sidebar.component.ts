import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { sidebar } from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private alertify: AlertifyService,
    private http: HttpClient) { }
path = "http://localhost:3000/cvBilgileri"

cvBilgi: sidebar[] = []

  ngOnInit(): void {
    this.http.get<sidebar[]>(this.path).subscribe(data => {
      this.cvBilgi= data
    })
  }

}
