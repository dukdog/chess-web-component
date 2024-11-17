import {ComplexAttributeConverter} from 'lit';

export enum PieceType {
  King = 'king',
  Queen = 'queen',
  Rook = 'rook',
  Bishop = 'bishop',
  Knight = 'knight',
  Pawn = 'pawn',
}

export enum Piece {
  WhiteKing = 'whiteKing',
  WhiteQueen = 'whiteQueen',
  WhiteRook = 'whiteRook',
  WhiteBishop = 'whiteBishop',
  WhiteKnight = 'whiteKnight',
  WhitePawn = 'whitePawn',
  BlackKing = 'blackKing',
  BlackQueen = 'blackQueen',
  BlackRook = 'blackRook',
  BlackBishop = 'blackBishop',
  BlackKnight = 'blackKnight',
  BlackPawn = 'blackPawn',
}

export enum PieceLetter {
  WhiteKing = 'K',
  WhiteQueen = 'Q',
  WhiteRook = 'R',
  WhiteBishop = 'B',
  WhiteKnight = 'N',
  WhitePawn = 'P',
  BlackKing = 'k',
  BlackQueen = 'q',
  BlackRook = 'r',
  BlackBishop = 'b',
  BlackKnight = 'n',
  BlackPawn = 'p',
}

export enum Color {
  White = 'white',
  Black = 'black',
}

export type RowCol = [number, number];

export enum Square {
  A1 = 'a1',
  A2 = 'a2',
  A3 = 'a3',
  A4 = 'a4',
  A5 = 'a5',
  A6 = 'a6',
  A7 = 'a7',
  A8 = 'a8',
  B1 = 'b1',
  B2 = 'b2',
  B3 = 'b3',
  B4 = 'b4',
  B5 = 'b5',
  B6 = 'b6',
  B7 = 'b7',
  B8 = 'b8',
  C1 = 'c1',
  C2 = 'c2',
  C3 = 'c3',
  C4 = 'c4',
  C5 = 'c5',
  C6 = 'c6',
  C7 = 'c7',
  C8 = 'c8',
  D1 = 'd1',
  D2 = 'd2',
  D3 = 'd3',
  D4 = 'd4',
  D5 = 'd5',
  D6 = 'd6',
  D7 = 'd7',
  D8 = 'd8',
  E1 = 'e1',
  E2 = 'e2',
  E3 = 'e3',
  E4 = 'e4',
  E5 = 'e5',
  E6 = 'e6',
  E7 = 'e7',
  E8 = 'e8',
  F1 = 'f1',
  F2 = 'f2',
  F3 = 'f3',
  F4 = 'f4',
  F5 = 'f5',
  F6 = 'f6',
  F7 = 'f7',
  F8 = 'f8',
  G1 = 'g1',
  G2 = 'g2',
  G3 = 'g3',
  G4 = 'g4',
  G5 = 'g5',
  G6 = 'g6',
  G7 = 'g7',
  G8 = 'g8',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  H7 = 'h7',
  H8 = 'h8',
}

export const SQUARE_INDEX: Record<Square, number> = {
  [Square.A1]: 0,
  [Square.B1]: 1,
  [Square.C1]: 2,
  [Square.D1]: 3,
  [Square.E1]: 4,
  [Square.F1]: 5,
  [Square.G1]: 6,
  [Square.H1]: 7,
  [Square.A2]: 8,
  [Square.B2]: 9,
  [Square.C2]: 10,
  [Square.D2]: 11,
  [Square.E2]: 12,
  [Square.F2]: 13,
  [Square.G2]: 14,
  [Square.H2]: 15,
  [Square.A3]: 16,
  [Square.B3]: 17,
  [Square.C3]: 18,
  [Square.D3]: 19,
  [Square.E3]: 20,
  [Square.F3]: 21,
  [Square.G3]: 22,
  [Square.H3]: 23,
  [Square.A4]: 24,
  [Square.B4]: 25,
  [Square.C4]: 26,
  [Square.D4]: 27,
  [Square.E4]: 28,
  [Square.F4]: 29,
  [Square.G4]: 30,
  [Square.H4]: 31,
  [Square.A5]: 32,
  [Square.B5]: 33,
  [Square.C5]: 34,
  [Square.D5]: 35,
  [Square.E5]: 36,
  [Square.F5]: 37,
  [Square.G5]: 38,
  [Square.H5]: 39,
  [Square.A6]: 40,
  [Square.B6]: 41,
  [Square.C6]: 42,
  [Square.D6]: 43,
  [Square.E6]: 44,
  [Square.F6]: 45,
  [Square.G6]: 46,
  [Square.H6]: 47,
  [Square.A7]: 48,
  [Square.B7]: 49,
  [Square.C7]: 50,
  [Square.D7]: 51,
  [Square.E7]: 52,
  [Square.F7]: 53,
  [Square.G7]: 54,
  [Square.H7]: 55,
  [Square.A8]: 56,
  [Square.B8]: 57,
  [Square.C8]: 58,
  [Square.D8]: 59,
  [Square.E8]: 60,
  [Square.F8]: 61,
  [Square.G8]: 62,
  [Square.H8]: 63,
};

export const INDEX_SQUARE: Array<Square> = [
  Square.A1,
  Square.B1,
  Square.C1,
  Square.D1,
  Square.E1,
  Square.F1,
  Square.G1,
  Square.H1,
  Square.A2,
  Square.B2,
  Square.C2,
  Square.D2,
  Square.E2,
  Square.F2,
  Square.G2,
  Square.H2,
  Square.A3,
  Square.B3,
  Square.C3,
  Square.D3,
  Square.E3,
  Square.F3,
  Square.G3,
  Square.H3,
  Square.A4,
  Square.B4,
  Square.C4,
  Square.D4,
  Square.E4,
  Square.F4,
  Square.G4,
  Square.H4,
  Square.A5,
  Square.B5,
  Square.C5,
  Square.D5,
  Square.E5,
  Square.F5,
  Square.G5,
  Square.H5,
  Square.A6,
  Square.B6,
  Square.C6,
  Square.D6,
  Square.E6,
  Square.F6,
  Square.G6,
  Square.H6,
  Square.A7,
  Square.B7,
  Square.C7,
  Square.D7,
  Square.E7,
  Square.F7,
  Square.G7,
  Square.H7,
  Square.A8,
  Square.B8,
  Square.C8,
  Square.D8,
  Square.E8,
  Square.F8,
  Square.G8,
  Square.H8,
];
export interface SquareData {
  row: number;
  col: number;
  index: number;
  rank: number;
  file: string;
  isWhite: boolean;
  rowCol: RowCol;
  name: Square;
  startingPiece: Piece | null;
}

function squareData(index: number): SquareData {
  const row = Math.floor(index / 8);
  const col = index % 8;
  const rank = row + 1;
  const file = String.fromCharCode(97 + col);
  const isWhite = (row + col) % 2 === 1;
  const rowCol: RowCol = [row, col];
  const name = INDEX_SQUARE[index];
  let startingPiece: Piece | null = null;
  if (row === 0) {
    switch (col) {
      case 0:
        startingPiece = Piece.WhiteRook;
        break;
      case 1:
        startingPiece = Piece.WhiteKnight;
        break;
      case 2:
        startingPiece = Piece.WhiteBishop;
        break;
      case 3:
        startingPiece = Piece.WhiteQueen;
        break;
      case 4:
        startingPiece = Piece.WhiteKing;
        break;
      case 5:
        startingPiece = Piece.WhiteBishop;
        break;
      case 6:
        startingPiece = Piece.WhiteKnight;
        break;
      case 7:
        startingPiece = Piece.WhiteRook;
        break;
    }
  }
  if (row === 1) {
    startingPiece = Piece.WhitePawn;
  }
  if (row === 6) {
    startingPiece = Piece.BlackPawn;
  }
  if (row === 7) {
    switch (col) {
      case 0:
        startingPiece = Piece.BlackRook;
        break;
      case 1:
        startingPiece = Piece.BlackKnight;
        break;
      case 2:
        startingPiece = Piece.BlackBishop;
        break;
      case 3:
        startingPiece = Piece.BlackQueen;
        break;
      case 4:
        startingPiece = Piece.BlackKing;
        break;
      case 5:
        startingPiece = Piece.BlackBishop;
        break;
      case 6:
        startingPiece = Piece.BlackKnight;
        break;
      case 7:
        startingPiece = Piece.BlackRook;
        break;
    }
  }
  return {
    row,
    col,
    index,
    rank,
    file,
    isWhite,
    startingPiece,
    rowCol,
    name,
  };
}
function indices(): Array<number> {
  const indices = [];
  for (let i = 0; i < 64; i++) {
    indices.push(i);
  }
  return indices;
}
export const SQUARE_DATA_BY_INDEX: Array<SquareData> = indices().map(squareData);

export const SQUARE_DATA: Record<Square, SquareData> = {
    [Square.A1]: squareData(0),
    [Square.B1]: squareData(1),
    [Square.C1]: squareData(2),
    [Square.D1]: squareData(3),
    [Square.E1]: squareData(4),
    [Square.F1]: squareData(5),
    [Square.G1]: squareData(6),
    [Square.H1]: squareData(7),
    [Square.A2]: squareData(8),
    [Square.B2]: squareData(9),
    [Square.C2]: squareData(10),
    [Square.D2]: squareData(11),
    [Square.E2]: squareData(12),
    [Square.F2]: squareData(13),
    [Square.G2]: squareData(14),
    [Square.H2]: squareData(15),
    [Square.A3]: squareData(16),
    [Square.B3]: squareData(17),
    [Square.C3]: squareData(18),
    [Square.D3]: squareData(19),
    [Square.E3]: squareData(20),
    [Square.F3]: squareData(21),
    [Square.G3]: squareData(22),
    [Square.H3]: squareData(23),
    [Square.A4]: squareData(24),
    [Square.B4]: squareData(25),
    [Square.C4]: squareData(26),
    [Square.D4]: squareData(27),
    [Square.E4]: squareData(28),
    [Square.F4]: squareData(29),
    [Square.G4]: squareData(30),
    [Square.H4]: squareData(31),
    [Square.A5]: squareData(32),
    [Square.B5]: squareData(33),
    [Square.C5]: squareData(34),
    [Square.D5]: squareData(35),
    [Square.E5]: squareData(36),
    [Square.F5]: squareData(37),
    [Square.G5]: squareData(38),
    [Square.H5]: squareData(39),
    [Square.A6]: squareData(40),
    [Square.B6]: squareData(41),
    [Square.C6]: squareData(42),
    [Square.D6]: squareData(43),
    [Square.E6]: squareData(44),
    [Square.F6]: squareData(45),
    [Square.G6]: squareData(46),
    [Square.H6]: squareData(47),
    [Square.A7]: squareData(48),
    [Square.B7]: squareData(49),
    [Square.C7]: squareData(50),
    [Square.D7]: squareData(51),
    [Square.E7]: squareData(52),
    [Square.F7]: squareData(53),
    [Square.G7]: squareData(54),
    [Square.H7]: squareData(55),
    [Square.A8]: squareData(56),
    [Square.B8]: squareData(57),
    [Square.C8]: squareData(58),
    [Square.D8]: squareData(59),
    [Square.E8]: squareData(60),
    [Square.F8]: squareData(61),
    [Square.G8]: squareData(62),
    [Square.H8]: squareData(63),
}


export const colorConverter: ComplexAttributeConverter<Color> = {
  toAttribute: (color: Color) => {
    return color as string;
  },
  fromAttribute: (value: string) => {
    return value as Color;
  }
};