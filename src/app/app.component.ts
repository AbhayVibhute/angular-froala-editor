import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'froala-editor';
  froalaEditor: FormGroup;

  // tslint:disable-next-line:ban-types
  public options: Object = {
    // placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat'],
    // toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    // toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    // toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    // events: {
    //   'froalaEditor.focus'(e, editor) {
    //     console.log(editor.selection.get());
    //   }
    // }
  };

  public editorContent = 'My Document\'s Title';

  ngOnInit() {
    this.froalaEditor = new FormGroup({
      editor: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.froalaEditor.value);
  }

}
