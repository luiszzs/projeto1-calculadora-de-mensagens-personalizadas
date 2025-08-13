let nome = "Luis Guilherme"
let idade = 15
let city = "General Sampaio"
let Profissao = "Estudante"
let anoAtual = 2025
let salario = 200
let bonus = 100
//calculos
let salabonus = salario + bonus
const anoNascimento = anoAtual - idade
let totalAno = salabonus * 12
let dobroTotalAno = totalAno * 2
alert(`
    =========Relatório do usuário=========
    Nome: ${nome}
     Idade: ${idade}
     Ano de nascimento: ${anoNascimento}
     Cidade: ${city}
     Profissão: ${Profissao}    
    
     Sálario base: U$${salario}
     Bônus: U$${bonus}
     Total Mensal: U$${salabonus} 
     Total ano: U$${totalAno}
     Total anual: U$${dobroTotalAno}
    ===============================
    `)