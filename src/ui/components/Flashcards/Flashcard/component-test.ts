import hbs from '@glimmer/inline-precompile';
import { render, setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: Flashcards/Flashcard', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Flashcards/Flashcard @question='question?' @answer='answer' />`);
    assert.ok(this.containerElement.querySelector('div'));
    assert.equal(this.containerElement.querySelector('h3').textContent.trim(), 'question');
    assert.ok(this.containerElement.querySelector('button'));
  });
});
