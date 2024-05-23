import { Component, OnInit } from '@angular/core';
import { Folder } from "../models/models";
import { FolderService } from "../services/folder.service";

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.sass']
})
export class FolderListComponent implements OnInit {
  constructor(private folderService: FolderService) {}

  folders: Folder[] = [];

  ngOnInit() {
    this.folderService.getFolders("http://0.0.0.0:8080/folder/")
      .subscribe((folders: Folder[]) => {
        this.folders = folders;
        console.log(this.folders);
      });
  }
}
