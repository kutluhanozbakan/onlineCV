import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { egitimBilgileri } from './container';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  
})
export class ContainerComponent implements OnInit {

  constructor(private alertify: AlertifyService,
              private http: HttpClient) { }
  path = "http://localhost:3000/egitimler"
  filterText = "";

  egitimBilgileri: egitimBilgileri[] =
  [
  //   {id: 1, adi: "Javascript", kategoriID: 1, aciklama: "Aciklama1", imageUrl: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
  //   {id: 2, adi: "TypeScript", kategoriID: 1, aciklama: "Aciklama2", imageUrl: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
  //   {id: 3, adi: "Angular", kategoriID: 1, aciklama: "Aciklama3", imageUrl: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
  //   {id: 4, adi: "HTML", kategoriID: 1, aciklama: "Aciklama4", imageUrl: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
  //   {id: 5, adi: "CSS", kategoriID: 1, aciklama: "Aciklama5", imageUrl: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
]

  ngOnInit(): void {
    //JSON VERİLERİNİ EKLEME
    this.http.get<egitimBilgileri[]>(this.path).subscribe(data => {
      this.egitimBilgileri = data
    })
  }
  addtoChart(egitimAdi: any)
  {
    this.alertify.success(egitimAdi.adi + " içerisine yönlendiriliceksiniz. Ama şimdi değil :)");
  }
}
