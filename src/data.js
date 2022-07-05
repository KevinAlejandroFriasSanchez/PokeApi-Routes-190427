let matricula = [
    {
    number: 190427,
    name: "Kevin Alejandro Frias Sanchez",   
}

];
export function getMatricula(){
    return matricula;
}

export function getMatricu(number){
    return matricula.find((matricu)=> matricu.number===number);
}