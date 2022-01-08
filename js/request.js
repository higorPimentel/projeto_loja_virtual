

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


function next_item_prodt() {

    pg_itens ++
    ittm_max = qtd_prodts_bloc + pg_itens
      
        if(ittm_max  == data_return_lanc.length + 1) {
            pg_itens = 0    
        }
        insere_prodts_cont_lanc()

}

function load_prodts() {

 // define o tipo de requisição - LOAD PRODUTOS
 let tipo_requisicao = 2


             $.ajax({
                 method:'POST',
                 url:'modulos/functions.php',
                 data:
                 {
                     tipo_requisicao:tipo_requisicao                  
                 },
                 success:function(retorno) {

                        data_return = JSON.parse(retorno)
                       
                        define_itens_lanc()
                        insere_prodts_cont_lanc()

                        define_itens_ofertas()
                        insere_prodts_cont_ofertas()
                     
                        //console.log(data_return)                     

                 }
             })    


}

function define_itens_lanc() {

    data_return_lanc = [];
    
    for (let i = 0; i < data_return.length; i++) { 

        if(data_return[i].def_produto_destaque ==1) { 

            data_return_lanc.push(data_return[i])
        }


    }


}


function insere_prodts_cont_lanc() {


    let string_info = ''

    $(".grup_lanc").html(''); 
    
    for (let i = 0 + pg_itens; i < qtd_prodts_bloc + pg_itens; i++) {       
        
        
    
        path_img = 'img/img_prod_default.png'
        nme_produto = data_return_lanc[i].nome
        preco_item =  data_return_lanc[i].preco
        vlr_liq_prod = data_return_lanc[i].vlr_liquido_produto
        frms_pgto = data_return_lanc[i].formas_pgto
        descricao_item =  data_return_lanc[i].descricao

           
    
         string_info =  "<div class='grupo_cxs col-2-2'>" + 
        "<div class='container_prod'>" + 
               "<div class='cont_img_prod'>" +
                    "<img src='" + path_img + "' class='img_prod_it'>" + 
               "</div>" +    
               "<div class='nme_prod_it itns_prod'>" + 
                      nme_produto + 
               "</div>" +  
             
             
             // VALIDAR SE O ITEM TEM DESCONTO
               "<div class='preco_prod_it itns_prod'>" + 
                    "<s> De:"  + preco_item + "</s>" + 
              "</div>" +  
               "<div class='preco_prod_it_liq itns_prod'>" + 
                    "Por: " +  vlr_liq_prod +  
               "</div>" +  
               
               
               "<div class='forma_pgto itns_prod'>" + 
                    "Formas de Pagamento: "  + frms_pgto + 
               "</div>" + 
               "<div class='desc_item itns_prod'>" + 
                      "Descrição: " +  descricao_item + 
               "</div>" + 
               "<div class='cont_btn_comp'>" + 
                    "<input class='btns_comp' type='button' value='Comprar'>" +  
               "</div>" + 
        "</div>" 
        
        $(string_info).appendTo(".grup_lanc"); 

    }

}


function define_itens_ofertas() {

    data_return_ofertas = [];
    
    for (let i = 0; i < data_return.length; i++) { 

        if(data_return[i].def_produto_ofertas ==1) { 

            data_return_ofertas.push(data_return[i])
        }

    }

}


function insere_prodts_cont_ofertas() {


    let string_info = ''

    $(".grup_ofertas").html(''); 
    //console.log(data_return_ofertas)
    
    for (let i = 0 + pg_itens_ofertas; i < qtd_prodts_bloc_ofertas + pg_itens_ofertas; i++) {       
        
        
        //console.log("i - " + i)
        path_img = 'img/img_prod_default.png'
        nme_produto = data_return_ofertas[i].nome
        preco_item =  data_return_ofertas[i].preco
        vlr_liq_prod = data_return_ofertas[i].vlr_liquido_produto
        frms_pgto = data_return_ofertas[i].formas_pgto
        descricao_item =  data_return_ofertas[i].descricao
    
    
         string_info =  "<div class='grupo_cxs col-2-2'>" + 
        "<div class='container_prod'>" + 
               "<div class='cont_img_prod'>" +
                    "<img src='" + path_img + "' class='img_prod_it'>" + 
               "</div>" +    
               "<div class='nme_prod_it itns_prod'>" + 
                      nme_produto + 
               "</div>" +  
             
             
             // VALIDAR SE O ITEM TEM DESCONTO
               "<div class='preco_prod_it itns_prod'>" + 
                    "<s> De:"  + preco_item + "</s>" + 
              "</div>" +  
               "<div class='preco_prod_it_liq itns_prod'>" + 
                    "Por: " +  vlr_liq_prod +  
               "</div>" +  
               
               
               "<div class='forma_pgto itns_prod'>" + 
                    "Formas de Pagamento: "  + frms_pgto + 
               "</div>" + 
               "<div class='desc_item itns_prod'>" + 
                      "Descrição: " +  descricao_item + 
               "</div>" + 
               "<div class='cont_btn_comp'>" + 
                    "<input class='btns_comp' type='button' value='Comprar'>" +  
               "</div>" + 
        "</div>" 
        
        $(string_info).appendTo(".grup_ofertas"); 

    }

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
    let check_prod_ofertas = $('#check_prod_ofertas').is(':checked');
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

      
        if(check_prod_ofertas == true) {
            txt_produto_ofertas = 1 
        } else {
            txt_produto_ofertas = 0
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
        txt_produto_ofertas:txt_produto_ofertas,
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