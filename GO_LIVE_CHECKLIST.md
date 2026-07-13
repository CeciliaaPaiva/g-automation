# Checklist de Lançamento — Site G Automation

## Concluído (Sprints 0-4)

- [x] Projeto Next.js + Tailwind configurado, build de produção sem erros
- [x] Todas as páginas navegáveis (Home, Serviços, Sobre, Clientes, Contato)
- [x] Menu de navegação mobile funcional (antes só existia no desktop)
- [x] Formulário de contato integrado à rota `/api/contact` (Resend)
- [x] `sitemap.xml` e `robots.txt` gerados automaticamente
- [x] Metadata de SEO (title, description, Open Graph, Twitter card) por página
- [x] Ícones de acessibilidade marcados como decorativos (`aria-hidden`)
- [x] Dados sensíveis do PDF (conta bancária, contrato social, CPF) mantidos fora do site

## Pendente — depende de decisão/ação do cliente

- [ ] **Domínio definitivo**: escolher domínio (ex: `gautomation.com.br`) e configurar `NEXT_PUBLIC_SITE_URL` no ambiente da Vercel — hoje o sitemap/robots usam a URL provisória `gautomation.vercel.app`
- [ ] **Logo em alta resolução**: o logo usado no PDF de prospecção precisa ser fornecido em arquivo de imagem (PNG/SVG) para virar o favicon e a imagem de Open Graph do site — hoje o site usa apenas o nome em texto
- [ ] **Fotos profissionais**: substituir/complementar com fotos em boa resolução da bancada de trabalho e equipamentos (as do PDF têm baixa resolução para uso web)
- [ ] **Autorização de clientes**: confirmar com cada cliente citado (Fersystem, Ceará Mirim Agronegócio, Sanovo Greenpack, D'Pádua, São José, Marmoraria Brandão, Pindorama) se autorizam exibir nome/logo no site
- [ ] **Conta Resend**: criar conta em resend.com, gerar `RESEND_API_KEY` e configurar na Vercel (ver README.md)
- [ ] **Revisão final de textos**: validar com Ana Flavia/Gerson os textos institucionais antes do go-live

## Antes de apontar o domínio de produção

- [ ] Rodar `npm run build` localmente sem erros
- [ ] Testar o formulário de contato ponta a ponta com a chave real do Resend
- [ ] Testar em pelo menos 1 dispositivo mobile real (não só DevTools)
- [ ] Configurar variáveis de ambiente na Vercel (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`)
- [ ] Verificar HTTPS ativo (automático na Vercel)
