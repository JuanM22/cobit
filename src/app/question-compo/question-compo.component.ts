import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomToastCompoComponent } from '../custom-toast-compo/custom-toast-compo.component';
import { ModalFormCompoComponent } from '../modal-form-compo/modal-form-compo.component';
import { Domain } from '../model/domain';
import { Objective } from '../model/objective';
import { Process } from '../model/process';
import { Question } from '../model/question'
import { ObjectiveServicesService } from '../services/objective-services.service';

@Component({
  selector: 'app-question-compo',
  templateUrl: './question-compo.component.html',
  styleUrls: ['./question-compo.component.css'],
})
export class QuestionCompoComponent implements OnInit, OnChanges {

  @Output() updateProcessesList = new EventEmitter<string>()
  @Input() currentDomain = new Domain()
  @Input() editQuestions: boolean = true;

  scales = [
    { name: 'No Aplica', value: -1 },
    { name: 'No Existente', value: 0 },
    { name: 'Inicial / Ad Hoc', value: 1 },
    { name: 'Repetible pero Intuitivo', value: 2 },
    { name: 'Definido', value: 3 },
    { name: 'Administrado y Medible', value: 4 },
    { name: 'Optimizado', value: 5 },
  ]

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private objectiveServices: ObjectiveServicesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(_changes: SimpleChanges) {
    if (this.currentDomain != undefined) this.listObjectives()
  }

  listObjectives(): void {
    this.objectiveServices.list(this.currentDomain.id).subscribe(res => {
      const objectives = res; // dominios y procesos génericos //
      for (let process of this.currentDomain.processes) {
        const genericObjectives = objectives.filter((item) => item.process == process.processId)
        // if (process.objectives.length == 0) {
          process.objectives = genericObjectives
        // } else {
          // this.updateQuestions(genericObjectives, process.objectives)
        // }
      }
      // this.updateList()
    })
  }

  updateQuestions(genericObjectives: Objective[], objectives: Objective[]): void {
    for (let i = 0; i < genericObjectives.length; i++) {
      const questions = genericObjectives[i].questions;
      const oldQuestions = objectives[i].questions;
      if(questions.length > oldQuestions.length) {
        objectives[i].questions.push(...questions.splice(oldQuestions.length, questions.length));
      }
    }
  }

  updateList(): void {
    this.updateProcessesList.emit('updated')
  }

  updateProcessAverage(process: Process): void {
    let sum = 0;
    let totalAverage = 0;
    for (let objective of process.objectives) {
      objective.questions.forEach((item) => {
        if (item.value != -1) sum += item.value
      });
      const questionList = objective.questions.filter(item => item.value != -1)
      if (questionList.length > 0) {
        totalAverage += (sum / questionList.length)
      }
      sum = 0
    }
    if (totalAverage > 0) {
      let objectivesAnswered = 0;
      process.objectives.forEach(item => {
        const answered = item.questions.filter((q => q.value != -1));
        if (answered.length > 0) objectivesAnswered++
      })
      // process.average = ((totalAverage * 20) / objectivesAnswered) // Percentage //
      process.average = Math.floor(totalAverage / objectivesAnswered) // Maturity Scale //
      // console.log((totalAverage / objectivesAnswered))
      // console.log(Math.floor(totalAverage / objectivesAnswered))
    } else {
      process.average = 0
    }
    this.updateList()
  }

  updateScore(item: Question, value: number): void {
    item.value = value;
  }

  openDialog(operation: string, objective: any, question?: Question): void {
    const modalTitle = (operation == 'save') ? 'Nueva pregunta' : 'Editar pregunta'
    const data = {
      title: modalTitle,
      objective: objective,
      question: question
    }
    const dialogRef = this.dialog.open(ModalFormCompoComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(() => {
    })
  }

  deleteQuestion(question: Question, objective: Objective): void {
    if (confirm('¿Esta seguro de que desea eliminar la pregunta?')) {
      const index = objective.questions.indexOf(question);
      objective.questions.splice(index, 1);
      this.objectiveServices.save(objective).subscribe(res => {
        const message = (res.data === 'success') ? 'La pregunta ha sido removida' : 'Error al remover la pregunta'
        this.openPopUpMessage(message)
      });
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

