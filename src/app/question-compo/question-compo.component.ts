import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { ModalFormCompoComponent } from '../modal-form-compo/modal-form-compo.component';
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

  @Output() updateDomainList = new EventEmitter<[Question]>()
  @Input() domain: number = 1
  @Input() editQuestions: boolean = true;

  domains = ['Planear y Organizar', 'Adquirir e Implementar', 'Entregar y Dar Soporte', 'Evaluar y Monitorear']

  processes = [{
    id: 1,
    items: [
      new Process('PO1', 'PO1 Definir un Plan Estratégico de TI'),
      new Process('PO2', 'PO2 Definir la Arquitectura de la Información'),
      new Process('PO3', 'PO3 Determinar la Dirección Tecnológica'),
      new Process('PO4', 'PO4 Definir los Procesos, Organización y Relaciones de TI'),
      new Process('PO5', 'PO5 Administrar la Inversión en TI'),
      new Process('PO6', 'PO6 Comunicar las Aspiraciones y la Dirección de la Gerencia'),
      new Process('PO7', 'PO7 Administrar Recursos Humanos de TI'),
      new Process('PO8', 'PO8 Administrar la Calidad'),
      new Process('PO9', 'PO9 Evaluar y Administrar los Riesgos de TI'),
      new Process('PO10', 'PO10 Administrar Proyectos')
    ]
  }]

  scales = [
    { name: 'No Existente', value: 0 },
    { name: 'Inicial / Ad Hoc', value: 1 },
    { name: 'Repetible pero Intuitivo', value: 2 },
    { name: 'Definido', value: 3 },
    { name: 'Administrado y Medible', value: 4 },
    { name: 'Optimizado', value: 5 },
  ]

  selectedDomain: any[] = []

  constructor(public dialog: MatDialog, private objectiveServices: ObjectiveServicesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const process = this.processes.find((item) => item.id == changes.domain?.currentValue)
    if (process != undefined) {
      this.selectedDomain = process.items;
    }
    this.listObjectives()
  }

  listObjectives(): void {
    this.objectiveServices.list(this.domain).subscribe(res => {
      const objectives = res; // dominios y procesos //
      for (let process of this.processes) {
        for (let proc of process.items) {
          proc.objectives = objectives.filter((item) => item.process == proc.processId)
        }
      }
    })
  }

  updateList(): void {
    this.updateDomainList.emit()
  }

  updateProcessAverage(process: any): void {
    let sum = 0;
    let total = 0;
    for (let objective of process.objectives) {
      objective.questions.forEach((item: any) => {
        sum += item.getValue()
      });
      if (objective.questions.length > 0) {
        total += (sum / objective.questions.length);
      }
      sum = 0;
    }
    process.average = (total / process.objectives.length)
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

  deleteQuestion(question : Question, objective: Objective): void {
    if(confirm('¿Esta seguro de que desea eliminar la pregunta?')) {
      const index = objective.questions.indexOf(question);
      objective.questions.splice(index, 1);
      this.objectiveServices.save(objective).subscribe(res => {
        console.log(res.data);
      });
    }
  }

}

