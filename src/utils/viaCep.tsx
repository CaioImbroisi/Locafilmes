import axios from 'axios';
interface Adress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string,
}

const getAdress = async (text: string) => {
  if (text.length === 8) {
    const result = await axios.get<Adress>(`https://viacep.com.br/ws/${text}/json/`)
    return result.data
  }
}

export {getAdress}