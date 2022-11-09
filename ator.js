//ator
yAtor = 366;
xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 35, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor +=3
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15)
    if(colisao){
      colidiu();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -=1;
      }
    }
  }
}

function colidiu(){
  yAtor = 366
}

function incluiPontos(){
  fill(255,240,60);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos+=1;
    somDoPonto.play();
    colidiu();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}