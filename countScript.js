function count(){
    var begin = document.getElementById("begin")
    var end = document.getElementById("end")
    var step = document.getElementById("step")
    var res = document.getElementById("res")

    if (begin.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        res.innerHTML = "Impossível de contar"
    } else {
        res.innerHTML = "Contando: <br>"
        var numberBegin = Number(begin.value)
        var numberEnd = Number(end.value)
        var numberStep = Number(step.value)

        if (numberStep <= 0){
            window.alert(`PASSO ${numberStep} não considerado. Vamos considerar como PASSO 1`)
            numberStep = 1
        }

        if (numberBegin < numberEnd){
            for(var counting = numberBegin; counting <= numberEnd; counting += numberStep){
                res.innerHTML += ` ${counting} \u{1F449}`
            }
        }

        else {
            for(var counting = numberBegin; counting >= numberEnd; counting -= numberStep){
                res.innerHTML += ` ${counting} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}