export interface Product {
    id: number | null; 
    nome: string;
    preco: number
    descricao: string|null;
    file_path: string|null;
    category_id: number; 
    ativo: boolean;
}