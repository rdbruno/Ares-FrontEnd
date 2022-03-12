export class Veterinario {
    
    constructor(
        public nome: string,
        public email: string,
        public cpf: string,
        //public cnpj: string,
        public rua: string,
        public bairro: string,
        public numero: number,
        public cep: string,
        public complemento: string,
        public telefone: string,
        public urlDocumentacao: string,
        //public urlFoto: string
        public senha: string
    ) { }

}