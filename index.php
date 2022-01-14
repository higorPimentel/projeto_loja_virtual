<?php

         
          include_once('includes/topo.php');
          include_once('includes/header.php');
          include_once('includes/script.php');  
          include_once('includes/modal_produto.php');

?>

<body>

            <form class="frm_registro frm_produtos">

                   <h1 class='tit_frm tits_ff'><div class='cont_img_section'><img class ='img_section' src="img/img_destaque3.png" alt=""></div> Lançamentos e Destaques</h1>
                        <div class='barra_sepra br_sp'></div>
                       
                        <div class="row cont_lancamento bl_lanc">
                              <input class='btns_blocs btns_next' type="button" value='&#187;' id='btn_lanc_next'>
                                  <input class='btns_blocs btns_previous' type="button" value='&#171;' id='btn_lanc_previous'>	
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

                     <h1 class='tit_frm tits_ff'><div class='cont_img_section'><img class ='img_section' src="img/img_oferta_2.png" alt=""></div>Promoções e Ofertas</h1>
                        <div class='barra_sepra br_sp'></div>
                       
                        <div class="row cont_lancamento bl_oferta">
                              <input class='btns_blocs btns_next' type="button" value='&#187;' id='btn_oferta_next'>
                                  <input class='btns_blocs btns_previous' type="button" value='&#171;' id='btn_oferta_previous'>	
                                       <div class="grupo_cxs col-6">                           
                                          <div class="row grup_ofertas">	                                              
                                          
                                           </div>
                              </div>
                     </div>

                     <h1 class='tit_frm' id='tit_tds'><div class='cont_img_section'><img class ='img_section' src="img/img_todos.png" alt=""></div>Todos os Produtos</h1>
                        <div class='barra_sepra'></div>
                       
                        <div class="row cont_lancamento">
                              <input class='btns_blocs btns_next' type="button" value='&#187;' id='btn_tds_next'>
                                  <input class='btns_blocs btns_previous' type="button" value='&#171;' id='btn_tds_previous'>	
                                       <div class="grupo_cxs col-6">                           
                                          <div class="row grup_tds">	                                              
                                          
                                           </div>
                              </div>
                     </div>

             </form>

          <script>

         let btn_lanc_next = document.querySelector('#btn_lanc_next')
         btn_lanc_next.addEventListener('click', next_item_prodt)

         let btn_lanc_previous = document.querySelector('#btn_lanc_previous')
         btn_lanc_previous.addEventListener('click', previous_item_prodt)

       
       
         let btn_oferta_next = document.querySelector('#btn_oferta_next')
         btn_oferta_next.addEventListener('click', next_item_oferta)

         let btn_oferta_previous = document.querySelector('#btn_oferta_previous')
         btn_oferta_previous.addEventListener('click', previous_item_oferta)


         let btn_tds_next = document.querySelector('#btn_tds_next')
         btn_tds_next.addEventListener('click', next_item_tds)

         let btn_tds_previous = document.querySelector('#btn_tds_previous')
         btn_tds_previous.addEventListener('click', previous_item_tds)

         let cx_pesquisa = document.querySelector("#cx_pesquisa")
          cx_pesquisa.addEventListener('keyup', filter_item_enter)

          let btn_pesquisa = document.querySelector("#btn_pesquisa")
          btn_pesquisa.addEventListener('click', filter_item_bttn)


          
         
         
               window.addEventListener('resize',resize_home)
               window.addEventListener('load',inicia_app_indx)


                    function inicia_app_indx() {
                         qtd_prodts_bloc = 4
                         pg_itens = 0

                         qtd_prodts_bloc_ofertas = 4
                         pg_itens_ofertas = 0

                         
                         qtd_prodts_bloc_tds = 4
                         pg_itens_tds = 0


                         $('#cont_cx_pesquisa').css('display','inline-block')

                         pesquisa_inf = ""
                         pesquisa_listagem = 0
                         load_prodts()
                    }
          </script>

</body>
</html>