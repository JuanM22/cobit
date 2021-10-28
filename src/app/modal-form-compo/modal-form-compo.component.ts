import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Objective } from '../model/objective';
import { Question } from '../model/question';
import { ObjectiveServicesService } from '../services/objective-services.service';

@Component({
  selector: 'app-modal-form-compo',
  templateUrl: './modal-form-compo.component.html',
  styleUrls: ['./modal-form-compo.component.css']
})
export class ModalFormCompoComponent implements OnInit {

  title = ''
  questionText = ''
  objective: Objective = new Objective();
  question: Question = new Question('', 0)
  questionIndex = -1
  savedOrUpdated: boolean = false

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private objectivesServices: ObjectiveServicesService) { }

  ngOnInit(): void {
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
          this.question.value = 0
        } else {
          this.question = new Question(this.questionText, 0)
        }
        if (this.questionIndex != -1) this.objective.questions[this.questionIndex] = this.question
        else this.objective.questions.push(this.question)
        this.objectivesServices.save(this.objective).subscribe(res => {
          console.log(res.data)
          this.savedOrUpdated = true
        })
      }
    }
  }

}
