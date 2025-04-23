<h1 align="center">🛒 Carrinho de Compras com TypeScript + SOLID</h1>

<p align="center">
  Projeto simples criado com TypeScript para fixar os princípios do <strong>SOLID</strong> na prática.<br/>
  Implementa um carrinho de compras funcional com boas práticas de arquitetura de software.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-TypeScript-007acc?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/github/last-commit/Pedro-Ricardo0/typescriptSolid?style=for-the-badge" />
</p>

---

## 🧠 O que eu aprendi

Durante esse projeto, aprendi e apliquei os cinco princípios do SOLID, fundamentais para o desenvolvimento de sistemas desacoplados e de fácil manutenção:

- Organização e separação de responsabilidades
- Uso de injeção de dependência para melhorar o acoplamento
- Criação de interfaces coesas
- Aplicação de herança correta sem quebre comportamentos

---

## 🧩 Princípios SOLID aplicados

| Princípio | Nome | Aplicado em |
|----------|------|-------------|
| S | **Single Responsibility Principle** | `ShoppingCart`, `Order`, `Persistency`, `Messaging` |
| O | **Open/Closed Principle**         | `Discount` (aberto para extensão, fechado para modificação) |
| L | **Liskov Substitution Principle** | `Discount` subclasses substituem a base sem alterar comportamento |
| I | **Interface Segregation Principle** | Separação entre `CustomerOrder`, `IndividualCustomer`, `EnterpriseCustomer` |
| D | **Dependency Inversion Principle** | `Order` depende de abstrações como `PersistencyProtocol` e `MessagingProtocol` |

---

## 🏗️ Estrutura do projeto

```bash
📁 src
 ┣ 📁 classes
 ┃ ┣ 📁 interfaces
 ┃ ┃ ┣ 📄 customer-protocol.ts
 ┃ ┃ ┣ 📄 cart-item.ts
 ┃ ┃ ┗ 📄 ...
 ┃ ┣ 📁 services
 ┃ ┃ ┣ 📄 messaging.ts
 ┃ ┃ ┣ 📄 persistency.ts
 ┃ ┃ ┗ 📄 ...
 ┃ ┣ 📄 product.ts
 ┃ ┣ 📄 customer.ts
 ┃ ┗ 📄 ...
┣ 📁 srp (exercício separado)
┣ 📁 legacy (versão antiga sem SRP)

```

---


🚀 Como rodar o projeto


``` bash
# 1. Clone o repositório
git clone https://github.com/Pedro-Ricardo0/typescriptSolid.git

# 2. Acesse a pasta
cd typescriptSolid

# 3. Instale as dependências
npm install

# 4. Rode o projeto
npm start
```
