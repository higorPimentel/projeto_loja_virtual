# projeto_loja_virtual

Aplicação Desenvolvida em PHP, Javascript e Mysql, para Cadastrar produtos, sendo esses disponibilizados para venda (desde que tenha saldo em estoque).

Ambiente teste : http://gestaodefretes.online/projeto_loja_virtual/

-----------------------

**INICIANDO A APLICAÇÃO**

Para iniciar a aplicação, é necessario criar a base de dados em mysql, conforme o arquivo disponibilizado nesse repositório (create_database.sql).
Criação da tabela no arquivo (create_table.sql).
Foi disponibilizado também uma tabela com 15 registros para ser inputado na base de dados (input_data.sql).

* configurando conexão com a base de dados.

Para configurar os dados de conexão com a base de dados, acesse o arquivo no diretório: modulos/cn.php.

![Captura de tela 2022-01-13 012857](https://user-images.githubusercontent.com/49642934/149266093-020f72f1-35a2-42f5-8f0a-b0d14ab15b37.png)


-----------------------

**TELA INICIAL**

A tela inicial exibe os registros em 3 categorias. 

* Lançamentos e Destaques
* Promoções e Ofertas
* Todos os Produtos

As categorias "Lançamentos e Destaques" &  "Promoções e Ofertas", só exibira um determinado produto desde que seja especificado no cadastro (Essa identificação ocorre por um checkbox).

NA tela inicial, também é possivel pesquisar por um produto digitando o nome, ou somente parte do nome. Conforme no exemplo abaixo (pesquisa feito pelo nome "acer", retornou 3 produtos cadastrados.

![Captura de tela 2022-01-13 005859](https://user-images.githubusercontent.com/49642934/149263516-50c56195-8f23-4fc3-97c8-d363a79988f3.png)


-----------------------

**CADASTRO**

A tela de cadastro permite realizar o cadastro de novos produtos e fazer a  Edição dos registros que já foram cadastrados.

* Opção Novo

Ao acessar a pagina de cadastro, a opação "novo" já está selecionado.
Realize o preenchimento dos dados.
Para vincular uma imagem ao produto cadastrado, selecione a imagem através do botão (escolher Ficheiro), em seguida clique em definir imagem Cadastro.
ao finalizar o preenchimento e ter selecionado a imagem pressione o botão confirmar para efetivar o cadastro (A seleção de imagem de produto é opcional).

![cadastro_produto](https://user-images.githubusercontent.com/49642934/149070106-3bcd9e6e-d028-415a-bd11-d74aaa97ea4b.png)


* Opção Editar

Ao clicar na opção "Editar produto", será exibido um pop up com o campo de pesquisa (é possivel pesquisar o produto somente pelo id - numero de identificação. Caso precise, acesse a pagina relatório para localizar o id de um determinado produto).

Caso a pesquisa sejá concluída com exito, será exibido os dados do registro pesquisado. Realize as alterações necessária e clique em confirmar para efetivar as alterações.


![Captura de tela 2022-01-13 011951](https://user-images.githubusercontent.com/49642934/149265386-e0e76b23-588b-4738-815d-4ca69028bac7.png)

![Captura de tela 2022-01-13 012032](https://user-images.githubusercontent.com/49642934/149265395-923190da-d2d9-46a0-8254-6e64846dbd51.png)


-----------------------

**RELATÓRIO**

A tela de Relatório exibe uma listagem de todos os registros.



![Captura de tela 2022-01-13 012209](https://user-images.githubusercontent.com/49642934/149265508-1d39fc6e-9a7d-4fea-a006-82c65ebc63bf.png)

