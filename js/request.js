
let btn_cadastra = document.querySelector('#btn_cadastra')
btn_cadastra.addEventListener('click', cadastrar_item)

let check_frma_pgt_todas = document.querySelector('#check_frma_pgt_todas')
check_frma_pgt_todas.addEventListener('click', select_opcs_pgto)


function select_opcs_pgto() {

    let check_frma_pgt_todas = $('#check_frma_pgt_todas').is(':checked');

    if(check_frma_pgt_todas == true) {
        opc_pgto = true
    } else {
        opc_pgto = false
    }

    
    $('#check_frma_pgt_boleto').prop('checked',opc_pgto);
    $('#check_frma_pgt_credito').prop('checked',opc_pgto);
    $('#check_frma_pgt_transferencia').prop('checked',opc_pgto);
    $('#check_frma_pgt_pix').prop('checked',opc_pgto);



    
}

function cadastrar_item() {
    

    // define o tipo de requisição - Cadastro de produtos
    let tipo_requisicao = 1



    // se variavel  = 0, há campos em branco no formulario, execução é finalizada
    // se  variavel  = 1, todos os campos estão preenchidos, execução prossegue com o cadastro
    var_valid_form = 0
        

        criar_objt_frm()
            valid_frm()


                if(var_valid_form == 0) {
                    $('.msg_erro').html('Preencha todos os campos para prosseguir!!!') 
                    exibe_erro()
                    return
                } 



                $.ajax({
                    method:'POST',
                    url:'modulos/functions.php',
                    data:
                    {
                        tipo_requisicao:tipo_requisicao,
                        objt_frm_cad:objt_frm_cad  
                    },
                    success:function(retorno) {
                        
                        if(retorno == 1) {
                            $('.msg_sucesso').html('Registro cadastrado com exito.') 
                            exibe_sucess()
                            limpar_form()
                            $('#cx_nome').focus()
                         //   carregar_registros ()
                        } else {

                            $('.msg_erro').html('Erro ao cadastrar Material.Contate o Desenvolvedor!!!') 
                            exibe_erro()

                        }

                        

                    }
                })    


}


function limpar_form() {

     $('#cx_nome').val('')
     $('#cx_preco').val('')
     $('#cx_desconto').val('')
     $('#cx_vlr_liquido').val('')
     $('#cx_qtd_estoque').val('')
     $('#cx_descricao').val('')

}

function criar_objt_frm() {

    let cx_nome = $('#cx_nome').val()
    let cx_preco = $('#cx_preco').val()
    let cx_desconto = $('#cx_desconto').val()
    let cx_vlr_liquido = $('#cx_vlr_liquido').val()
    let cx_qtd_estoque = $('#cx_qtd_estoque').val()
    let cx_descricao = $('#cx_descricao').val()

    
    let check_prod_destaq = $('#check_prod_destaq').is(':checked');
    let check_frma_pgt_boleto = $('#check_frma_pgt_boleto').is(':checked');
    let check_frma_pgt_credito = $('#check_frma_pgt_credito').is(':checked');
    let check_frma_pgt_transferencia = $('#check_frma_pgt_transferencia').is(':checked');
    let check_frma_pgt_pix = $('#check_frma_pgt_pix').is(':checked');

    let txt_formas_pgto  = "Boleto"



        if(check_prod_destaq == true) {
            txt_produto_destaque = 1 
        } else {
            txt_produto_destaque = 0
        }


        if(check_frma_pgt_boleto ==true) {
            txt_formas_pgto ='';
            txt_formas_pgto +='Boleto'
        }

        if(check_frma_pgt_credito ==true) {
           txt_formas_pgto +=',Crédito'
        }

        if(check_frma_pgt_transferencia ==true) {
            txt_formas_pgto +=',Transferência'
         }

         if(check_frma_pgt_pix ==true) {
            txt_formas_pgto +=',Pix'
         }


    
    objt_frm_cad   = {
        cx_nome:cx_nome,
        cx_preco:cx_preco,
        cx_desconto:cx_desconto,
        cx_vlr_liquido:cx_vlr_liquido,
        cx_qtd_estoque:cx_qtd_estoque,
        cx_descricao:cx_descricao,
        txt_produto_destaque:txt_produto_destaque,
        txt_formas_pgto:txt_formas_pgto
        }

               
    

}


function valid_frm() {

    if(!objt_frm_cad.cx_nome || !objt_frm_cad.cx_preco ||
       !objt_frm_cad.cx_desconto || !objt_frm_cad.cx_vlr_liquido ||
       !objt_frm_cad.cx_qtd_estoque || !objt_frm_cad.cx_descricao) 
       {
        var_valid_form = 0
       } else {
        var_valid_form = 1    
       }    
    

}