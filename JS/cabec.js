function cabec() 
{
    // Adicionado informções do head e referencias de CSS e JS
    const head = document.getElementById('head');
    
    // Title
    const title     = document.createElement('title');
    title.innerHTML = "Associação Cultural Cariri (ACC)";
    head.appendChild(title);

    // charset
    // const meta1 = document.createElement('meta');
    // meta1.setAttribute("charset", "utf-8");
    // head.appendChild(meta1);

    // description
    const meta2 = document.createElement('meta');
    meta2.setAttribute("name", "description");
    meta2.setAttribute("content", "Associação Cultural Cariri, Eventos beneficentes, cursos gratuitos, bazares...");
    head.appendChild(meta2);

    // keywords
    const meta3 = document.createElement('meta');
    meta3.setAttribute("name", "keywords");
    meta3.setAttribute("content", "ONG, Beneficente, bazar, cursos, palestras");   
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

    // const script1       = document.createElement('script');
    // script1.src         = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
    // script1.integrity   = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo";
    // script1.crossOrigin = "anonymous";
    // head.appendChild(script1);

    // const script2       = document.createElement('script');
    // script2.src         = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
    // script2.integrity   = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1";
    // script2.crossOrigin ="anonymous";
    // head.appendChild(script2);

    // const script3       = document.createElement('script');
    // script3.src         = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
    // script3.integrity   = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM";
    // script3.crossOrigin = "anonymous";
    // script3.setAttribute("crossorigin", "anonymous");   
    // head.appendChild(script3);

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
    start.appendChild(header);

    // Div col-12 principal
    const divCol12      = document.createElement('div');
    divCol12.className  = 'col-12';
    header.appendChild(divCol12);

    // Navbar
    const nav       = document.createElement('nav');
    nav.id          ="navbar";
    nav.className   ="navbar navbar-expand-lg navbar-light row navbarimg";
    divCol12.appendChild(nav);

    // linkLogo e logoimg
    const logolink      = document.createElement('a');
    logolink.className  ="nav_link col-2";
    logolink.href       ="Index.html";

    const logoimg = document.createElement('img');
    logoimg.setAttribute('src', "Imagens/Logo_livro.jpg" );
    logoimg.setAttribute('style', "height:100px; width:100px;");
    logoimg.setAttribute('alt', "Logo da ONG");
    logolink.appendChild(logoimg);

    nav.appendChild(logolink);

    // LinkHome
    const LinkHome      = document.createElement('a');
    LinkHome.title      ="Ínicio";
    LinkHome.className  ="navbar-brand p-4 col-2";
    LinkHome.href       ="Index.html";  
    LinkHome.style      ="font-size: 25px;";
    LinkHome.innerText  = "Ínicio";

    nav.appendChild(LinkHome);

    // Botao mobile
    const btnexpand     = document.createElement('button');
    btnexpand.className ="navbar-toggler";
    btnexpand.type      ="button";
    btnexpand.setAttribute('data-toggle','collapse');
    btnexpand.setAttribute('data-target','#navbarSupportedContent');
    btnexpand.setAttribute('aria-controls','navbarSupportedContent');
    btnexpand.setAttribute('aria-expanded','false');
    btnexpand.setAttribute('aria-label','Toggle navigation');

    const spanbtnExpand     = document.createElement('span');
    spanbtnExpand.className ="navbar-toggler-icon";
    btnexpand.appendChild(spanbtnExpand);

    nav.appendChild(btnexpand);

    const div1      = document.createElement('div');
    div1.className  = "collapse navbar-collapse font-weight-bold mt-4";
    div1.id="navbarSupportedContent";
    nav.appendChild(div1);

    const ul        = document.createElement('ul');
    ul.className    ="nav nav-pills";
    div1.appendChild(ul);


    // Sobre a entidade
    const li1       = document.createElement("li");
    li1.className   ="nav-item dropdown text-center";
    ul.appendChild(li1);

    const li1LinkDropDown       = document.createElement('a');
    li1LinkDropDown.title       ="Sobre a entidade";
    li1LinkDropDown.innerText   = "Sobre a entidade";
    li1LinkDropDown.className   ="nav-link dropdown-toggle";
    li1LinkDropDown.href        ="#";
    li1LinkDropDown.role        ="button";
    li1LinkDropDown.setAttribute('data-toggle','dropdown');
    li1LinkDropDown.setAttribute('aria-haspopup','true');
    li1LinkDropDown.setAttribute('aria-expanded','false');
    li1.appendChild(li1LinkDropDown);

    const divDropDown1      = document.createElement('div');
    divDropDown1.className  ="dropdown-menu text-center";
    li1.appendChild(divDropDown1);

    const linkDrop1     = document.createElement('a');
    linkDrop1.title     ="História";
    linkDrop1.innerText ="História";
    linkDrop1.className ="dropdown-item menuHover";
    linkDrop1.href      ="Historia.html";
    divDropDown1.appendChild(linkDrop1);

    const linkDrop2     = document.createElement('a');
    linkDrop2.title     ="Membros";
    linkDrop2.innerText ="Membros";
    linkDrop2.className ="dropdown-item menuHover";
    linkDrop2.href      ="membros.html";
    divDropDown1.appendChild(linkDrop2);
    
    const linkDrop3     = document.createElement('a');
    linkDrop3.title     ="Voluntários";
    linkDrop3.innerText ="Voluntários";
    linkDrop3.className ="dropdown-item menuHover";
    linkDrop3.href      ="Voluntarios.html";
    divDropDown1.appendChild(linkDrop3);    


    // Projetos
    const liProjetos        = document.createElement('li');
    liProjetos.className    ='nav-item dropdown text-center';
    ul.appendChild(liProjetos);

    const linkProjetos      = document.createElement('a');
    linkProjetos.innerText  = "Projetos";
    linkProjetos.title      ="Projetos";
    linkProjetos.className  ="nav-link dropdown-toggle";
    linkProjetos.href       ="#";
    linkProjetos.role       ="button";
    linkProjetos.setAttribute('data-toggle','dropdown');
    linkProjetos.setAttribute('aria-haspopup','true');
    linkProjetos.setAttribute('aria-expanded','false');
    liProjetos.appendChild(linkProjetos); 
    
    const divProjetos       = document.createElement('div');
    divProjetos.className   = 'dropdown-menu text-center';
    liProjetos.appendChild(divProjetos);

    const linkCestas      = document.createElement('a');
    linkCestas.innerText  = "Cestas Básicas";
    linkCestas.title      = "Cestas Básicas";
    linkCestas.className  = "dropdown-item menuHover";
    linkCestas.href       = "Cestas.html";  
    divProjetos.appendChild(linkCestas);

    const linkMascara      = document.createElement('a');
    linkMascara.innerText  = "Máscaras Covid 19";
    linkMascara.title      = "Máscaras Covid 19";
    linkMascara.className  = "dropdown-item menuHover";
    linkMascara.href       = "Mascaras.html";  
    divProjetos.appendChild(linkMascara);

    const linkReciclagem      = document.createElement('a');
    linkReciclagem.innerText  = "Reciclagem";
    linkReciclagem.title      = "Reciclagem";
    linkReciclagem.className  = "dropdown-item menuHover";
    linkReciclagem.href       = "Reciclagem.html";  
    divProjetos.appendChild(linkReciclagem);

    const linkBrecho        = document.createElement('a');
    linkBrecho.innerText    = "Brechó";
    linkBrecho.title        = "Brechó";
    linkBrecho.className    = "dropdown-item menuHover";
    linkBrecho.href         = "Brecho.html";  
    divProjetos.appendChild(linkBrecho);    

    const linkCursos      = document.createElement('a');
    linkCursos.innerText  = "Cursos";
    linkCursos.title      = "Cursos";
    linkCursos.className  = "dropdown-item menuHover";
    linkCursos.href       = "Cursos.html";  
    divProjetos.appendChild(linkCursos);   
    
    const linkCorte_Costura      = document.createElement('a');
    linkCorte_Costura.innerText  = "Corte e Costura";
    linkCorte_Costura.title      = "Corte e Costura";
    linkCorte_Costura.className  = "dropdown-item menuHover";
    linkCorte_Costura.href       = "Corte_Costura.html";  
    divProjetos.appendChild(linkCorte_Costura);

    const linkBijuterias      = document.createElement('a');
    linkBijuterias.innerText  = "Bijuterias";
    linkBijuterias.title      = "Bijuterias";
    linkBijuterias.className  = "dropdown-item menuHover";
    linkBijuterias.href       = "Biju.html";  
    divProjetos.appendChild(linkBijuterias);    

    const linkSarau_Poesia      = document.createElement('a');
    linkSarau_Poesia.innerText  = "Saurau de Poesia";
    linkSarau_Poesia.title      = "Saurau de Poesia";
    linkSarau_Poesia.className  = "dropdown-item menuHover";
    linkSarau_Poesia.href       = "Sarau_Poesia.html";  
    divProjetos.appendChild(linkSarau_Poesia);       

                                
    // Eventos Realizados
    const liEventosRealizados        = document.createElement('li');
    liEventosRealizados.className    ='nav-item dropdown text-center';
    ul.appendChild(liEventosRealizados);

    const linkEventosRealizados      = document.createElement('a');
    linkEventosRealizados.innerText  = "Eventos Realizados";
    linkEventosRealizados.title      ="Eventos Realizados";
    linkEventosRealizados.className  ="nav-link dropdown-toggle";
    linkEventosRealizados.href       ="#";
    linkEventosRealizados.role       ="button";
    linkEventosRealizados.setAttribute('data-toggle','dropdown');
    linkEventosRealizados.setAttribute('aria-haspopup','true');
    linkEventosRealizados.setAttribute('aria-expanded','false');
    liEventosRealizados.appendChild(linkEventosRealizados); 
    
    const divEventosRealizados       = document.createElement('div');
    divEventosRealizados.className   = 'dropdown-menu text-center';
    liEventosRealizados.appendChild(divEventosRealizados);

    const linkAniversario      = document.createElement('a');
    linkAniversario.innerText  = "Aniversário Cocaia";
    linkAniversario.title      = "Aniversário Cocaia";
    linkAniversario.className  = "dropdown-item menuHover";
    linkAniversario.href       = "Aniversario_Cocaia.html";  
    divEventosRealizados.appendChild(linkAniversario);

    const linkeventos      = document.createElement('a');
    linkeventos.innerText  = "Outros eventos";
    linkeventos.title      = "Outros eventos";
    linkeventos.className  = "dropdown-item menuHover";
    linkeventos.href       = "Outros_Eventos.html";  
    divEventosRealizados.appendChild(linkeventos);  
    
    
    // Registro de atividades
    const liRegistroAtividades        = document.createElement('li');
    liRegistroAtividades.className    ='nav-item dropdown text-center';
    ul.appendChild(liRegistroAtividades);

    const linkRegistroAtividades       = document.createElement('a');
    linkRegistroAtividades.innerText  = "Registro de atividades";
    linkRegistroAtividades.title      ="Registro de atividades";
    linkRegistroAtividades.className  ="nav-link dropdown-toggle";
    linkRegistroAtividades.href       ="#";
    linkRegistroAtividades.role       ="button";
    linkRegistroAtividades.setAttribute('data-toggle','dropdown');
    linkRegistroAtividades.setAttribute('aria-haspopup','true');
    linkRegistroAtividades.setAttribute('aria-expanded','false');
    liRegistroAtividades.appendChild(linkRegistroAtividades); 
    
    const divRegistroAtividades      = document.createElement('div');
    divRegistroAtividades.className   = 'dropdown-menu text-center';
    liRegistroAtividades.appendChild(divRegistroAtividades);

    const linkTrabalhos      = document.createElement('a');
    linkTrabalhos.innerText  = "Trabalhos";
    linkTrabalhos.title      = "Trabalhos";
    linkTrabalhos.className  = "dropdown-item menuHover";
    linkTrabalhos.href       = "Trabalhos.html";  
    divRegistroAtividades.appendChild(linkTrabalhos);

    const linkReunioes     = document.createElement('a');
    linkReunioes.innerText  = "Reuniões realizadas";
    linkReunioes.title      = "Reuniões realizadas";
    linkReunioes.className  = "dropdown-item menuHover";
    linkReunioes.href       = "Reunioes_Realizadas.html";  
    divRegistroAtividades.appendChild(linkReunioes);      
                   
    // Como ajudar
    const liComo_ajudar        = document.createElement('li');
    liComo_ajudar.className    ='nav-item text-center';
    ul.appendChild(liComo_ajudar);

    const linkComo_ajudar     = document.createElement('a');
    linkComo_ajudar.innerText  = "Como ajudar";
    linkComo_ajudar.title      = "Como ajudar";
    linkComo_ajudar.className  = "nav-link";
    linkComo_ajudar.href       = "Como_Ajudar.html";  
    liComo_ajudar.appendChild(linkComo_ajudar);                                   
                               
    
    // Contato
    const liContato        = document.createElement('li');
    liContato.className    ='nav-item text-center';
    ul.appendChild(liContato);

    const linkContato      = document.createElement('a');
    linkContato.innerText  = "Contato";
    linkContato.title      = "Contato";
    linkContato.className  = "nav-link";
    linkContato.href       = "Contato.html";  
    liContato.appendChild(linkContato);                                   
                                   
   
    // Contato
    const liSobre        = document.createElement('li');
    liSobre.className    ='nav-item text-center';
    ul.appendChild(liSobre);

    const linkSobre      = document.createElement('a');
    linkSobre.innerText  = "Sobre";
    linkSobre.title      = "Sobre";
    linkSobre.className  = "nav-link";
    linkSobre.href       = "Sobre.html";  
    liSobre.appendChild(linkSobre);      
    
}  