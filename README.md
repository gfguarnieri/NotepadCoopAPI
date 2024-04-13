# App

:construction: em andamento.
## Requisitos funcionais
- [x] Deve ser possível criar usuário
- [x] Deve ser possível autenticar um usuário por meio de email e senha
- [ ] Deve ser possível cadastrar documento
- [ ] Deve ser possível remover documento
- [ ] Deve ser possível alterar documento
- [ ] Deve ser possível alterar item de documento
- [ ] Deve ser possível remover item de documento
 
## Regras de negócio
- [ ] Somente o proprietário do documento poderá alterar o título do documento.
- [ ] Somente o proprietário do documento poderá apagar o documento.
- [ ] Diversos usuários podem alterar o mesmo documento.
- [x] O websocket somente deverá funcionar se tiver o usuário tiver um token válido.

## Requisitos não funcionais
- [x] Utilizar websocket (fastify) para permitir alteração simultânea de documentos.
- [x] Simular comportamento de banco de dados não relacional através de arquivos JSON.
- [x] Deixar serviços desacoplados das implementações.


## Configuração do projeto
:construction: em andamento.