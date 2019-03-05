import Component, { tracked } from '@glimmer/component';

export default class FlashcardForm extends Component {
  @tracked public question = '';
  @tracked public answer = '';


  public submit() {
    this.args.onCreate({ question: this.question, answer: this.answer });
  }

  public cancel() {
    this.args.onCancel();
  }

  public updateQuestion(newVal) {
    this.question = newVal.target.value;
  }

  public updateAnswer(newVal) {
    this.answer = newVal.target.value;
  }
}
