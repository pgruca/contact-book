import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact.interface';

@Injectable()
export class ContactService {
  constructor() {}

  getAll(): Observable<Contact[]> {
    const contacts = [
      {
        _id: '6630e593d7aced41c40a953d',
        index: 0,
        guid: '98795831-e787-47a5-a7ee-37d555358188',
        isActive: true,
        picture: 'http://placehold.it/32x32',
        age: 36,
        name: 'Dixie Morgan',
        email: 'dixiemorgan@multron.com',
        phone: '+1 (971) 455-3865',
        address: '161 Sullivan Street, Como, New York, 793',
      },
      {
        _id: '6630e593f0988e4f5e9eb8aa',
        index: 1,
        guid: '59ec1495-a6c1-433a-957e-7e61a92f2ac9',
        isActive: true,
        picture: 'http://placehold.it/32x32',
        age: 36,
        name: 'Bridget Hurley',
        email: 'bridgethurley@multron.com',
        phone: '+1 (805) 447-3400',
        address: '929 Lewis Place, Boonville, Virgin Islands, 5269',
      },
      {
        _id: '6630e593cb4b7aa12787f9f1',
        index: 2,
        guid: '610fca3c-1d8e-49d1-ac8d-d3ca6c14673c',
        isActive: true,
        picture: 'http://placehold.it/32x32',
        age: 24,
        name: 'Navarro Jacobs',
        email: 'navarrojacobs@multron.com',
        phone: '+1 (889) 424-3935',
        address: '711 Milford Street, Greenock, North Carolina, 1410',
      },
      {
        _id: '6630e593b8db9a79fc42f0ca',
        index: 3,
        guid: '832969b2-875c-4a2d-adad-5782446eed0c',
        isActive: false,
        picture: 'http://placehold.it/32x32',
        age: 22,
        name: 'Anna Sykes',
        email: 'annasykes@multron.com',
        phone: '+1 (942) 520-2793',
        address: '967 Oceanic Avenue, Elliston, Maine, 490',
      },
      {
        _id: '6630e593e782da93bc74f27c',
        index: 4,
        guid: '35790f1b-3f33-40a0-8a24-2fb9f5402bd4',
        isActive: false,
        picture: 'http://placehold.it/32x32',
        age: 30,
        name: 'Taylor Bradshaw',
        email: 'taylorbradshaw@multron.com',
        phone: '+1 (877) 501-3474',
        address: '697 Irwin Street, Kimmell, North Dakota, 6975',
      },
      {
        _id: '6630e593c9bca1122c053b9d',
        index: 5,
        guid: '7286727c-2ada-4a3a-8596-5ce4662cd848',
        isActive: true,
        picture: 'http://placehold.it/32x32',
        age: 33,
        name: 'Andrews Berger',
        email: 'andrewsberger@multron.com',
        phone: '+1 (953) 408-3442',
        address: '445 Quincy Street, Clarksburg, Connecticut, 3289',
      },
    ];

    return of(contacts);
  }
}
