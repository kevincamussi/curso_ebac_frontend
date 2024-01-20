const notasDosAlunos = [
    {
        aluno: 'João',
        nota: 6
    },
    {
        aluno: 'Lucas',
        nota: 8
    },
    {
        aluno: 'Julia',
        nota: 5
    },
    {
        aluno: 'Luana',
        nota: 10
    },
    {
        aluno: 'Gabriel',
        nota: 4
    },
    {
        aluno: 'Tais',
        nota: 7
    }
]

const notaMinima = 6;

const alunosQueConseguiramNotaMinima = notasDosAlunos.filter((aluno)=>{
    return aluno.nota >= notaMinima;
})

// const filtrarNotasMinimas = (aluno)=>{
//     return aluno.nota >= notaMinima;
// }
// const alunosQueConseguiramNotaMinima = notasDosAlunos.filter(filtrarNotasMinimas);

console.log(alunosQueConseguiramNotaMinima);

