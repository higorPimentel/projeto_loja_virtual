<div class='container_barra_opc'>


    <nav class='container_opcs'>
        <li>
            <ul class = 'opcs' id='opc_novo'>Novo</ul>
            <ul class = 'opcs' id='opc_edit'>Editar Produto</ul>
        </li>
    </nav>

    <div class='container_btns'>
        <input class='btns' type="button" value='Confirmar' id='btn_cadastra'>
        <input class='btns' type="button" value='Cancelar'>
    </div>

    <script >

        let select_opc = document.querySelector(".container_opcs")
        select_opc.addEventListener('click', select_opcs)

        let btn_cadastra = document.querySelector('#btn_cadastra')
         btn_cadastra.addEventListener('click', processa_solicitacao)



   
 
 function select_opcs(event) {

            let elemnt =  event.srcElement.id
            let  type_element  = elemnt.substr(0,3) 


            if(type_element =='opc') {

                $('.opcs').css('border','none')
                $('.opcs').css('backgroundColor','white')



                $(`#${elemnt}`).css('border-right','1px solid #0078d4')
                $(`#${elemnt}`).css('border-left','1px solid #0078d4')
                $(`#${elemnt}`).css('border-top','3px solid #0078d4')
                $(`#${elemnt}`).css('background-color','rgb(240, 240, 240)')


                            if(elemnt == 'opc_novo') {
                                opc_select = 1
                                $('.tit_frm').text('Cadastro de Produtos')
                                limpar_form()
                                $('#cx_nome').focus()
                            } else if(elemnt == 'opc_edit')  {
                              
                                opc_select = 2
                                $('.tit_frm').text('Editar Produtos')
                                $(".container_modal").css('display','block'); 

                               
                            }



                }
}

    </script>
</div>