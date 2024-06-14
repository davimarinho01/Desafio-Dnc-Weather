const botao = document.getElementById('button');
botao.addEventListener('click', getAddressByCep);
botao.addEventListener('click', getPrevisao);

async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('rua').innerHTML += `<p>${data.logradouro}</p>`;
        document.getElementById('bairro').innerHTML += `<p>${data.bairro}</p>`;
        document.getElementById('uf').innerHTML += `<p>${data.uf}</p>`;
    }catch (error) {
        alert(error.message);
    }
}


async function getPrevisao(){
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    console.log(lat);
    console.log(lon);
    
   try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
        const data = await response.json();
        document.getElementById('clima').innerHTML += `<p id="previsao"> Previsão de tempo de acordo com a região: ${data.hourly.temperature_2m[0]} °C </o>`
                
    }catch(error){
        alert(error.message);
    }
}