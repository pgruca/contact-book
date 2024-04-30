import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/service/contacts.service';
import { Contact } from 'src/app/core/models/contact.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [ContactService]
})
export class ListComponent implements OnInit {
  public contacts?: Contact[];

  constructor(private router: Router, private _contactsService: ContactService) {
    const routes: Routes = [{ path: 'contact/dynamic', component: DynamicComponent }];
    this.router.config.unshift(...routes);
    console.log(router)
  }

  ngOnInit(): void {
    this.retriveContacts();
  }

  retriveContacts(): void {
    this._contactsService.getAll().subscribe({
      next: (data) => {
        this.contacts = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
