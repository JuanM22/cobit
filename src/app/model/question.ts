export class Question {

    private question = '';
    private value = 0;

    constructor(question: string, value: number) {
        this.question = question;
        this.value = value;
    }

    getQuestion = () => this.question;
    getValue = () => this.value;
    setValue = (value: number) => this.value = value;

}
