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
  objectives = ['PO1'];

  constructor() {}

  ngOnInit(): void {
    this.chargeQuestions()
  }

  chargeQuestions(): void {
    for (let i = 0; i < 3; i++) {
      this.questions.push(new Question('Pregunta ' + (i + 1), 0))
    }
  }

  updateList(): void {
    this.updateDomainList.emit()
  }

  updateScore(item: Question, value: number): void {
    item.setValue(value);
  }

}
