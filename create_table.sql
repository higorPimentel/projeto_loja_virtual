CREATE TABLE tb_produtos (
  id_produto int(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(150) DEFAULT NULL,
  preco DECIMAL(7,2) DEFAULT NULL,
  vlr_desconto DECIMAL(7,2) DEFAULT NULL,
  vlr_liquido_produto DECIMAL(7,2) DEFAULT NULL,
  qtd_estoque int(11) DEFAULT NULL,
  def_produto_destaque CHAR(1) DEFAULT NULL,
  def_produto_ofertas CHAR(1) DEFAULT NULL,
  formas_pgto VARCHAR(150) DEFAULT NULL,
  descricao	 VARCHAR(300) DEFAULT NULL,
  path_imagem VARCHAR(100) DEFAULT NULL,
  data_cadastro VARCHAR(10) DEFAULT NULL,
  PRIMARY KEY (id_produto)
) ENGINE=InnoDB  DEFAULT CHARSET=UTF8MB4;