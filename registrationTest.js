import http from 'k6/http';
import {check, sleep} from 'k6';

// configuração
export const options = {
  stages: [{duration: '10s', target: 10}],
  threshold: {
    checks: ['rate > 0.95'],
    http_req_failed: ['rate < 0.01'],
    http_req_duration: ['p(95) < 500']
  }
};

// execução
export default function () {
  const BASE_URL = 'https://test-api.k6.io';
  const USER = `${Math.random()}@mail.com`;
  const PASS = 'user123'

  // requisição
  const res = http.post(`${BASE_URL}/user/register/`, {
    username: USER,
    first_name: "crocodilo",
    last_name: "dino",
    email: USER,
    password: PASS
  });

  console.log(USER +  PASS)

  // validações
  check(res, {
    'sucesso ao registrar': (r) => r.status === 201
  });

  sleep(2);

};