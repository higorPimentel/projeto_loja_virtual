

window.addEventListener('load',inicia_app)
window.addEventListener('scroll',exec_tst)
window.addEventListener('resize',resize_pages)





let container_menu_mob = document.querySelector('.container_menu_mob');
container_menu_mob.addEventListener('click', exib_menu)


function exib_menu() {
 
    valid_exib_menu ++

    if (valid_exib_menu == 1 ) {
        $(".container_menu_mobile").css("display","inline-block")
        $(".trc_itm").css("display","none")
        $(".itm_x").css("display","inline-block")
    } else if (valid_exib_menu > 1) {
        
        $(".container_menu_mobile").css("display","none")
        $(".itm_x").css("display","none")
        $(".trc_itm").css("display","block")
        valid_exib_menu = 0

    }

}

function  resize_pages(event) { 

    wdth_window =  event.target.window.innerWidth

    

    if(wdth_window  > 1080) { 

        $('.container_menu_mobile').css('display','none')
        $(".itm_x").css("display","none")
        $(".trc_itm").css("display","block")
    }

    console.log(wdth_window)

}

function resize_home(event) {

       // wdth_window =  event.target.screen.width
        wdth_window =  event.target.window.innerWidth


                // DEFINE QTD. ITENS BLOCOS


                if(wdth_window < 1305 && wdth_window > 1014) {
                     qtd_prodts_bloc = 3
                     qtd_prodts_bloc_ofertas = 3
                }   else if(wdth_window < 1014 && wdth_window > 764) {                  
                    qtd_prodts_bloc = 2
                    qtd_prodts_bloc_ofertas = 2
                }   else if(wdth_window < 764) {                    
                    qtd_prodts_bloc = 1
                    qtd_prodts_bloc_ofertas = 1
                } else {                   
                    qtd_prodts_bloc = 4
                    qtd_prodts_bloc_ofertas = 4
                }

                insere_prodts_cont_lanc()
                insere_prodts_cont_ofertas()
          
        
}

function exec_tst(event){

    //console.log(window.scrollY)
	

    if (window.scrollY > 50 ) {
		$('.container_header').css('backgroundColor','rgba(250, 250, 250, 0.9)')
		$('.container_header').css('boxShadow','1px 1px 10px 5px  gray')
		$('.container_header').css('transition','0.5s')
		$('.itm_menu').css('color','#4682B4')
		$('.tit_loja').css('color','#4682B4')


		// $('#img_logo').attr('src','img/logo_transp.png')

	} else {
		$('.container_header').css('backgroundColor','#0078d4')
		$('.container_header').css('boxShadow','none')
		$('.Menu_inicial').css('color','#B0C4DE')
		$('.itm_menu').css('color','white')

        $('.tit_loja').css('color','white')

		// $('#img_logo').attr('src','img/logo4.png')
	}
   

}





function inicia_app() {

    opc_select = 1
    valid_exib_menu = 0
    
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
