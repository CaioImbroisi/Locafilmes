# Locafilmes

### Neste projeto foi utilizado:

1. Vue + Vite
2. TypeScript

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Landing Page
- [x] Catálogo de filmes
- [x] Registro de Locações
- [x] Registro de Usuários
- [ ] Crud de usuários completo  
- [ ] Crud de locação completo

## Instalando

Para instalar o <Locafilmes>, siga estas etapas:

1. Clone o repositório e após isso utilize o comando:

```
<npm install>
```

##  Usando

Para usar <nLocafilmes> basta inicia-lo localmente:

```
<npm run dev>
*node version: 20
```
## Manipulando a aplicação (rotas):

## Landing Page ( '/' )
1. Temos um carrossel destacando filmes
2. Oferta de serviços de assinatura da locadora

## Catalogo ( '/catalog' )
1. Busca principal de filmes no catálogo
2. Listagem de filmes na busca
   -Ao clicar em um filmes você é levado para a página de detalhes

## Detalhes do Filme ( '/movie/:id' )
1. Na página de detalhes é possível visualizar mais informações e alugar o filme
   - Note que o CRUD ainda esta incompleto, mas o filme esta sendo armazenado no localStorage por enquanto

## Cadastro ( '/register' )
1. Formulário comum de cadastro
2. O cadastro possui validação de informações e utiliza o viaCep para validar endereços
3. Após realizar o cadastro o usuário é levado ao seu perfil na Locafilmes

## Login ( '/login' )
1. O telefone registrado no cadastro é utilizado como login
   - o Login esta sendo armazenado no sessionStorage.

## Perfil de Usuário ( '/userProfile/:id' )
> Em construção

## Contato ( '/contact' )
1. Página simples (vai ser mais elaborada)

## Sobre ( '/about' )
1. Página simples (vai ser mais elaborada)



### Bugs:
> Existe um bug com o vue-router, em alguns momentos ele exibe um erro apontando que o Router é undefined
já analisei o bug por muito tempo e "corrigi" umas 3 vezes, porém ele retorna esporádicamente.
