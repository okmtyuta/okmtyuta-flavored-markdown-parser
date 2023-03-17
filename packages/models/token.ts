export interface Token {
  id: number;
  parent: Token;
  elmType: string;
  content: string;
}