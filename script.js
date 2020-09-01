document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})
var contadora = 0;

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde * 100;

    if (temJS) preco *= 1.4
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia;
    if ($('#servicos').val() == 1) {
        preco *= 1.25;
        $('#campos').show();
    } else if ($('#servicos').val() == 2) {
        preco *= 1.15;
        $('#campos').show();
    } else if ($('#servicos').val() == 3) {
        taxaurg = 1 - prazo * prazo * 10;
        preco = (785 + 964) * 1 + taxaurg;
        $('#campos').hide();
    } else {
        taxaurg = 1 - prazo * prazo * 10;
        preco = (600 + 964) * 1 + taxaurg;
        $('#campos').hide();
    }

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

function atualizar() {
    contadora = 0;
    $('#plH').empty();
    plh = "Serviço Selecionado: "
    op = $('#servicos').val();
    if (op == 1) {
        plh += "Web Sites";
    } else if (op == 2) {
        plh += "Aplicações Mobile";
    } else if (op == 3) {
        plh += "Soluções Digitais";
    } else {
        plh += "Marketing Digital";
    }
    $('#plH').append(plh);
    atualizarPreco();
}

function apagar() {
    document.querySelector("#preco").innerHTML = `R$ 0.00`
    document.querySelector("label[for=prazo]").innerHTML = `Prazo:`
}

function dataRodape() {
    data = new Date();
    document.getElementById('data').value = data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear();
}

function mostrarOrcamento() {
    atualizar();
    var secaoOrcamento = document.getElementById("orcamento");
    secaoOrcamento.style.display = "block";
};

function enviar() {
    op = $('#servicos').val();
    if (op == 1) {
        ServPrest = "Web Sites";
    } else if (op == 2) {
        ServPrest = "Aplicações Mobile";
    } else if (op == 3) {
        ServPrest = "Soluções Digitais";
    } else {
        ServPrest = "Marketing Digital";
    }
    preco = $('#preco').text();
    qtdPg = $('#qtde').val();
    prazo = $('#prazo').val();

    if ($("#js").is(":checked") == true) {
        script = "Sim";
    } else {
        script = "Não";
    }

    if (($("#layout-sim").is(":checked") == true)) {
        layout = "Sim";
    } else {
        layout = "Não";
    }

    mailto1 = "mailto:milenadiasdpz@gmail.com?subject=Or%C3%A7amento&body=Servi%C3%A7o%20or%C3%A7ado%3A%20" + ServPrest + "%0D%0AQuantidade%20de%20p%C3%A1ginas%3A%20" + qtdPg + "%0D%0APreciso%20de%20um%20script%20JS%3F%20" + script + "%0D%0APreciso%20de%20um%20layout%3F%20" + layout + "%0D%0APrazo%3A%20" + prazo + "%20semana(s)%0D%0APre%C3%A7o%20Or%C3%A7ado%3A%20" + preco + "%0D%0A--------------%0D%0AE-mail%20gerado%20automaticamente%20atrav%C3%A9s%20da%20p%C3%A1gina%20de%20or%C3%A7amentos%20do%20site.%0D%0A";
    mailto2 = "mailto:milenadiasdpz@gmail.com?subject=Or%C3%A7amento&body=Servi%C3%A7o%20or%C3%A7ado%3A%20" + ServPrest + "%0D%0APrazo%3A%20" + prazo + "%20semana(s)%0D%0APre%C3%A7o%20Or%C3%A7ado%3A%20" + preco + "%0D%0A--------------%0D%0AE-mail%20gerado%20automaticamente%20atrav%C3%A9s%20da%20p%C3%A1gina%20de%20or%C3%A7amentos%20do%20site.%0D%0A"
    if (op == 1 || op == 2) {
        window.location.href = mailto1;
    } else {
        window.location.href = mailto2;
    }
};