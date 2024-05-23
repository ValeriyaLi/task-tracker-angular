import { Component, Input } from '@angular/core';
import { Folder } from "./models/models";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.sass'],
})
export class FolderComponent {
  @Input() folder!: Folder;
}
