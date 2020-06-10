function cabec() 
{
    // Adicionado informções do head e referencias de CSS e JS
    const head = document.getElementById('head');

    // Title
    const title = document.createElement('title');
    title.innerHTML = "Associação Cultural Cariri (ACC)";
    head.appendChild(title);

    // charset
    const meta1 = document.createElement('meta');
    meta1.setAttribute("charset", "utf-8");
    head.appendChild(meta1);

    // description
    const meta2 = document.createElement('meta');
    meta2.setAttribute("name", "description");
    meta2.setAttribute("content", "Associação Cultural Cariri, Enentos beneficentes, cursos gratuiros, bazares...");
    head.appendChild(meta2);

    // keywords
    const meta3 = document.createElement('meta');
    meta3.setAttribute("name", "keywords");
    meta3.setAttribute("content", "ONG, Beneficente, brazar, cursos, palestras");   
    head.appendChild(meta3);

    // authot
    const meta4 = document.createElement('meta');
    meta4.setAttribute("name", "authot");
    meta4.setAttribute("content", "Emerson Costa");   
    head.appendChild(meta4);

    // Modo mobile
    const meta5 = document.createElement('meta');
    meta5.setAttribute("name", "viewport");
    meta5.setAttribute("content", "width=device-width, initial-scale=1");   
    head.appendChild(meta5);     

    // Ícone
    const link1 = document.createElement('link');
    link1.setAttribute("href", "Imagens/icon.ico");
    link1.setAttribute("rel", "icon");   
    head.appendChild(link1);    

    // BootStrap
    const link2 = document.createElement('link');
    link2.setAttribute("rel", "stylesheet");
    link2.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");   
    link2.setAttribute("integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T");   
    link2.setAttribute("crossorigin", "anonymous");   
    head.appendChild(link2);     

    const script1 = document.createElement('script');
    script1.src         = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
    script1.integrity   = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo";
    script1.crossOrigin = "anonymous";
    head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src         = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
    script2.integrity   = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1";
    script2.crossOrigin ="anonymous";
    head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src         = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
    script3.integrity   = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM";
    script3.crossOrigin = "anonymous";
    script3.setAttribute("crossorigin", "anonymous");   
    head.appendChild(script3);

    // Biblioteca de ícones
    const link3 = document.createElement('link');
    link3.setAttribute("rel", "stylesheet");
    link3.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");   
    head.appendChild(link3);     
    
    // Arquivos CSS
    const link4 = document.createElement('link');
    link4.setAttribute("rel", "stylesheet");
    link4.setAttribute("href", "css/Header.css");   
    head.appendChild(link4);    
    
    const link5 = document.createElement('link');
    link5.setAttribute("rel", "stylesheet");
    link5.setAttribute("href", "css/Footer.css");   
    head.appendChild(link5);     
    
    const link6 = document.createElement('link');
    link6.setAttribute("rel", "stylesheet");
    link6.setAttribute("href", "css/Geral.css");   
    head.appendChild(link6);  
    

    // Adicionando menu do cabeçalho
    const start = document.getElementById('start');

    // Header
    const header = document.createElement('header');
    header.className = 'row';
    //start.appendChild(header);

    // Div col-12 principal
    const div12 = document.createElement('div');
    div12.className = 'col-12';
    //header.appendChild(div12);

    // Navbar
    const nav = document.createElement('nav');
    nav.id="navbar";
    nav.className="navbar navbar-expand-lg navbar-light row navbarimg";
    //div12.appendChild(nav);

}  