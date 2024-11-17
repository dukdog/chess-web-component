import { html, svg, TemplateResult } from 'lit';
import { piece, piece as pieceFn } from '../src/piece.js';
import '../src/dukdog-chess.js';
import { Color, Piece } from '../src/domain.js';

export default {
  title: 'Pieces',
  component: 'Piece',
  argTypes: {
    piece: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  piece: Piece;
  pointOfView: Color;
}

const Template: Story<ArgTypes> = (args: ArgTypes) => html`
  ${pieceFn(args.piece, args.pointOfView)}
`;

export const King = Template({ piece: Piece.WhiteKing, pointOfView: Color.White });