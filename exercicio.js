class Veiculo {
    constructor(nome, portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.ligado ? this.ligado = "Sim" : this.ligado = "Não";
        this.velocidade = 0;
        this.cor = '';
    }

    ligar = function(){
        this.ligado = 'Sim';
        this.velocidade = this.velocidade;
    }

    desligar = function(){
        this.ligado = 'Não';
        this.velocidade = 0;
    }

    acelerar = function(){
        this.velocidade += 10;
        this.ligado === 'Sim' ? this.velocidade = this.velocidade : this.velocidade = 0;
    }

    setCor = function(cor){
        this.cor = cor;
    }
}



// ---------------------------------------

class Carro extends Veiculo {
    constructor(nome, portas, lugares){
        super(nome, portas);
        this.lugares = lugares;
    }
}

const carro = new Carro('Celta', 4, 4);
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.desligar();
carro.setCor('Preto');

const novaVelocidade = 

console.log(`
    Nome:${carro.nome},
    Portas:${carro.portas},
    Ligado: ${carro.ligado}, 
    Velocidade: ${carro.velocidade},
    Cor: ${carro.cor},
    Lugares: ${carro.lugares}
`);




// -------------------------------------------------

class Moto extends Veiculo {
    constructor(nome, portas, lugares){
        super(nome, portas);
        this.lugares = lugares;
        this.empinando = false;
        this.empinando ? this.empinando = "Sim" : this.empinando = "Não";
    }
    empinar = function(){
        this.empinando = "Sim";
    }
}

const moto = new Moto('Fazer', 0, 2);
moto.setCor('Vermelha');
moto.ligar();
moto.acelerar();
moto.acelerar();
moto.empinar();
// moto.desligar();

console.log(`
    Nome:${moto.nome},
    Portas:${moto.portas},
    Ligado: ${moto.ligado}, 
    Velocidade: ${moto.velocidade},
    Cor: ${moto.cor},
    Lugares: ${moto.lugares},
    Empinando: ${moto.empinando}
`);




// -------------------------------------------

class CarroCorrida extends Carro {
    constructor(nome, portas, lugares, aerofolio, automatico ){
        super(nome, portas, lugares);
        this.aerofolio = aerofolio;
        this.automatico = automatico;
    }
        
    usarNitro = function(){
        this.velocidade += 50;
        this.ligado === 'Sim' ? this.velocidade = this.velocidade : this.velocidade = 0;
    }
}

const carroCorrida = new CarroCorrida('BMW', 4, 2, true , true);
carroCorrida.setCor("Azul");
carroCorrida.ligar();
carroCorrida.acelerar();
carroCorrida.usarNitro();

console.log(`
    Nome:${carroCorrida.nome},
    Portas:${carroCorrida.portas},
    Ligado: ${carroCorrida.ligado}, 
    Velocidade: ${carroCorrida.velocidade},
    Cor: ${carroCorrida.cor},
    Lugares: ${carroCorrida.lugares},
    Aerofolio: ${carroCorrida.aerofolio ? "Sim" : "Não"},
    Automatico:${carroCorrida.automatico ? "Sim" : "Não"}
`);

