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

  scaleValues = [0, 1, 2, 3, 4, 5]
  objectives = ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9', 'PO10'];

  constructor() {}

  ngOnInit(): void {
    this.chargeQuestions()
  }

  chargeQuestions(): void {
    for (let i = 0; i < 10; i++) {
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
