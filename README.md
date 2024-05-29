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


