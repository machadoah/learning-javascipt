function compras (work1, work2){

    const comprarSorvete = work1 || work2
    const comprarTv50 = work1 && work2
    const comprarTv32 = work1 != work2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }

}

console.log(compras(false, false))