<?php

          include_once('includes/script.php');  
          include_once('includes/topo.php');
          include_once('includes/header.php');
          include_once('includes/modal_produto.php');

?>

<body>

            <form class="frm_registro frm_produtos">

                 <div class='bloco_inf_list'>                                     
                    <div class='tit_list'>Total Registros Listados: </div><div class='vlr_tit_list'>0000</div>
               </div>
               <div  class="row">	
                    <div class="grupo_cxs col-6" id="grupo_cx_id">
                    
                         <div class='container_table'>
                                   <table id='table_list'  class='frmt_tabela_fretes'>
                                        
                                   </table>
                         </div>
                    </div>
               </div>

               

             </form>

          <script>

      
               
         
               window.addEventListener('load',inicia_app_list)


                    function inicia_app_list() {
                                                 
                         
                         pesquisa_listagem = 1
                         load_prodts()
                         
                    }
          </script>

</body>
</html>