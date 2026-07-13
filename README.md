# G Automation — Site Institucional

Site institucional da G Automation Industrial LTDA, construído em Next.js
(App Router) + TypeScript + Tailwind CSS.

Documentação de planejamento: [REQUIREMENTS.md](./REQUIREMENTS.md) e
[SPRINTS.md](./SPRINTS.md).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

O formulário de contato (`/contato`) envia e-mail via
[Resend](https://resend.com). Copie `.env.example` para `.env.local` e
preencha:

```bash
cp .env.example .env.local
```

| Variável | Descrição |
|---|---|
| `RESEND_API_KEY` | API key gerada em resend.com/api-keys |
| `CONTACT_FROM_EMAIL` | Remetente do e-mail (opcional). Sem domínio verificado no Resend, use o padrão `onboarding@resend.dev`; com domínio próprio, use algo como `contato@gautomation.com.br` |

Sem `RESEND_API_KEY` configurada, a rota `/api/contact` responde com erro
500 e o formulário exibe mensagem de falha — o restante do site continua
funcionando normalmente (WhatsApp e mailto como alternativas).

## Deploy

Projeto pensado para deploy na [Vercel](https://vercel.com), conectado a
este repositório. Configure as variáveis de ambiente acima em
Project Settings → Environment Variables antes do primeiro deploy de
produção.
