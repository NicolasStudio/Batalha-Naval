/* Const == Construtor // ou seja construa uma grid */
const grid = document.querySelector('.grid');

const personagens = [
    'Agua',
    'Agua',
    'Agua',
    'Bomba',
    'Bomba',
];
const Submarino = [
    'Submarino',
]
const navioDois = [
    'Rebocador(1)',
    'Rebocador(2)',
];
const navioTres = [
    'Cruzador(1)', 
    'Cruzador(2)',
    'Cruzador(3)',
];
const navioQuatro = [
    'Encouraçado(1)', 
    'Encouraçado(2)',
    'Encouraçado(3)',
    'Encouraçado(4)',
];
const navioQuinto = [
    'PortaAviões(1)', 
    'PortaAviões(2)',
    'PortaAviões(3)',
    'PortaAviões(4)',
    'PortaAviões(5)',
];

/* Criando uma função que cria elementos */
const createElement = (tag, className) =>{

/* Construir um elemento que vai usar um método documento  */
const element = document.createElement(tag);

/* Agora ele coloca a classe dentro do elemento */
element.className = className;

/* Por fim ele retorna o elemento */
return element;
}

    /* variaveis */
    let primeiraCard = '';
    let segundaCard = '';
    let vida = 5;
    let pontos = 0;
    let pontosTotais = 0;
    let escolha = '';



    const checkEndGame = () => {
    // Criado uma const para armazenar as cartas desabilitas que vamos procurar 
    const disabledCard = document.querySelectorAll('.disabled-card');

        // Agora vamos ver se o numero/tamanho encontrado é o mesmo do total de cartas 
        if(disabledCard.length == 66){
            setTimeout(() => {
                alert('Parabéns, você venceu!!!');
                alert('O seu total de pontos é: ' + pontos);
            }, 700);
            

        }
        if(vida == 0){
            setTimeout(() => {
                alert('Suas vidas acabaram...');
                alert('O seu total de pontos é: ' + pontos);
            }, 700);
            

        }
        if(pontosTotais == 2745){
            setTimeout(() => {
                alert('Você atingiu o total de pontos: ' + pontos);
                alert('Meus Parabéns!!!')
            }, 700);
            

        }
    }


const checkCards = () => {
        const primeiroPers = primeiraCard.getAttribute('data-personagens');
        //const segundoPers = segundaCard.getAttribute('data-personagens');

        if(primeiroPers == 'Bomba'){
            
            pontosTotais = pontos;
            vida = vida -1;

            document.getElementById("pontos").innerHTML = "Pontos: " + pontosTotais;
            document.getElementById("vida").innerHTML = "Vidas " + vida;

            
            
            /*Função para verificar se todas as cartas foram descobertas */
            checkEndGame();
        }else if (primeiroPers == 'Submarino'){

            pontos = pontos + 180;
            pontosTotais = pontos;
            
            document.getElementById("pontos").innerHTML = "Pontos: " + pontosTotais;
            
            /*Função para verificar se todas as cartas foram descobertas */
            checkEndGame();
        } else if (primeiroPers == 'Rebocador(1)' || primeiroPers == 'Rebocador(2)'){

            pontos = pontos + 130;
            pontosTotais = pontos;
            
            document.getElementById("pontos").innerHTML = "Pontos: " + pontosTotais;
            
            /*Função para verificar se todas as cartas foram descobertas */
            checkEndGame();
        }else if (primeiroPers == 'Cruzador(1)' || primeiroPers == 'Cruzador(2)' || primeiroPers == 'Cruzador(3)'){

            pontos = pontos + 90;
            pontosTotais = pontos;
            
            document.getElementById("pontos").innerHTML = "Pontos: " + pontosTotais;
            
            /*Função para verificar se todas as cartas foram descobertas */
            checkEndGame();
        }else if (primeiroPers == 'Encouraçado(1)' || primeiroPers == 'Encouraçado(2)' || primeiroPers == 'Encouraçado(3)' 
                                                   || primeiroPers == 'Encouraçado(4)'){

            pontos = pontos + 70;
            pontosTotais = pontos;

            
            document.getElementById("pontos").innerHTML = "Pontos: " + pontosTotais;
            
            //checkEndGame();
        }else if (primeiroPers == 'PortaAviões(1)' || primeiroPers == 'PortaAviões(2)' || primeiroPers == 'PortaAviões(3)' 
        || primeiroPers == 'PortaAviões(4)' || primeiroPers == 'PortaAviões(5)'){

            pontos = pontos + 35;
            pontosTotais = pontos;


            document.getElementById("pontos").innerHTML = "Pontos: " + pontosTotais;

            checkEndGame();
            }
    }


/* Clicando ele mostra que foi clicado nas costas da carta o BACK  */
const revealCard = ({target}) => {

        /* Se o pai (carta) possui uma classe (reveal-card) então ela ja foi revelada, portanto retorna e nao faz nada*/
        if(target.parentNode.className.includes('reveal-card')){
            return;
        }

        /* Se a variavel estiver vazia significa que o usuario ainda não escolheu */
        if (primeiraCard == '' && vida > 0 && vida < 6){
            /* portanto vamos virar a carta */
            target.parentNode.classList.add('reveal-card');
            /* e salvar na variavel a carta clicada (target) */
            primeiraCard = target.parentNode;
            checkCards();

            setInterval(() => {
                primeiraCard ='';
            }, 200);
            
        }     
}

/* recebendo como paramêtro o personagem */
const createCard  = (personagens) => /* (=>) arrow function*/ {

    /* Chamando a função element, e esse element precisa dos dois parametros */
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    /* acessar a div do front, acessar a variavel atráves de String( `` ) e por o outro lado da carta*/ 
    front.style.backgroundImage = `url('ImagensBatalha/${personagens}.jpg')`;

    /*Agora é feito a estruturação, colocando o front e o back dentro da div card */
    card.appendChild(front);
    card.appendChild(back);

    /* No momento que as cartas são criadas posso gerar um evento listener (click) e adicionar a função reveal */
    card.addEventListener('click' , revealCard);

    /*Criando um atributo para indentificação da carta, e o valor é o personagem */
    card.setAttribute('data-personagens', personagens)
    return card;
}

const createSub  = (Submarino) => /* (=>) arrow function*/ {

    /* Chamando a função element, e esse element precisa dos dois parametros */
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    /* acessar a div do front, acessar a variavel atráves de String( `` ) e por o outro lado da carta*/ 
    front.style.backgroundImage = `url('ImagensBatalha/${Submarino}.jpg')`;

    /*Agora é feito a estruturação, colocando o front e o back dentro da div card */
    card.appendChild(front);
    card.appendChild(back);

    /* No momento que as cartas são criadas posso gerar um evento listener (click) e adicionar a função reveal */
    card.addEventListener('click' , revealCard);

    /*Criando um atributo para indentificação da carta, e o valor é o personagem */
    card.setAttribute('data-personagens', Submarino)
    return card;
}

const createNavio2  = (navioDois) => /* (=>) arrow function*/ {

    /* Chamando a função element, e esse element precisa dos dois parametros */
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    /* acessar a div do front, acessar a variavel atráves de String( `` ) e por o outro lado da carta*/ 
    front.style.backgroundImage = `url('ImagensBatalha/${navioDois}.jpg')`;

    /*Agora é feito a estruturação, colocando o front e o back dentro da div card */
    card.appendChild(front);
    card.appendChild(back);

    /* No momento que as cartas são criadas posso gerar um evento listener (click) e adicionar a função reveal */
    card.addEventListener('click' , revealCard);

    /*Criando um atributo para indentificação da carta, e o valor é o personagem */
    card.setAttribute('data-personagens', navioDois)
    return card;
}

const createNavio3  = (navioTres) => /* (=>) arrow function*/ {

    /* Chamando a função element, e esse element precisa dos dois parametros */
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    /* acessar a div do front, acessar a variavel atráves de String( `` ) e por o outro lado da carta*/ 
    front.style.backgroundImage = `url('ImagensBatalha/${navioTres}.jpg')`;

    /*Agora é feito a estruturação, colocando o front e o back dentro da div card */
    card.appendChild(front);
    card.appendChild(back);

    /* No momento que as cartas são criadas posso gerar um evento listener (click) e adicionar a função reveal */
    card.addEventListener('click' , revealCard);

    /*Criando um atributo para indentificação da carta, e o valor é o personagem */
    card.setAttribute('data-personagens', navioTres)
    return card;
}

const createNavio4  = (navioQuatro) => /* (=>) arrow function*/ {

    /* Chamando a função element, e esse element precisa dos dois parametros */
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    /* acessar a div do front, acessar a variavel atráves de String( `` ) e por o outro lado da carta*/ 
    front.style.backgroundImage = `url('ImagensBatalha/${navioQuatro}.jpg')`;

    /*Agora é feito a estruturação, colocando o front e o back dentro da div card */
    card.appendChild(front);
    card.appendChild(back);

    /* No momento que as cartas são criadas posso gerar um evento listener (click) e adicionar a função reveal */
    card.addEventListener('click' , revealCard);

    /*Criando um atributo para indentificação da carta, e o valor é o personagem */
    card.setAttribute('data-personagens', navioQuatro)
    return card;
}

const createNavio5  = (navioQuinto) => /* (=>) arrow function*/ {

    /* Chamando a função element, e esse element precisa dos dois parametros */
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    /* acessar a div do front, acessar a variavel atráves de String( `` ) e por o outro lado da carta*/ 
    front.style.backgroundImage = `url('ImagensBatalha/${navioQuinto}.jpg')`;

    /*Agora é feito a estruturação, colocando o front e o back dentro da div card */
    card.appendChild(front);
    card.appendChild(back);

    /* No momento que as cartas são criadas posso gerar um evento listener (click) e adicionar a função reveal */
    card.addEventListener('click' , revealCard);

    /*Criando um atributo para indentificação da carta, e o valor é o personagem */
    card.setAttribute('data-personagens', navioQuinto)
    return card;
}

const loadGame = () => {
    /* Duplicando as cartas. spread operator (...) funciona para espalhar os elementos de um array, dentro de outro */
    const personagensDuplicados = [...personagens, ...personagens,...personagens, ...personagens,  ...personagens, 
                                                   ...personagens, ...personagens];

    personagensDuplicados.push(Submarino)
    personagensDuplicados.push(Submarino)
    personagensDuplicados.push(Submarino)
    personagensDuplicados.push(Submarino)
    personagensDuplicados.push(Submarino)
    personagensDuplicados.push(navioDois)
    personagensDuplicados.push(navioDois)
    personagensDuplicados.push(navioDois)
    personagensDuplicados.push(navioTres)
    personagensDuplicados.push(navioTres)
    personagensDuplicados.push(navioQuatro)
    personagensDuplicados.push(navioQuinto)
    personagensDuplicados.push(navioQuinto)

    /*Embaralhar o array ou shuffled array /// Math random gera um numero aleatorio entre 0 e 1  */

    const embaralharArray = personagensDuplicados.sort(() => Math.random() - 0.5);
    
    /* Ele percorre o array com o comando forEach  e vai criar uma carta para cada objeto no array */
        embaralharArray.forEach((personagensDuplicados) => {

            if (Array.isArray(personagensDuplicados)) {
                personagensDuplicados.forEach((obj) => {

                    if (obj === 'Submarino') {
                        const card = createSub(obj);
                        /* Aqui ele cria a carta e coloca dentro da grid */
                        grid.appendChild(card);

                        return
                    }

                    if (obj.includes('Rebocador')) {
                        const card = createNavio2(obj);
                        /* Aqui ele cria a carta e coloca dentro da grid */
                        grid.appendChild(card);

                        return
                    }

                    if (obj.includes('Cruzador')) {
                        const card = createNavio3(obj);
                        /* Aqui ele cria a carta e coloca dentro da grid */
                        grid.appendChild(card);
                    }

                    if (obj.includes('Encouraçado')) {
                        const card = createNavio4(obj);
                        /* Aqui ele cria a carta e coloca dentro da grid */
                        grid.appendChild(card);
                    }

                    if (obj.includes('PortaAviões')) {
                        const card = createNavio5(obj);
                        /* Aqui ele cria a carta e coloca dentro da grid */
                        grid.appendChild(card);
                    }
            
                });
            } else {
                const card = createCard(personagensDuplicados);
                /* Aqui ele cria a carta e coloca dentro da grid */
                grid.appendChild(card);
            }

        });

}

loadGame();