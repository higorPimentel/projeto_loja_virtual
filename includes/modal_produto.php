<div class='container_modal'>

        <form class="frm_registro frm_produtos_eftiv">

                <h1 class='tit_frm produtos_eftiv'>Nome Prod</h1>
                <!-- <input type="button" value='X' id='btn_fechar'> -->
                <div class='barra_sepra barr2'></div>

                <div class="grupo_cxs col-6" >
                        <div class='container_prodts'>
                                <div class="row grup_prod_efetiv">	                                
                                </div>
                        </div>
                </div> 



                       
                        <input class='btns_comp comp_efetiv' id='btn_efetiva_compra' type="button" value='Efetivar Compra'> 
                        <input class='btns_comp comp_efetiv' id='btn_cancela_compra' type="button" value='Cancelar'> 
                     
        </form>

        <script>              


                let btn_cancela_compra = document.querySelector('#btn_cancela_compra')
                btn_cancela_compra.addEventListener('click', cancela_compra)

                let btn_efetiva_compra = document.querySelector('#btn_efetiva_compra')
                btn_efetiva_compra.addEventListener('click', efetv_compra)




        </script>

</div>