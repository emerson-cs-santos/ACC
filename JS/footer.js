function footer() 
{
    const start = document.getElementById('start');

    const footer = document.createElement('footer');
    footer.className="col-12 mt-5";
    start.appendChild(footer);

    const div1 = document.createElement('div');
    div1.className = 'row'
    footer.appendChild(div1);

    const div2 = document.createElement('div');
    div2.className='col-xs-12 col-md-6 w-100 d-flex justify-content-center mt-2 mb-3';
    div1.appendChild(div2)

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0977166211906!2d-46.67624318528077!3d-23.743894584592493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f5769971e65%3A0xf317438b51f25d9e!2sR.+Ver.+Jos%C3%A9+Gomes+de+Mor%C3%A3es+Neto%2C+60+-+Parque+Res.+Cocaia%2C+S%C3%A3o+Paulo+-+SP%2C+04849-030!5e0!3m2!1spt-BR!2sbr!4v1557706639363!5m2!1spt-BR!2sbr");
    iframe.width = '400px';
    iframe.height = '200px';
    iframe.allowFullscreen=true;
    div2.appendChild(iframe);

    const div3 = document.createElement ('div');
    div3.className="col-xs-12 col-md-6 mt-4 text-center";
    div1.appendChild(div3);
    
    const endereco = document.createElement('p');
    endereco.className="font-weight-bold";
    endereco.innerHTML="Localização: <br> Rua Vereador José Gomes de Moares Neto,60 - Parque Residencial Cocaia<br> 04849-030 - Sao Paulo - SP<br>";
    div3.appendChild(endereco);
    
    const url = document.createElement('a');
    url.title = "Siga no Facebook";
    url.innerText = 'Siga no Facebook';
    url.href = "https://facebook.com/associacaocc/";
    endereco.appendChild(url);

    const faceimg = document.createElement('img');
    faceimg.setAttribute('id', "facebook" );
    faceimg.setAttribute('src', "Imagens/facebook.png" );
    faceimg.setAttribute('class', "mt-2 mb-3");
    faceimg.setAttribute('alt', "facebook");
    div3.appendChild(faceimg);


    
    
   
}  