<?php

          include_once('includes/script.php');  
          include_once('includes/topo.php');
          include_once('includes/header.php');

?>

<body>

            <form class="frm_registro frm_produtos">

                   <h1 class='tit_frm'>&#10004;Lançamentos e Destaques</h1>
                        <div class='barra_sepra'></div>
                       
                        <div class="row cont_lancamento">
                              <input class='btns_blocs' type="button" value='>' id='btn_cont_lanc_next'>
                                  <input class='btns_blocs' type="button" value='<' id='btn_cont_lanc_previous'>	
                                       <div class="grupo_cxs col-6">                           
                                          <div class="row grup_lanc">	
                                                <!--  
                                                  <div class="grupo_cxs col-2-2" >
                                                        <div class='container_prod'>
                                                               <div class='cont_img_prod'>
                                                                      <img src="img/img_prod_default.png" class='img_prod_it'>
                                                               </div>   
                                                               <div class='nme_prod_it itns_prod'>
                                                                      Produto Teste Teste
                                                               </div> 
                                                               <div class='preco_prod_it itns_prod'>
                                                                    <s> De: R$ 100,00 </s>
                                                               </div> 
                                                               <div class='preco_prod_it_liq itns_prod'>
                                                                    Por: R$ 50,00 
                                                               </div> 
                                                               <div class='forma_pgto itns_prod'>
                                                                    Formas de Pagamento: Crédito, Pix
                                                               </div>
                                                               <div class='desc_item itns_prod'>
                                                                    Descrição Item
                                                               </div>
                                                               <div class='cont_btn_comp'>
                                                                    <input class='btns_comp' type="button" value='Comprar'> 
                                                               </div> 
                                                        </div>
                                                 </div>

                                                 -->
                                          
                                           </div>
                              </div>
                     </div>

             </form>

          <script>

         let btn_cont_lanc_next = document.querySelector('#btn_cont_lanc_next')
         btn_cont_lanc_next.addEventListener('click', next_item_prodt)

               window.addEventListener('load',inicia_app_indx)


                    function inicia_app_indx() {
                         qtd_prodts_bloc = 4
                         pg_itens = 0
                         load_prodts()
                    }
          </script>

</body>
</html>