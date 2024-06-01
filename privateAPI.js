import http from 'k6/http';
import {check, sleep } from 'k6';


export const options = {
  vus: 100,
  duration: '10s',
  thresholds: {
    http_req_failed: ['rate < 0.01'],
    http_req_duration: ['p(95) < 250']
  }
}

const BASE_URL = 'https://test-api.k6.io';

// bloco de configuração para extrair o token e retorná-lo
export function setup(){
  const loginRes = http.post(`${BASE_URL}/auth/token/login`, {
    username: '0.9034571991585829@mail.com',
    password: 'user123'
  })

  const token = loginRes.json('access');
  return token;
}


export default function (token){
  const BASE_URL = 'https://test-api.k6.io';

  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  const res = http.get(`${BASE_URL}/my/crocodile`, params);
  check(res, {
    'status code 200': (r) => r.status === 200
  });

  sleep(1);
}