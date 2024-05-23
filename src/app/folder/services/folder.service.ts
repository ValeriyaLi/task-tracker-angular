import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Folder} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private apiService: ApiService) { }

  getFolders = (url: string): Observable<Folder[]> => {
    return this.apiService.get(url)
  }
}
