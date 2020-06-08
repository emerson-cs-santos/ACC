function footer() 
{
    const body = document.getElementById('body');

    const footer = document.createElement('footer');
    body.appendChild(footer);

    const div1 = document.createElement('div');
    div1.className = 'Footer'
    footer.appendChild(div1);

    const div2 = document.createElement('div');
    div2.className='mapa_footer';
    div1.appendChild(div2)

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0977166211906!2d-46.67624318528077!3d-23.743894584592493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f5769971e65%3A0xf317438b51f25d9e!2sR.+Ver.+Jos%C3%A9+Gomes+de+Mor%C3%A3es+Neto%2C+60+-+Parque+Res.+Cocaia%2C+S%C3%A3o+Paulo+-+SP%2C+04849-030!5e0!3m2!1spt-BR!2sbr!4v1557706639363!5m2!1spt-BR!2sbr");
    iframe.width = '400px';
    iframe.height = '400px';
    iframe.allowFullscreen=true;
    div2.appendChild(iframe);

    const div3 = document.createElement ('div');
    div3.id='margem_footer';
    
    const endereco = document.createElement('p');
    endereco.innerHTML="Localização: <br> Rua Vereador José Gomes de Moares Neto,60 - Parque Residencial Cocaia<br> 04849-030 - Sao Paulo - SP<br>";
    
    const icone = document.createElement('i');
    icone.className="fa fa-facebook-official";
    icone.style="font-size:36px";

    const url = document.createElement('a');
    url.title = "Siga no Facebook";
    url.href = "https://facebook.com/associacaocc/";

    const faceimg = document.createElement('img');
    faceimg.setAttribute('id', "facebook" );
    faceimg.setAttribute('src', "Imagens/facebook.png" );
    faceimg.setAttribute('class', "img-responsive");
    faceimg.setAttribute('alt', "facebook");

    div3.appendChild(endereco);
    endereco.appendChild(icone);
    endereco.appendChild(url);
    url.appendChild(faceimg);
    div1.appendChild(div3);
}  