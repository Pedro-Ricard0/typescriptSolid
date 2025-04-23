# Typescript Solid
🛒 Projeto: Carrinho de Compras com SOLID e TypeScript
Este projeto é uma aplicação simples de um carrinho de compras desenvolvida com TypeScript, com foco nos princípios SOLID da programação orientada a objetos. Ele foi criado com o objetivo de reforçar conceitos de design de software limpo, testável e escalável.

📚 O que eu aprendi
Neste projeto, coloquei em prática os 5 princípios do SOLID:

1. Single Responsibility Principle (SRP)
Uma classe deve ter um e apenas um motivo para mudar.

Cada classe ou serviço do projeto possui uma responsabilidade única:

ShoppingCart cuida apenas das operações de carrinho.

Messaging é responsável pelo envio de mensagens.

Persistency salva o pedido.

Customer lida com os dados do cliente.

2. Open/Closed Principle (OCP)
Entidades devem estar abertas para extensão, mas fechadas para modificação.

Implementei este princípio através do uso de interfaces como:

Discount e suas subclasses (TenPercentDiscount, FiftyPercentDiscount, etc), permitindo adicionar novos tipos de desconto sem alterar a lógica base.

3. Liskov Substitution Principle (LSP)
Classes derivadas devem poder ser substituídas por suas classes base sem quebrar a aplicação.

A hierarquia de Discount demonstra isso bem: substituí facilmente um desconto padrão por outro específico sem impactar o funcionamento do carrinho.

4. Interface Segregation Principle (ISP)
Nenhum cliente deve ser forçado a depender de métodos que não usa.

Utilizei interfaces separadas para clientes:

CustomerOrder, IndividualCustomerProtocol, EnterpriseCustomerProtocol, cada uma contendo apenas os métodos ou dados que realmente fazem sentido para o tipo de cliente.

5. Dependency Inversion Principle (DIP)
Dependa de abstrações, não de implementações concretas.

As classes recebem interfaces como dependências, por exemplo:

O ShoppingCart recebe Discount, MessagingProtocol, PersistencyProtocol, entre outros — facilitando testes e desacoplamento.

🧩 Outros padrões aplicados
Singleton: usado para manter instâncias únicas de serviços, como Persistency, garantindo uma única fonte de verdade.

Injeção de dependência: via construtores, favorecendo testabilidade e desacoplamento.

📁 Estrutura do Projeto
bash
Copiar
Editar
src/
│
├── classes/
│   ├── interfaces/          # Protocolos (contratos) e segregação de interfaces
│   └── services/            # Implementações concretas
│
├── legacy/                 # Código legado com acoplamento, para comparação
├── srp/                    # Versão inicial focada no SRP
└── main.ts                 # Execução principal e montagem dos serviços
🚀 Tecnologias
TypeScript

Node.js (execução local)

Princípios SOLID

✅ Como executar
bash
Copiar
Editar
# Instale as dependências
npm install

# Compile o projeto
npx tsc

# Execute
node dist/main.js
💡 Conclusão
Esse projeto foi essencial para entender como aplicar os princípios do SOLID na prática com TypeScript. Ele me mostrou como organizar melhor o código, evitar acoplamento e escrever software de forma mais limpa, flexível e testável.
