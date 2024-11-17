import { html, svg, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { piece as pieceFn } from './piece.js';
import { Color, Piece, Square, SQUARE_DATA } from './domain.js';
import { when } from 'lit/directives/when.js';

function placedPiece(piece: Piece, square: Square, pointOfView = Color.White) {
  const data = SQUARE_DATA[square];
  const x = data.col * 100;
  const y = 700 - data.row * 100;
  return svg`<svg x="${x}" y="${y}">
  ${pieceFn(piece, pointOfView)}
  </svg>`;
}

export interface BoardProps {
  lightColor?: string;
  darkColor?: string;
  pointOfView?: Color;
}

export function Board(props: BoardProps) {
  const lightColor = props.lightColor ?? 'lightgray';
  const darkColor = props.darkColor ?? 'darkgray';
  const pointOfView = props.pointOfView ?? Color.White;
  const rotate = pointOfView === Color.White ? 0 : 180;
  const transform = `rotate(${rotate} 0 0)`;
  const squares = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const fill = (i + j) % 2 === 0 ? lightColor : darkColor;
      squares.push(
        svg`<rect x="${i * 100}" y="${j * 100}" width="100" height="100" fill="${fill}"/>`,
      );
    }
  }
  const pieces = Object.values(SQUARE_DATA)
    .filter(d => d.startingPiece != null)
    .map(d => placedPiece(d.startingPiece!, d.name, pointOfView));

  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 800 800"
        transform="${transform}"
    >
      ${squares} ${pieces}
    </svg>
  `;
}
