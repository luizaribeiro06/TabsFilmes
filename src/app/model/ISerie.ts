/* eslint-disable eol-last */
export interface ISerie{
    nome: string;
    lancamento: string;
    temporada: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
    favorito: boolean;
  }