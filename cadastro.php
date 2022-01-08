<?php

        
        include_once('includes/script.php');  
        include_once('includes/topo.php');
        include_once('includes/header.php');
        include_once('includes/barra_opcoes.php');

?>

<body>

        <form class="frm_registro frm_produtos">
				
                <h1 class='tit_frm'>Cadastro de Produtos</h1>

                <div class='barra_sepra'></div>
                    
                    <div class="row">	
                            <div class="grupo_cxs col-4" id="grupo_cx_nome">
                                <label class='lb_text'>Nome Produto</label>
                                <input class="cx_text" type="text" id="cx_nome" autofocus>											
                            </div>	
                            <div class="grupo_cxs col-3" id="grupo_cx_nome">
                                 <label class='lb_text tit_img'>Selecionar Imagem Produto</label>
                                <div class='container_img_prod'><img src="img/img_prod_default.png" class='img_prod'></div>											
                            </div>	
                    </div>

                    <div class="row">	
                            <div class="grupo_cxs col-3" id="grupo_cx_nome">
                                <label class='lb_text'>Preço</label>
                                <input class="cx_text" type="text" id="cx_preco" >											
                            </div>	

                            <div class="grupo_cxs col-3" id="grupo_cx_nome">
                                <label class='lb_text'>Desconto</label>
                                <input class="cx_text" type="text" id="cx_desconto" >											
                            </div>

                            <div class="grupo_cxs col-3" id="grupo_cx_nome">
                                <label class='lb_text'>Valor Produto</label>
                                <input class="cx_text" type="text" id="cx_vlr_liquido" disabled>											
                            </div>

                    </div>

                    <div class="row">	
                    
                            <div class="grupo_cxs col-6" id="grupo_cx_nome">
                                <label class='lb_text'>Qtd. Estoque</label>
                                <input class="cx_text" type="text" id="cx_qtd_estoque" >											
                            </div>	
                    </div>

                    <div class="row">	
                            <div class="grupo_cxs col-6" id="grupo_cx_nome">
                                <label class='lb_text'>Inserir Produto em Destaque:</label>
                                    <input type="checkbox" name='Sim' id='check_prod_destaq'>       
                                   <label class='lb_text'>Sim</label>
                            </div>	
                    </div>

                    <div class="row">	
                            <div class="grupo_cxs col-6" id="grupo_cx_nome">
                                <label class='lb_text'>Formas de Pagamento:</label>
                                    <input type="checkbox" id='check_frma_pgt_todas'>       
                                    <label class='lb_text'>Todas</label>
                                
                                    <input type="checkbox" id='check_frma_pgt_boleto'>       
                                    <label class='lb_text'>Boleto</label>

                                   <input type="checkbox" id='check_frma_pgt_credito'>       
                                   <label class='lb_text'>Crédito</label>

                                   <input type="checkbox" id='check_frma_pgt_transferencia'>       
                                   <label class='lb_text'>Trânsferencia</label>

                                   <input type="checkbox" id='check_frma_pgt_pix'>       
                                   <label class='lb_text'>Pix</label>
                            </div>	
                    </div>

                    <div class="row">	
                            <div class="grupo_cxs col-6" id="grupo_cx_nome">
                                <label class='lb_text'>Descrição</label>
                                  <textarea class="cx_text" id="cx_descricao"></textarea>											
                            </div>	
                    </div>
        </form>


        
        <script>

            let cx_preco = document.querySelector('#cx_preco')
            cx_preco.addEventListener('blur', insere_vlr_prod)


            let cx_desconto = document.querySelector('#cx_desconto');
            cx_desconto.addEventListener('blur', calc_desconto)

            let check_frma_pgt_todas = document.querySelector('#check_frma_pgt_todas')
            check_frma_pgt_todas.addEventListener('click', select_opcs_pgto)

            let txt_focus = document.querySelector(".frm_registro")

            txt_focus.addEventListener('focus', insere_foco_txt,true)
            txt_focus.addEventListener('blur', remove_foco_txt,true)


        </script>
  <?php 
        
  ?>      
    
</body>
</html>