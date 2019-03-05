import Component, { tracked } from '@glimmer/component';

export default class Flashcards extends Component {
  @tracked flashCards = [{question: 'question', answer: 'answer'}];
  @tracked cardIndex = 0;
  @tracked showAddCardForm = false;

  @tracked
  get moreCards() {
    return this.flashCards.length > 1;
  }

  @tracked
  get currentCard() {
    return this.flashCards[this.cardIndex];
  }

  public previousCard() {
    if (this.cardIndex === 0) {
      this.cardIndex = this.flashCards.length - 1;
    } else {
      this.cardIndex--;
    }
  }

  public nextCard() {
    if (this.cardIndex < (this.flashCards.length - 1)) {
      this.cardIndex ++;
    } else {
      this.cardIndex = 0;
    }
  }

  public addCard(cardAttrs) {
    this.flashCards.push(cardAttrs);
    this.flashCards = [...this.flashCards];
    this.showAddCardForm = false;
  }

  public cancelForm() {
    this.showAddCardForm = false;
  }

  public showForm() {
    this.showAddCardForm = true;
  }

  public deleteCard(deleteCard) {
    let index = this.flashCards.findIndex(card => { return card.question === deleteCard.question && card.answer === deleteCard.answer; });
    this.flashCards.splice(index, 1);
    this.flashCards = [...this.flashCards];
    this.nextCard();
  }
}
