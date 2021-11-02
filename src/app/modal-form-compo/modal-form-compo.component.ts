import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomToastCompoComponent } from '../custom-toast-compo/custom-toast-compo.component';
import { Objective } from '../model/objective';
import { Question } from '../model/question';
import { ObjectiveServicesService } from '../services/objective-services.service';

@Component({
  selector: 'app-modal-form-compo',
  templateUrl: './modal-form-compo.component.html',
  styleUrls: ['./modal-form-compo.component.css']
})
export class ModalFormCompoComponent implements OnInit {

  operation = ''
  title = ''
  questionText = ''
  objective: Objective = new Objective();
  question: Question = new Question('', -1)
  questionIndex = -1
  savedOrUpdated: boolean = false

  constructor(public dialogRef: MatDialogRef<ModalFormCompoComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private objectivesServices: ObjectiveServicesService) { }

  ngOnInit(): void {
    this.operation = this.data.operation
    this.title = this.data.title
    this.objective = this.data.objective
    this.question = this.data.question
    if (this.objective.questions.length > 0) {
      this.questionIndex = this.objective.questions.indexOf(this.question)
    }
    if (this.question != undefined) this.questionText = this.question.question
  }

  saveQuestion(): void {
    if (!this.savedOrUpdated) {
      if (this.questionText != '') {
        if (this.question != undefined) {
          this.question.question = this.questionText
        } else {
          this.question = new Question(this.questionText, -1)
        }
        if (this.questionIndex != -1) this.objective.questions[this.questionIndex] = this.question
        else this.objective.questions.push(this.question)
        this.objectivesServices.save(this.objective).subscribe(res => {
          this.dialogRef.close({ data: this.question.question })
          const saveMessage = (res.data === 'success') ? 'La pregunta ha sido agregada' : 'Error al agregar la pregunta'
          const updateMessage = (res.data === 'success') ? 'La pregunta ha sido modificada' : 'Error al modificar la pregunta'
          this.openPopUpMessage((this.operation == 'save') ? saveMessage : updateMessage)
          this.savedOrUpdated = true
        })
      }
    }
  }

  openPopUpMessage(message: string) {
    this._snackBar.openFromComponent(CustomToastCompoComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 5000,
      data: {
        message: message
      }
    });
  }

}
