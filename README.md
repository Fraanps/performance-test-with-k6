### Testes de performance com K6

#### Teste1
* Public API: buscar todos os crocodilos </br>
Critérios:
  * Smoke test: 1 usuário por 30 segundos
    * limites: Requisição com sucesso > 99%

#### Teste 2
* Public API: Buscar crocodilo por id </br> 
Critérios:
  * Performance test
    * Ramp up 10 VU em 10s
    * Carga 10 VU por 10s
    * Ramp down 0 VU em 10s
      * Limites:
        * Requisição com sucesso > 95%
        * Tempo requisição p(90) < 200

#### Registration test
* Public API: Registration e auth: Registro </br>
  * Realizar o registro de um novo usuário
Critérios:
  * Performance test
    * Carga 10 VU por 10s
      * Limites:
        * Requisição com falha inferior a 1%
        * Duração da requisição p(95) < 500
        * Requisição com sucesso superior a 95%


#### Registration and auth
* Realizar o login com um novo usuário </br>
Critérios:
  * Stress test
    * Ramp up 5 VU em 5s
    * Carga 5 VU por 5s
    * Ramp up 50 VU em 2s
    * Carga de 50 VU em 2s
    * Ramp down 0 VU em 5s
      * Limites
        * Requisição com falha inferio a 1%

#### Private API
* Buscar todos os crocodilos </br>
Critérios:
  * Performance test
    * 100 VU por 10s
      * Limites:
        * Requisição com falha inferior a 1%
        * Duração da requisição p(95) < 250


#### Teste 6
* Critérios:
  * Realizar consulta a API de listagem de crocodilos e busca por id de crocodilos;
  * É esperado um RPS de 200 REQ/S para a AOI de listagem de crocodilos durante 30s
  * Para a busca por id, o sistema deve atender 50 usuários onde cada usuário realiza até 20 solicitações em até 1m
    * Usuários par devem realizar busca ao crocodilo de ID 2
    * Usuário ímpar devem realizar busca ao crocodilo de ID 1
  * Ambos os testes devem ser executados simultaneamente.


  
Plugin para gerar relatório de saída html:
[k6-reporter](https://github.com/benc-uk/k6-reporter)