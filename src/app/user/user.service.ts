import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

//Note use of providedIn 'root' which is newer syntax.  You could alternatively
//add UserService inside the providers [] in app.module like we did until now.
@Injectable({providedIn: 'root'})
export class UserService {
    activatedEmitter = new Subject<boolean>();
}