# STATE

Última atualização: 2026-09-21T18:25:00-03:00

## Status: COMPLETED

## Feature atual
- site-content-refresh (menu Projetos + telefone novo) — Status: CONCLUÍDO

## Tarefas
1. DONE — editar package.json/deploy.yml/prettier.yml, renomear branch
   no GitHub, atualizar git local, verificar (commit de2d176, push OK)
2. DONE — Header.js: item "Projetos" no menu (entre Experiências e Open
   Source); portfolio.js + PDF: telefone novo (+55 11939393283 / +55 11
   93939-3283); cópia solta do PDF em Downloads; fix de .gitattributes
   (PDF corrompia por CRLF, corrigido). Commits a552553 + 5b90f34, push OK,
   deploy verificado ao vivo. Ver .specs/audit/execution.md.
3. DONE — endereço atualizado no currículo (Cambuci) + descrições de
   Formação restauradas (regressão de uma rodada anterior). Commits
   de8cbea..8a5b69c.

## Nota
Discussão de pretensão salarial / vagas / estratégia de carreira feita
nesta sessão foi registrada **fora deste repositório** (é público) em
`~/.specs-personal/career-2026/spec.md` — não referenciar conteúdo
sensível aqui. Foco principal deste repo continua sendo site + currículo.

## Pendências fora deste repo — RESOLVIDAS 2026-09-21T20:30:00-03:00
Ver resultado final em `infra-platform/.specs/features/portfolio-launch-2026/spec.md`.
- `rastafinancas`: público (repo recriado do zero após achado crítico de
  segurança — ver spec). Usuário optou por não rotacionar 4 credenciais
  reais encontradas; risco residual conhecido e aceito por ele.
- `agents-harness`: público, `.specs`/docs sanitizados.
- `infra-platform`: público, revisão manual aprovada.

## Feature: openSource + WhatsApp — CONCLUÍDO 2026-09-22
4. DONE — openSource.display/showGithubProfile ativados; link "Ver código"
   no card RastaFinanças. Bug crítico achado e corrigido no processo:
   `secrets.GITHUB_TOKEN` sem escopo pra GraphQL pinnedItems.stargazers
   quebrava a seção em runtime — trocado por `GH_PROFILE_TOKEN` dedicado +
   blindagem defensiva em `Projects.js`. Commits 3591f3a, 8a4de27.
5. DONE — revertido `showGithubProfile` pra `false`: esse flag substituía
   a seção de Contato inteira pelo card genérico do GitHub (quebrado
   visualmente). `openSource.display` continua true (seção Projetos
   pinned repos intacta, é independente). Commit 96e2af3.
6. DONE — adicionado suporte a WhatsApp no `SocialMedia` (ícone + cor da
   marca + link `wa.me`), ao lado de github/linkedin/e-mail. Commit
   pendente nesta mesma rodada.

Pendência do usuário (fora do meu controle): pinar manualmente
`rasfaful-finances`, `infra-platform`, `agents-harness` no perfil GitHub
(API não suporta pin programático).
