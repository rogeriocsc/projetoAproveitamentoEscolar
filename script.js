function media() {
    const res=document.querySelector("#res")
    const n1=Number(document.querySelector("#nota1").value)
    const n2=Number(document.querySelector("#nota2").value)
    const media=(n1+n2) / 2
    if (media >= 9 && media <= 10) {
        res.innerHTML=`Média ${media.toFixed(2)} ("APROVEITAMENTO: A")`
    } else if (media >= 8 && media < 9) {
        res.innerHTML=`Média ${media.toFixed(2)} ("APROVEITAMENTO: B")`
    } else if (media >= 7 && media < 8) {
        res.innerHTML=`Média ${media.toFixed(2)} ("APROVEITAMENTO: C")`
    } else if (media >= 6 && media < 7) {
        res.innerHTML=`Média ${media.toFixed(2)} ("APROVEITAMENTO: D")`
    } else if (media >= 5 && media < 6) {
        res.innerHTML=`Média ${media.toFixed(2)} ("APROVEITAMENTO: E")`
    } else {
        res.innerHTML=`Média ${media.toFixed(2)} ("APROVEITAMENTO: F")`
    } 
}