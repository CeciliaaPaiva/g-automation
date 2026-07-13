# Planejamento de Sprints — Site Institucional G Automation Industrial

Sprints de aproximadamente 1 semana, ritmo ajustável conforme disponibilidade da equipe.

## Sprint 0 — Fundação
**Objetivo:** preparar base técnica e visual do projeto.

- Criar projeto Next.js 14 (App Router) + TypeScript + Tailwind CSS no repositório `g-automation`
- Configurar lint/format (ESLint, Prettier)
- Conectar repositório à Vercel com deploy automático (branch `main`)
- Extrair e organizar assets do PDF (logo, fotos) em `public/`
- Definir identidade visual (paleta de cores a partir do logo azul, tipografia, espaçamentos)
- Redigir/revisar textos institucionais a partir do conteúdo do PDF (corrigir pequenos erros de digitação)

**Entregável:** projeto rodando localmente e em ambiente de preview na Vercel, com layout base (header/footer) e identidade visual definida.

## Sprint 1 — Home e Navegação
**Objetivo:** primeira página pública navegável.

- Componente Header (logo + menu: Home, Serviços, Sobre, Clientes, Contato)
- Componente Footer (CNPJ, endereço, telefone, e-mail, Instagram)
- Botão flutuante de WhatsApp (visível em todas as páginas)
- Página Home: hero, resumo de serviços (cards), seção "clientes atendidos" (placeholder até autorização), CTA final de contato
- Metadata básica de SEO (title/description) para Home

**Entregável:** Home completa e navegação funcional entre rotas (mesmo que outras páginas ainda estejam em construção).

## Sprint 2 — Serviços e Sobre
**Objetivo:** detalhar a oferta e a história da empresa.

- Página Serviços: os 5 serviços do PDF, cada um com título, descrição expandida e ícone
- Página Sobre: missão, diferenciais (diagnóstico eficaz, atendimento multimarcas, atuação no Nordeste), ano de fundação (2022)
- Revisão de conteúdo com o cliente (Ana Flavia / Gerson) antes de finalizar textos

**Entregável:** páginas Serviços e Sobre publicadas em ambiente de preview para validação do cliente.

## Sprint 3 — Clientes e Contato
**Objetivo:** provas sociais e canal de conversão.

- **Pré-requisito:** confirmar com Ana Flavia/Gerson quais clientes autorizaram exibição de logo/marca
- Página/seção Clientes: logos autorizados ou texto genérico por segmento, se autorização pendente
- Página Contato: formulário (nome, e-mail, telefone, mensagem) com validação client-side
- API route `/api/contact` integrada a serviço de e-mail (Resend/Nodemailer) enviando para gautomation2016@gmail.com
- Confirmação visual de envio (toast/mensagem de sucesso) e tratamento de erro
- Embed do Google Maps com o endereço da empresa
- Link/botão de WhatsApp com mensagem pré-preenchida

**Entregável:** fluxo de contato ponta a ponta funcionando (formulário → e-mail recebido), página Clientes revisada.

## Sprint 4 — Qualidade, SEO e Go-live
**Objetivo:** preparar o site para produção.

- Auditoria de responsividade (mobile, tablet, desktop) em todas as páginas
- Auditoria de acessibilidade básica (contraste, alt text, navegação por teclado)
- SEO: sitemap.xml, robots.txt, Open Graph/Twitter cards, favicon a partir do logo
- Teste cross-browser (Chrome, Safari, Firefox)
- Revisão final de conteúdo e imagens com o cliente
- Configurar domínio próprio (se houver) apontando para a Vercel
- Deploy de produção e checklist final de lançamento

**Entregável:** site em produção, público, com domínio configurado (se aplicável).

## Backlog (pós-lançamento, fora do escopo inicial)
- Blog/notícias sobre manutenção industrial
- Analytics (Vercel Analytics ou Plausible) e acompanhamento de conversão do formulário
- CMS headless caso o volume de conteúdo cresça
- Depoimentos de clientes (mediante autorização)
