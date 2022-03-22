
// carrega registros dos Estados
function carregaEstadosDB() {
    const estados = [
        { "id": 1, "nome": "Acre" },
        { "id": 2, "nome": "Bahia" },
        { "id": 3, "nome": "Ceará" },
        { "id": 4, "nome": "Pernambuco" },
        { "id": 5, "nome": "São Paulo" },
        { "id": 6, "nome": "Rio de Janeiro" }
    ];

    return estados;
}

// carrega registros das cidades por Estado
function carregaCidadesDB() {
    const cidades = [
        { "id_cid": 1, "nome": "Assis Brasil", estados: { "id_est": 1 } },
        { "id_cid": 2, "nome": "Bujari", estados: { "id_est": 1 } },
        { "id_cid": 3, "nome": "Capixaba", estados: { "id_est": 1 } },
        { "id_cid": 4, "nome": "Rio Branco", estados: { "id_est": 1 } },
        { "id_cid": 6, "nome": "Camaçari", estados: { "id_est": 2 } },
        { "id_cid": 7, "nome": "Feira de Santana", estados: { "id_est": 2 } },
        { "id_cid": 8, "nome": "Salvador", estados: { "id_est": 2 } },
        { "id_cid": 9, "nome": "Ilhéus", estados: { "id_est": 2 } },
        { "id_cid": 10, "nome": "Fortaleza", estados: { "id_est": 3 } },
        { "id_cid": 11, "nome": "Juazeiro do Norte", estados: { "id_est": 3 } },
        { "id_cid": 12, "nome": "Sobral", estados: { "id_est": 3 } },
        { "id_cid": 13, "nome": "Aracati", estados: { "id_est": 3 } },
        { "id_cid": 14, "nome": "Recife", estados: { "id_est": 4 } },
        { "id_cid": 15, "nome": "Paulista", estados: { "id_est": 4 } },
        { "id_cid": 16, "nome": "Ipojuca", estados: { "id_est": 4 } },
        { "id_cid": 17, "nome": "Olinda", estados: { "id_est": 4 } },
        { "id_cid": 18, "nome": "São Paulo", estados: { "id_est": 5 } },
        { "id_cid": 19, "nome": "Jundiaí", estados: { "id_est": 5 } },
        { "id_cid": 20, "nome": "Campos do Jordão", estados: { "id_est": 5 } },
        { "id_cid": 21, "nome": "Holambra", estados: { "id_est": 5 } },
        { "id_cid": 22, "nome": "Rio de Janeiro", estados: { "id_est": 6 } },
        { "id_cid": 23, "nome": "Belford Roxo", estados: { "id_est": 6 } },
        { "id_cid": 24, "nome": "Petrópolis", estados: { "id_est": 6 } },
        { "id_cid": 25, "nome": "São Gonçalo", estados: { "id_est": 6 } }
    ];

    return cidades;
}

// implementa o select com informações para Estado
const estados = carregaEstadosDB();
let optionEstados = `<option value="0">Escolha</option>`;
let len = estados.length;

for (let i = 0; i < len; i++) {
    optionEstados += `<option value="${estados[i].id}">${estados[i].nome}</option>`;
}
document.getElementById('estados').innerHTML = optionEstados;


// implementa o select com informações para cidade por Estado
function carregaCidades(index) {
    const cidades = carregaCidadesDB();
    let len = cidades.length;
    let optionCidades = `<option value="0">Escolha</option>`;

    for (let i = 0; i < len; i++) {
        if (cidades[i].estados.id_est == index.selectedIndex) {
            optionCidades += `<option value="${cidades[i].id_cid}">${cidades[i].nome}</option>`;
        };
    }
    document.getElementById('cidades').innerHTML = optionCidades;
};


