

window.addEventListener('load',inicia_app)
window.addEventListener('scroll',exec_tst)
window.addEventListener('resize',resize_home)





function resize_home(event) {

       // wdth_window =  event.target.screen.width
        wdth_window =  event.target.window.innerWidth


                // DEFINE QTD. ITENS BLOCOS


                if(wdth_window < 1305 && wdth_window > 1014) {
                     qtd_prodts_bloc = 3
                }   else if(wdth_window < 1014 && wdth_window > 764) {                  
                    qtd_prodts_bloc = 2
                }   else if(wdth_window < 764) {                    
                    qtd_prodts_bloc = 1
                } else {                   
                    qtd_prodts_bloc = 4
                }

                insere_prodts_cont_lanc()
          
        
}

function exec_tst(event){
	
    /*
    if (window.scrollY > 50 ) {
		$('#container_header').css('backgroundColor','rgba(250, 250, 250, 0.9)')
		$('#container_header').css('boxShadow','1px 1px 10px 5px  gray')
		$('#container_header').css('transition','0.5s')
		$('.opc_menu_incio').css('color','#4682B4')

		$('#img_logo').attr('src','img/logo_transp.png')

	} else {
		$('#container_header').css('backgroundColor','rgba(46, 46, 54, 1)')
		$('#container_header').css('boxShadow','none')
		$('#Menu_inicial').css('color','#B0C4DE')
		$('.opc_menu_incio').css('color','#B0C4DE')

		$('#img_logo').attr('src','img/logo4.png')
	}
    */

}





function inicia_app() {

    opc_select = 1
    
}




function insere_foco_txt(event){    

    let elemnt =  event.srcElement.id
    let  type_element  = elemnt.substr(0,2) 
    
    
    if(type_element =='cx') {
         $(`#${elemnt}`).css('box-shadow','0px 0px 10px 0px #B5B5B5')

        }
 
 }

 function remove_foco_txt(event){    

    let elemnt =  event.srcElement.id
    let  type_element  = elemnt.substr(0,2) 
    
    
    if(type_element =='cx') {
         $(`#${elemnt}`).css('box-shadow','none')

        }
 
 }

 function insere_vlr_prod(event) {

    let vlr_preco = event.srcElement.value 
        
    $('#cx_vlr_liquido').val(vlr_preco)
    $('#cx_desconto').val('0')
 }


 function calc_desconto(event) {

    let vlr_desconto = event.srcElement.value 
    let vlr_preco =  $('#cx_preco').val()

    let vlr_liq = parseFloat(vlr_preco) - parseFloat(vlr_desconto)

    $('#cx_vlr_liquido').val(vlr_liq)


 }


function exibe_erro() {

    $('.msg_erro').css('display','block')
    setTimeout(() => {
        inibie_erro()
    }, 4000);
}

function inibie_erro() {
    $('.msg_erro').css('display','none')
}



function exibe_sucess() {

    $('.msg_sucesso').css('display','block')
    setTimeout(() => {
        inibie_sucess()
    }, 4000);
}

function inibie_sucess() {
    $('.msg_sucesso').css('display','none')
}