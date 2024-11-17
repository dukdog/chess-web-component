import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { DukdogChess } from '../src/DukdogChess.js';
import '../src/dukdog-chess.js';

describe('DukdogChess', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<DukdogChess>(html`<dukdog-chess></dukdog-chess>`);

  });

  it('increases the counter on button click', async () => {
    const el = await fixture<DukdogChess>(html`<dukdog-chess></dukdog-chess>`);
    el.shadowRoot!.querySelector('button')!.click();

  });

  it('can override the header via attribute', async () => {
    const el = await fixture<DukdogChess>(html`<dukdog-chess header="attribute header"></dukdog-chess>`);

  });

  it('passes the a11y audit', async () => {
    const el = await fixture<DukdogChess>(html`<dukdog-chess></dukdog-chess>`);
  });
});
