


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


function next_item_tds() {

    pg_itens_tds ++
   let ittm_max = qtd_prodts_bloc_tds + pg_itens_tds

       
        if(ittm_max  == data_return.length + 1) {
            pg_itens_tds = 0    
        }
        insere_prodts_cont_tds()

}

function previous_item_tds() {

    pg_itens_tds --
    let ittm_max = qtd_prodts_bloc_tds + pg_itens_tds

       
    if(pg_itens_tds == -1) {
        pg_itens_tds = 0
    }
      

        if(ittm_max  == 3) {
            pg_itens_tds = 0   
        }
        insere_prodts_cont_tds()

}



function next_item_prodt() {

    pg_itens ++
   let ittm_max = qtd_prodts_bloc + pg_itens

       
        if(ittm_max  == data_return_lanc.length + 1) {
            pg_itens = 0    
        }
        insere_prodts_cont_lanc()

}

function previous_item_prodt() {

    pg_itens --
    let ittm_max = qtd_prodts_bloc + pg_itens

       
    if(pg_itens == -1) {
        pg_itens = 0
    }
      

        if(ittm_max  == 3) {
            pg_itens = 0   
        }
        insere_prodts_cont_lanc()

}


function next_item_oferta() {

    pg_itens_ofertas ++
    let ittm_max = qtd_prodts_bloc_ofertas + pg_itens_ofertas

       
        if(ittm_max  == data_return_ofertas.length + 1) {
            pg_itens_ofertas = 0    
        }

        insere_prodts_cont_ofertas()

}

function previous_item_oferta() {

    pg_itens_ofertas --
    let ittm_max = qtd_prodts_bloc_ofertas + pg_itens_ofertas
      

    if(pg_itens_ofertas == -1) {
        pg_itens_ofertas     = 0
    }

        if(ittm_max  == 3) {
            pg_itens_ofertas = 0   
        }

        insere_prodts_cont_ofertas()

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
                       
                                             
                   if(pesquisa_listagem == 0) {

                        define_itens_lanc()
                        insere_prodts_cont_lanc()

                        define_itens_ofertas()
                        insere_prodts_cont_ofertas()

                  
                        insere_prodts_cont_tds()

                   } else if (pesquisa_listagem == 1) {
                        
                        montar_table_list()

                   } 
                        
                                     

                 }
             })    


}


function insere_prodts_cont_tds() {


    let string_info = ''

    $(".grup_tds").html(''); 
    
    for (let i = 0 + pg_itens_tds; i < qtd_prodts_bloc_tds + pg_itens_tds; i++) {       
        
        
    
        path_img = data_return[i].path_imagem

        nme_produto = data_return[i].nome
        preco_item =  data_return[i].preco
        vlr_liq_prod = data_return[i].vlr_liquido_produto
        frms_pgto = data_return[i].formas_pgto
        
            if(frms_pgto.length == 6 ) {
                frms_pgto =  "Somente " +  frms_pgto 
            }
       
       
            
            if(data_return[i].qtd_estoque > 0) {

                descricao_item_lanc =  "<div class='tit-ittms'>Descrição: </div>" + data_return[i].descricao.substr(0,10) + "..."
                btn_comp_lanc = "<input onclick='efetiva_compra(" + data_return[i].id_produto + ")'  class='btns_comp' type='button' value='Comprar'>"   
            } else {
                descricao_item_lanc = "<div class='ittm_inform_n'> Produto Indisponível </div>"  
                btn_comp_lanc = "<input onclick='efetiva_compra(" + data_return[i].id_produto + ")'  class='btns_comp_indisp' type='button' value='Detalhar'>" 
            }
       
       

           
    
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
                    "<s>De: R$ "  + preco_item + "</s>" + 
              "</div>" +  
               "<div class='preco_prod_it_liq itns_prod'>" + 
                    "<div class='tit-ittms'>Por: </div>" + " R$ " +   vlr_liq_prod +  
               "</div>" +  
               
               
               "<div class='forma_pgto itns_prod'>" + 
                    "<div class='tit-ittms'>Formas de Pagamento: </div>"  + frms_pgto + 
               "</div>" + 
              
              //SE O PRODUTO ESTIVER ZERADO, NÃO DISPONIBILIZA BTN COMPRA
               "<div class='desc_item itns_prod'>" + 
                      descricao_item_lanc + 
               "</div>" + 
               "<div class='cont_btn_comp'>" + 
                    btn_comp_lanc
               "</div>" + 
        "</div>" 
        
        $(string_info).appendTo(".grup_tds"); 

    }

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
        
        
    
        path_img = data_return_lanc[i].path_imagem

        nme_produto = data_return_lanc[i].nome
        preco_item =  data_return_lanc[i].preco
        vlr_liq_prod = data_return_lanc[i].vlr_liquido_produto
        frms_pgto = data_return_lanc[i].formas_pgto
        
            if(frms_pgto.length == 6 ) {
                frms_pgto =  "Somente " +  frms_pgto 
            }
       
       
            
            if(data_return_lanc[i].qtd_estoque > 0) {

                descricao_item_lanc =  "<div class='tit-ittms'>Descrição: </div>" + data_return_lanc[i].descricao.substr(0,10) + "..."
                btn_comp_lanc = "<input onclick='efetiva_compra(" + data_return_lanc[i].id_produto + ")'  class='btns_comp' type='button' value='Comprar'>"   
            } else {
                descricao_item_lanc = "<div class='ittm_inform_n'> Produto Indisponível </div>"  
                btn_comp_lanc = "<input onclick='efetiva_compra(" + data_return_lanc[i].id_produto + ")'  class='btns_comp_indisp' type='button' value='Detalhar'>" 
            }
       
       

           
    
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
                    "<s>De: R$ "  + preco_item + "</s>" + 
              "</div>" +  
               "<div class='preco_prod_it_liq itns_prod'>" + 
                    "<div class='tit-ittms'>Por: </div>" + " R$ " +   vlr_liq_prod +  
               "</div>" +  
               
               
               "<div class='forma_pgto itns_prod'>" + 
                    "<div class='tit-ittms'>Formas de Pagamento: </div>"  + frms_pgto + 
               "</div>" + 
              
              //SE O PRODUTO ESTIVER ZERADO, NÃO DISPONIBILIZA BTN COMPRA
               "<div class='desc_item itns_prod'>" + 
                      descricao_item_lanc + 
               "</div>" + 
               "<div class='cont_btn_comp'>" + 
                    btn_comp_lanc
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

function efetiva_compra(id_comp) {



        for (let j = 0; j < data_return.length; j++) {
           

            if(data_return[j].id_produto ==id_comp) {
               
                $(".container_modal").css('display','block'); 

                path_img = data_return[j].path_imagem
                nme_produto = data_return[j].nome
                preco_item =  data_return[j].preco
                vlr_liq_prod = data_return[j].vlr_liquido_produto
                frms_pgto = data_return[j].formas_pgto
                descricao_item_ofert  =  data_return[j].descricao
                qtd_estoque = data_return[j].qtd_estoque
                id_prodt = data_return[j].id_produto



                tot_comp = vlr_liq_prod
                tot_comp  =  tot_comp.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
             
                string_info =  "<div class='grupo_cxs col-6'>" + 
                "<div class='container_prodts'>" + 
                       "<div class='cont_img_prod_efetiv'>" +
                            "<img src='" + path_img + "' class='img_prod_efetiv'>" + 
                       "</div>" +    
                    
                     
                     // VALIDAR SE O ITEM TEM DESCONTO
                       "<div class='preco_prod_it itns_prodts'>" + 
                            "<s> De:"  + preco_item + "</s>" + 
                      "</div>" +  
                       "<div class='preco_prod_it_liq itns_prodts'>" + 
                          "<div class='tit-ittms'> Por: </div>" +  vlr_liq_prod +  
                       "</div>" +  

                       "<div class='preco_prod_it_liq itns_prodts'>" + 
                         "<div class='tit-ittms'>Qtd. Disponivel: </div>" +  qtd_estoque +  
                       "</div>" +  
                       
                       
                       "<div class='forma_pgto itns_prodts'>" + 
                        "<div class='tit-ittms'> Formas de Pagamento: </div>"  + frms_pgto + 
                       "</div>" + 
                       "<div class='desc_item itns_prodts'>" + 
                       "<div class='tit-ittms'>Descrição Produto: </div>" +  descricao_item_ofert  +
                       "</div>" + 
                      "</div>"  + 

                      "<div class='barra_sepra barr2 barr3'></div>" + 
               
                
                      "<div class='row'>" + 
                              "<div class='grupo_cxs col-3 bloc_qtd_compra'>" +                          
                              "<label class='tit-ittms'>Qtd. Compra</label>" +
                              "<input onchange = 'altera_qtd_prodt()' type='range' min='1' max='" + qtd_estoque +"' value='1' id='inpt_rng_qtd'>" + 
                              "<input class='cx_text cxs_compra' type='text' id='cx_qtd_compra' value='0' disabled>" + 											
                              "</div>" +       
                      "</div>" + 

                      "<div class='row'>" + 
                      "<div class='grupo_cxs col-3 bloc_qtd_compra'>" +                          
                      "<label class='tit-ittms'>Total da Compra</label>" +
                      "<input class='cx_text cxs_compra' type='text' id='cx_total_compra' value='R$ 0' disabled>" + 											
                      "</div>" +       
                       "</div>" + 

              "<div class='barra_sepra barr2 barr3'></div>"
                
                $(string_info).appendTo(".grup_prod_efetiv"); 
                $(".produtos_eftiv").html(nme_produto); 
        



            }
            
        }



}


function insere_prodts_cont_ofertas() {


    let string_info = ''

    $(".grup_ofertas").html(''); 
    //console.log(data_return_ofertas)
    
    for (let i = 0 + pg_itens_ofertas; i < qtd_prodts_bloc_ofertas + pg_itens_ofertas; i++) {       
        
        
        //console.log("i - " + i)
       // path_img = 'img/img_prod_default.png'
        path_img = data_return_ofertas[i].path_imagem
        nme_produto = data_return_ofertas[i].nome
        preco_item =  data_return_ofertas[i].preco
        vlr_liq_prod = data_return_ofertas[i].vlr_liquido_produto
        frms_pgto = data_return_ofertas[i].formas_pgto
       
        if(frms_pgto.length == 6 ) {
            frms_pgto =  "Somente " +  frms_pgto 
        }


        if(data_return_ofertas[i].qtd_estoque > 0) {

            descricao_item_ofert =  "<div class='tit-ittms'>Descrição: </div>" + data_return_ofertas[i].descricao.substr(0,10) + "..."
            btn_comp_ofert = "<input onclick='efetiva_compra(" + data_return_ofertas[i].id_produto + ")'  class='btns_comp' type='button' value='Comprar'>"   
        } else {
            descricao_item_ofert = "<div class='ittm_inform_n'> Produto Indisponível </div>"  
            btn_comp_ofert = "<input onclick='efetiva_compra(" + data_return_ofertas[i].id_produto + ")'  class='btns_comp_indisp' type='button' value='Detalhar'>" 
        }
    

            //console.log(descricao_item_ofert)
    
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
                      descricao_item_ofert  +
               "</div>" + 
               "<div class='cont_btn_comp'>" + 
                      btn_comp_ofert  
               "</div>" + 
        "</div>" 
        
        $(string_info).appendTo(".grup_ofertas"); 

    }

}

function processa_solicitacao() {


    if(opc_select ==1) {

        cadastrar_item()

    } else if(opc_select ==2) {

        alterar_item()

    }


}


function alterar_item() {
    

    let tipo_requisicao = 7
    let id_produto_pesq = id_produto_pesquisado
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
                        id_produto_pesq,id_produto_pesq,
                        objt_frm_cad:objt_frm_cad  
                    },
                    success:function(retorno) {
                        
                        let return_req = JSON.parse(retorno)


                        if(return_req == 1) {
                            $('.msg_sucesso').html('Registro Atualizado com exito.') 
                            exibe_sucess()                            
                            limpar_form()
                            $('#cx_nome').focus()
                            

                        } else {

                            $('.msg_erro').html('Erro ao cadastrar Material.Contate o Desenvolvedor!!!') 
                            exibe_erro()

                        }

                        

                    }
                })    


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
                        
                        let return_req = JSON.parse(retorno)
                        id_cad_itm = return_req.id_ittm                          
                        
                        if(return_req.process == true) {
                            $('.msg_sucesso').html('Registro cadastrado com exito.') 
                            exibe_sucess()
                            envia_img_definitv()
                            limpar_form()
                            $('#cx_nome').focus()
                            

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
     $('#file_img_prodt').val('')

     $(".img_prod").attr('src','img/img_prod_default.png')	

     identific_img_select = 0



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

function select_img() {
   



    let fd = new FormData();
    let arquivos = $('#file_img_prodt')[0].files[0];	
     fd.append ('arquivo', arquivos);


    if(opc_select ==2) {

        $('.msg_erro').html('Opção indisponivel no modo de edição!!!') 
        exibe_erro()
        return

    }


     if(arquivos == undefined) {

        $('.msg_erro').html('Primeiro Selecione uma Imagem!!!') 
        exibe_erro()
        return
     }



     name_arquivo = arquivos.name 
     let qtd_caract = name_arquivo.length 
     let exten =  name_arquivo.substr(qtd_caract - 3,3)
     exten =  exten.toUpperCase()

       

     if(exten != 'PNG' && exten != 'JPG' && exten != 'JPEG' && exten != 'GIF' 
     && exten != 'BMP') {

        $('.msg_erro').html('Erro ao Definir a Imagem. Só é permitido arquivos nas extensões jpg - png - gif - bmp!!!') 
        exibe_erro()

        return

     }


    
                $.ajax({
                    url: 'modulos/img_temp.php',
                    type:'POST',
                    data:fd,
                    contentType: false,
                    processData: false,
                    success:function(retorno){ 

                      dir_destn = 'img_temp/' + name_arquivo 
                      $(".img_prod").attr('src',dir_destn)
                      dir_temp = retorno
                      identific_img_select = 1

                      

                                                                 
                    }

            })



}

function envia_img_definitv() {

    
   
    if(identific_img_select == 0) {
        return
    }


    let tipo_requisicao = 3;

                $.ajax({
                    method:'POST',
                    url:'modulos/functions.php',
                    data:
                    {
                        tipo_requisicao:tipo_requisicao,
                        dir_temp:dir_temp,
                        name_arquivo:name_arquivo,
                        id_cad_itm:id_cad_itm            
                    },
                    success:function(retorno) {
                        
                        
                                            
                    }

                    })



}


function altera_qtd_prodt() {
    
    let  qtd_select =  $('#inpt_rng_qtd').val() 
     let total_compra = qtd_select * vlr_liq_prod

     total_compra  =  total_compra.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    $('#cx_qtd_compra').val(qtd_select) 
    $('#cx_total_compra').val(total_compra) 
    
   
    
}

function cancela_compra() {


    //let string_info = ''
    //$('').appendTo(".frm_produtos_eftiv"); 
    $(".grup_prod_efetiv").text(''); 
    $('.container_modal').css('display','none') 


}

function cancela_edit() {


    $('.container_modal').css('display','none') 

    $('.opcs').css('border','none')
    $('.opcs').css('backgroundColor','white')
    


    $('#opc_novo').css('border-right','1px solid #0078d4')
    $('#opc_novo').css('border-left','1px solid #0078d4')
    $('#opc_novo').css('border-top','3px solid #0078d4')
    $('#opc_novo').css('background-color','rgb(240, 240, 240)')

    opc_select = 1
    $('.tit_frm').text('Cadastro de Produtos')


}

function efetv_compra() {

    let tipo_requisicao = 4;
    let estoque_atual = qtd_estoque
    let id_produto = id_prodt
    let qtd_produtos_comp = $('#cx_qtd_compra').val() 

                $.ajax({
                    method:'POST',
                    url:'modulos/functions.php',
                    data:
                    {
                        tipo_requisicao:tipo_requisicao,
                        qtd_produtos_comp:qtd_produtos_comp,
                        estoque_atual:estoque_atual,
                        id_produto:id_produto
       
                    },
                    success:function(retorno) {

                        let dt_ret = JSON.parse(retorno)

                            if(dt_ret[0] == true) {

                                $('.msg_sucesso').html(dt_ret[1]) 
                                exibe_sucess()
                                cancela_compra()

                            } else {

                                $('.msg_erro').html(dt_ret[1]) 
                                exibe_erro()

                            }
                        
                                            
                    }

                    })


}

function efetiva_pesquisa() {


    let tipo_requisicao = 6;
    let id_produto = $('#cx_pesquisa_produto').val() 

                $.ajax({
                    method:'POST',
                    url:'modulos/functions.php',
                    data:
                    {
                        tipo_requisicao:tipo_requisicao,
                        id_produto:id_produto
       
                    },
                    success:function(retorno) {

                        let dt_ret = JSON.parse(retorno)

                     
                        id_produto_pesquisado = dt_ret[0].id_produto

                        if(dt_ret == 0) {

                            $('.msg_erro').html('Produto não Localizado !!!') 
                            exibe_erro()  

                            } else {

                                $('.container_modal').css('display','none') 

                                $('#cx_nome').val(dt_ret[0].nome)
                                $('#cx_preco').val(dt_ret[0].preco)
                                $('#cx_desconto').val(dt_ret[0].vlr_desconto)
                                 $('#cx_vlr_liquido').val(dt_ret[0].vlr_liquido_produto)
                                 $('#cx_qtd_estoque').val(dt_ret[0].qtd_estoque)
                                 $('#cx_descricao').val(dt_ret[0].descricao)

                                 $(".img_prod").attr('src',dt_ret[0].path_imagem)	

                                 if(dt_ret[0].def_produto_destaque == 1) {
                                   $('#check_prod_destaq').prop('checked',true);
                                 }  else {
                                    $('#check_prod_destaq').prop('checked',false);
                                 }

                                 
                                 if(dt_ret[0].def_produto_ofertas == 1) {                                    
                                    $('#check_prod_ofertas').prop('checked',true);
                                 } else {
                                    $('#check_prod_ofertas').prop('checked',false);
                                 }

                                
                                
                                let dados_frms_pgt = dt_ret[0].formas_pgto
                                let dados_frm_pg = dados_frms_pgt.split(',')

                                 for (let k = 0; k < dados_frm_pg.length; k++) {

                                  
                                      let inf_nme = dados_frm_pg[k];
                                      inf_nme =  inf_nme.toLowerCase()

                                        if(inf_nme == 'crédito') {
                                            inf_nme = 'credito'
                                        }


                                        if(inf_nme == 'transferência') {
                                            inf_nme = 'transferencia'
                                        }

                                 

                                      $("#check_frma_pgt_" +  inf_nme + "").prop("checked",true);
                                     
                                 }
                              
                              
                                

                            }
                        
                                            
                    }

                    })


}

function filter_item_enter(event){  

    if(event.key =='Enter') {    
       
        pesquisa_inf = event.target.value

      
        filter_ittem()

              }
}

function filter_item_bttn(){ 
         
        pesquisa_inf = $('#cx_pesquisa').val()
        filter_ittem()

              
}


function filter_ittem() {



    let pesquisa = pesquisa_inf
    let tipo_requisicao = 5


                    $.ajax({
                        method:'POST',
                        url:'modulos/functions.php',
                        data:
                        {
                            tipo_requisicao:tipo_requisicao,
                            pesquisa:pesquisa             
                        },
                        success:function(retorno) {

                                data_return = JSON.parse(retorno)                                          
                                
                                
                                $(".bl_lanc").css('display','none')
                                $(".bl_oferta").css('display','none') 
                                $(".tits_ff").css('display','none') 
                                $(".br_sp").css('display','none') 



                               if(data_return.length > 0) {
                               
                                $(".grup_tds").css('display','inline-block') 
                                $(".grup_tds").text(''); 
                                $("#tit_tds").text('Resultado da Pesquisa - (' + data_return.length + ') Produtos'); 
                                
                                
                                insere_prodts_cont_tds()
                            } else {
                                
                                $(".grup_tds").css('display','none') 
                                $("#tit_tds").text('Resultado da Pesquisa - (0) Produtos'); 
                               
                            }
                               
                                
                            
                                console.log(data_return)                     

                        }
                    })    



}



function montar_table_list(){



    console.log(data_return)


	var cod = 1	
	let itm = 0
	// var new_table = document.querySelector('.frmt_tabela_fretes')
	 tbl = '';	
	 tbl +='<tr>'	
	 tbl +='<th>Id Produto</th>'
	 tbl +='<th>Nome</th>'
	 tbl +='<th>Preço</th>'	
	 tbl +='<th>Vlr desconto</th>'
	 tbl +='<th>Vlr. Liq. Produto</th>'
	 tbl +='<th>Qtd. Estoque</th>'
	 tbl +='<th>Formas Pgto.</th>'
	 tbl +='<th>Data Cadastro</th>'
	
	 tbl +='</tr>'
	
	
	for(let i = 0; i < data_return.length; i++) {

				if (cod === 3) {
					cod = 1
				}
				

				if (cod === 1) {
					var cls = 'styline_line_table_2'
				} else if (cod === 2) {
					var cls = 'styline_line_table_1'
				}

			tbl +=`<tr>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_produto}>${data_return[i].id_produto}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_produto}>${data_return[i].nome}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_produto}>${data_return[i].preco}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_produto}>${data_return[i].vlr_desconto}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_produto}>${data_return[i].vlr_liquido_produto}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_produto}>${data_return[i].qtd_estoque}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_produto}>${data_return[i].formas_pgto}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_produto}>${data_return[i].data_cadastro}</td>`
	
			
						
			tbl +='</tr>'

			cod++;
			itm ++;	
			

	}

	
	$('#table_list').html(tbl);
	$('.vlr_tit_list').html( "(" + itm + ")");
	

}