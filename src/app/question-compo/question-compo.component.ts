import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Question } from '../model/question'

@Component({
  selector: 'app-question-compo',
  templateUrl: './question-compo.component.html',
  styleUrls: ['./question-compo.component.css'],
})
export class QuestionCompoComponent implements OnInit {

  @Output() updateDomainList = new EventEmitter<[Question]>()
  @Input() domain: number = 0
  @Input() editQuestions: boolean = true;
  questions: Question[] = []

  scales = [
    { name: 'No Existente', value: 0 },
    { name: 'Inicial / Ad Hoc', value: 1 },
    { name: 'Repetible pero Intuitivo', value: 2 },
    { name: 'Definido', value: 3 },
    { name: 'Administrado y Medible', value: 4 },
    { name: 'Optimizado', value: 5 },
  ]

  objectives = [{ name: 'PO1', average: 0, questions: [new Question('¿Pregunta 1?', 0)] }];

  constructor() { }

  ngOnInit(): void {
  }

  updateList(): void {
    this.updateDomainList.emit()
  }

  updateObjectiveAverage(objective: any): void {
    const selectedObjective = this.objectives.find(item => item.name == objective.name)
    if(selectedObjective != undefined) {
      let index = this.objectives.indexOf(selectedObjective);
      let sum = 0;
      selectedObjective?.questions.forEach(item => {
        sum += item.getValue()
      });
      selectedObjective.average = (sum/selectedObjective.questions.length) * 20
      this.objectives[index] = selectedObjective
    }
  }

  updateScore(item: Question, value: number): void {
    item.setValue(value);
  }

}
