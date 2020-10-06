export interface IPesquisas {
    data: IPesquisa[];
}

export interface IPesquisa {
    id: number;
    nome: string;
    descricao: string;
    dataInicio: string;
    dataTermino: string;
    protocolo: string;
    idadeMinina: number;
    idadeMaxima: number;
    totalAmostra: number;
    linkFormCadastro: string;
    criteriosAceite: string;
    criteriosExclusao: string;
    etapasPesquisa: string;
    condicoesSaude: string;
    telefone: string;
    celular: string;
    email: string;
    imgCover: any;
}