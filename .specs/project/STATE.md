# STATE

Última atualização: 2026-09-22T13:43:20-03:00

## Status: COMPLETED (sessão encerrada por pedido do usuário — continua em outra sessão)

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

## Pins GitHub — 2026-09-22
Usuário já pinou manualmente `infra-platform` e `agents-harness` (confirmado
via profile.json ao vivo, sem erros). `rasfaful-finances` segue de fora —
repo continua privado (rotação de credenciais pendente, decisão do
usuário). Ele confirmou: **fica em segundo plano por enquanto**, não é
bloqueio nem pendência urgente. Retomar só se ele pedir.

## Feature: bio GitHub + README de perfil + 3 conquistas técnicas — CONCLUÍDO 2026-09-22T16:30:00-03:00
7. DONE — bio do GitHub atualizada via API (escopo `user` obtido por
   device flow).
8. DONE — README de perfil (`rastaFul/rastaFul`, repo separado, público)
   reescrito — estava com "aprendendo DevOps"/"desenvolvedor backend",
   agora alinhado com site + projetos públicos.
9. DONE — 3 conquistas do relatório de entregas adicionadas: service mesh
   (Istio) no bullet de modernização; novo bullet "Dados e IaC" (MongoDB
   operator + reorganização do Terraform); currículo com 2 barras novas
   de competência, ainda 1 página. Commits 6d44cac, de32b90 (repo
   rastaFul/rastaFul).

---

# 🔖 CHECKPOINT DE ENCERRAMENTO — 2026-09-22T13:43:20-03:00
Sessão encerrada por pedido do usuário ("Registre tudo, irei continuar em
outra sessão"). Tudo abaixo é o estado real pra retomar sem perder contexto.

## O que está 100% feito e no ar
- Site (`rastaful.dev`): conteúdo revisado (skills, experiência, projetos,
  proficiência, contato+WhatsApp, seção Open Source), pipeline de deploy
  corrigido (Node 20 + token de perfil dedicado), currículo novo hospedado
  no próprio site.
- Currículo PDF: layout mantido, conteúdo atualizado (transição de cargo
  correta, endereço novo, telefone novo, Formação completa, 3 conquistas
  técnicas novas), cópia solta em `Downloads/curriculo-rodrigo-barbosa.pdf`.
- GitHub: bio + README de perfil atualizados; `infra-platform` e
  `agents-harness` públicos, sanitizados e pinados manualmente pelo
  usuário; `vetcare`/`artists-booking`/`microgrow` confirmados privados
  (produtos comerciais, decisão consciente).

## Pendências reais pra próxima sessão (nenhuma bloqueia nada, todas de baixa urgência)
1. **`rastafinancas` continua privado** — usuário optou por não rotacionar
   4 credenciais reais achadas no histórico (JWT_SECRET, RESEND_API_KEY,
   GOOGLE_CLIENT_SECRET, GITHUB_CLIENT_SECRET) antes de reabrir. Repo já
   está tecnicamente limpo (recriado do zero, gitleaks OK) — só falta ele
   rotacionar quando quiser pra eu reabrir público e ele conseguir pinar.
2. **Barras de competência do currículo** (Kubernetes, Terraform, AWS etc.)
   continuam chute meu — pedir validação dele antes de considerar
   currículo 100% fechado.
3. **Certificação**: sugestão estratégica (CKA ou Terraform Associate) —
   não iniciado, é decisão dele.
4. **Post técnico**: `agents-harness/RESULT.md` (a saga "Gate Hardening",
   10 bugs reais achados via build de verdade) é matéria-prima pronta pra
   LinkedIn/Medium — ninguém começou a escrever ainda.
5. **`tldr-projects`** (achado na varredura): servidor MCP real dele
   (usa `@modelcontextprotocol/sdk`), mas só 3 commits, nunca foi enviado
   pro GitHub. Recomendado terminar antes de expor — bom reforço pro
   bloco "MCP" do currículo/entrevistas de IA quando estiver pronto.
6. **`dev-environment`** (achado na varredura): repo privado, bootstrap
   Ansible pessoal, baixo risco — candidato a open source futuro, não
   decidido ainda.
7. **LinkedIn**: não foi tocado nesta sessão — vale espelhar a mesma
   narrativa do site/CV lá também, recrutador cruza os dois.
8. **Estratégia de carreira/pretensão salarial**: registrada fora deste
   repo em `~/.specs-personal/career-2026/spec.md` (nunca comitar isso
   em nenhum repo git). Pergunta em aberto lá: regime tributário do PJ
   atual, necessário pra calcular o piso real de qualquer proposta CLT.
   Vagas da Evertec (SRE Pleno, Arquiteto IA, P&D IA) mapeadas, aumento
   interno seguindo como prioridade #1.

## Onde olhar em cada repo (pra uma sessão nova não se perder)
- `developerFolio/.specs/project/STATE.md` (este arquivo) — hub principal
- `infra-platform/.specs/features/portfolio-launch-2026/spec.md` — spec
  cross-project com o resultado final de todos os repos
- `rastafinancas/.specs/features/opensource-prep/spec.md` — histórico do
  incidente de segurança e remediação
- `agents-harness/.specs/features/opensource-prep/spec.md` — histórico da
  sanitização antes de abrir
- `~/.specs-personal/career-2026/spec.md` — estratégia de carreira
  (fora de git, nunca mover pra dentro de um repo)
