import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { Board } from './board.js';
import { Color, colorConverter } from './domain.js';

export class DukdogChess extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--dukdog-chess-text-color, #000);
    }
  `;

  @property({ type: Color, converter: colorConverter }) pointOfView = Color.White;

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return Board({ pointOfView: this.pointOfView });
  }
}
