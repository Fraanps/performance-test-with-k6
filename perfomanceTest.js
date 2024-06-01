import http from 'k6/http';
//https://test-api.k6.io/public

// fase de configuração
export const options = {
  scenarios: {
    lista: {
      executor: 'constant-arrival-rate',
      exec: 'listar',
      duration: '30s',
      rate: 200, 
      timeUnit: '1s',
      preAllocatedVUs: 150,
      gracefulStop: '10s',
      tags: {test_type: 'listagem_de_crocodilos'}

    },
    buscar: {
      executor: 'per-vu-iterations',
      exec: 'buscar',
      vus: 50,
      iterations: 20,
      maxDuration: '1m',
      gracefulStop: '10s',
      tags: {test_type: 'busca_de_crocodilos'}

    },
  }


};

export function  listar(){
  http.get(__ENV.URL + 'crocodiles')
}


export function buscar(){

  if(__VU % 2 === 0){
      http.get(__ENV.URL+'/crocodiles/2')
  }else {
    http.get(__ENV.URL+'/crocodiles/1')

  }

}