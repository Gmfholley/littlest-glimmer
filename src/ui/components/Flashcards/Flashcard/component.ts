import Component, { tracked } from '@glimmer/component';

export default class Flashcard extends Component {
  @tracked private showQuestion = true;
  get contentClass() {
     return this.showQuestion ? 'question' : 'answer';
  }

  public toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }

  public delete() {
    this.args.onDelete({question: this.args.question, answer: this.args.answer});
  }
}
