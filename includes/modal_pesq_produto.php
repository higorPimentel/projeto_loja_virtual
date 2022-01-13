<div class='container_modal container_modal_alt'>

        <form class="frm_registro frm_pesquisa">


	                <div class="row">	
                           <div class="grupo_cxs col-6" id="grupo_cx_id">
                                <label class='lb_text'>Consultar pelo Id</label>                              
                           </div>	
                        </div>	
                        <div class="row">	
                           <div class="grupo_cxs col-6" id="grupo_cx_id">
                                   <input class="cx_text" type="text" id="cx_pesquisa_produto">											
                          </div>
                        </div>
                        <div class="row">	
                                <div class="grupo_cxs col-6 grup_btns">
                                        <input class='btns_comp comp_efetiv' id='btn_efetiva_compra' type="button" value='Pesquisar'> 
                                        <input class='btns_comp comp_efetiv' id='btn_cancela_edit' type="button" value='Cancelar'> 
                                </div>
                        </div>
                     
        </form>

        <script>              


                let btn_cancela_compra = document.querySelector('#btn_cancela_edit')
                btn_cancela_compra.addEventListener('click', cancela_edit)

                let btn_efetiva_compra = document.querySelector('#btn_efetiva_compra')
                btn_efetiva_compra.addEventListener('click', efetiva_pesquisa)




        </script>

</div>