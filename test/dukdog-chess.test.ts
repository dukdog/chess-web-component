import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { DukdogChess } from '../src/DukdogChess.js';
import '../src/dukdog-chess.js';

describe('DukdogChess', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<DukdogChess>(html`<dukdog-chess></dukdog-chess>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<DukdogChess>(html`<dukdog-chess></dukdog-chess>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<DukdogChess>(html`<dukdog-chess header="attribute header"></dukdog-chess>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<DukdogChess>(html`<dukdog-chess></dukdog-chess>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
