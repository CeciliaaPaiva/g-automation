# Requisitos — Site Institucional G Automation Industrial

## 1. Visão Geral

**Empresa:** G Automation Industrial LTDA (Nome fantasia: G Automation)
**CNPJ:** 45.531.455/0001-71
**Endereço:** Rua Flor de Acácia, 171, Jardim Botânico, Goianinha/RN, CEP 59.173-000
**Setor:** Instalação de máquinas e equipamentos industriais (CNAE principal 33.21-0-00); comércio varejista de material elétrico; aluguel de máquinas e equipamentos industriais.

A empresa atua em manutenção de inversores, soft-starters, drivers e eletrônica de potência, reparo de placas eletrônicas industriais (IHM, CLP, cartões de controle), retrofit de painéis/sistemas legados e suporte técnico multimarcas, atendendo indústrias em todo o Nordeste.

**Objetivo do projeto:** substituir o material de prospecção em PDF por um site institucional público, que funcione como cartão de visitas digital, transmita credibilidade e facilite o contato de novos clientes via WhatsApp e e-mail.

## 2. Stakeholders

- **Ana Flavia Paiva da Silva** — sócia-administradora (decisão final sobre conteúdo institucional/legal)
- **Gerson Felipe** — contato comercial/técnico, (81) 99131-8362

## 3. Requisitos Funcionais

| ID | Requisito |
|----|-----------|
| RF01 | O site deve ter uma página Home com hero, resumo dos serviços e CTA de contato |
| RF02 | O site deve ter uma página Serviços detalhando os 5 serviços oferecidos |
| RF03 | O site deve ter uma página Sobre com a história/missão da empresa |
| RF04 | O site deve exibir uma seção/página de Clientes atendidos (logos), sujeita a autorização prévia de cada cliente |
| RF05 | O site deve ter uma página de Contato com formulário (nome, e-mail, telefone, mensagem) |
| RF06 | O envio do formulário de contato deve disparar um e-mail para gautomation2016@gmail.com |
| RF07 | O site deve exibir um botão/CTA de contato direto via WhatsApp ((81) 99131-8362) visível em todas as páginas |
| RF08 | O rodapé deve exibir CNPJ, endereço, e-mail, telefone e link do Instagram (@G_AUTOMATION_4.0) |
| RF09 | A página de Contato deve exibir o endereço em um mapa (Google Maps embed) |
| RF10 | O site deve ser navegável por menu único (header) em todas as páginas |

## 4. Requisitos Não Funcionais

| ID | Requisito |
|----|-----------|
| RNF01 | O site deve ser responsivo (mobile-first), já que parte do público acessará via celular |
| RNF02 | Tempo de carregamento da Home deve ficar abaixo de 2.5s em conexão 4G (Core Web Vitals) |
| RNF03 | O site deve ter metadados de SEO (title, description, Open Graph) em todas as páginas |
| RNF04 | O site deve seguir boas práticas básicas de acessibilidade (contraste, alt text em imagens, navegação por teclado) |
| RNF05 | O código deve ser versionado no repositório GitHub `g-automation` com deploy contínuo |
| RNF06 | O site deve ser servido via HTTPS |

## 5. Restrições e Riscos

- **Dados sensíveis do PDF que NÃO devem ir ao site público:** dados bancários (conta Sicredi), contrato social completo, CPF da sócia, inscrições municipal/estadual detalhadas. Apenas CNPJ (dado público de qualquer forma) pode aparecer no rodapé, se desejado, para reforçar credibilidade.
- **Uso de marcas de clientes:** os logos de clientes citados no PDF (Fersystem, Ceará Mirim Agronegócio, Sanovo Greenpack, D'Pádua, São José, Marmoraria Brandão, Pindorama) só devem ser publicados após confirmação/autorização explícita de cada cliente. Até obter essa autorização, a seção de clientes deve usar texto genérico ("atendemos indústrias como agroindústria, embalagens, marmoraria, entre outras") sem exibir as marcas.
- **Imagens do PDF (bancada, fotos de equipamentos):** verificar resolução/qualidade antes de publicar; substituir por fotos em melhor resolução se disponíveis.
- **Conteúdo textual do PDF tem espaço para revisão** (ex.: "otimizando" → "otimizar"; "suporte técnico multe marcas" → "multimarcas") antes de ir ao ar.

## 6. Stack Recomendada

- **Framework:** Next.js 14+ (App Router) com TypeScript — boas práticas de SEO (SSG/ISR), performance e produtividade de manutenção
- **Estilização:** Tailwind CSS — agilidade para um site pequeno com poucas páginas
- **Formulário/E-mail:** API route em Next.js + Resend (ou Nodemailer via SMTP, caso prefira usar a conta Gmail existente)
- **Hospedagem:** Vercel — deploy automático a partir do GitHub, certificado HTTPS gratuito, ótima integração com Next.js
- **Conteúdo:** arquivos de dados estáticos (`content/services.ts`, `content/clients.ts`) — dispensa CMS dado o porte do site; pode evoluir para CMS headless (ex. Sanity) se o volume de conteúdo crescer

## 7. Fora de Escopo (nesta fase)

- Blog/área de notícias
- Painel administrativo para gestão de leads
- Multilíngue (site apenas em pt-BR)
- Loja/e-commerce de peças
