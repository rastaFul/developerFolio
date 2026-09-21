# Spec: Renomear branch padrão master → main

Status: APROVADO
Criado em: 2026-09-21T13:10:23-03:00
Aprovado em: 2026-09-21T13:10:23-03:00 — decisão item 6: opção (b), alinhar
`package.json` deploy para `-b gh-pages`.

## Contexto
`developerFolio` (rastaFul/developerFolio) é fork de `saadpasta/developerFolio`.
Objetivo: trocar a branch padrão local/remota de `master` para `main` e
atualizar tudo que referencia `master` diretamente por nome.

## Análise de viabilidade (feita, read-only)

- Fork confirmado via API: `isFork: true`, parent `saadpasta/developerFolio`.
  Branch padrão de cada repo é independente — renomear a branch no fork
  **não afeta o upstream** e não quebra a relação de fork.
- `origin/HEAD` → `master`; `upstream` (saadpasta) também usa `master`
  (não controlamos nem precisamos mudar o upstream).
- Sem branch protection em `master` (404 na API) → rename sem bloqueios.
- Sem PRs abertos no fork → nenhum PR será afetado.
- GitHub Pages do fork usa como source a branch `gh-pages` (build_type legacy,
  cname `rastaful.dev`), não `master` → rename do default branch **não afeta**
  o deploy/domínio custom.
- Busca em todo o repo (exceto `.git`/`node_modules`) por referências literais
  a `master` encontrou 4 arquivos:
  1. `.github/workflows/deploy.yml` — `on.push.branches: [master]`
  2. `.github/workflows/prettier.yml` — `on.pull_request.branches: [master]`
  3. `package.json` — script `deploy`: `gh-pages -b master -d build`
  4. `README.md` — badge de licença aponta para
     `github.com/saadpasta/developerFolio/blob/master/LICENSE`
- `infra-platform` foi checado (regra de CI/Dockerfile): este projeto é um
  site estático publicado via GitHub Pages, fora do stack compartilhado
  (não usa Docker, não entra em `platform_net`). `repository-layout.md` não
  menciona este projeto. Conclusão: convenções do infra-platform não se
  aplicam aqui, nenhuma leitura adicional necessária além da checagem feita.

**Conclusão: é possível, sem bloqueios técnicos.**

## Mudanças propostas

1. **GitHub (remoto)**: renomear branch padrão `master` → `main` via API
   (`POST /repos/rastaFul/developerFolio/branches/master/rename`). O GitHub
   mantém redirect automático de `master` para `main` (clones/pulls antigos
   continuam funcionando) e atualiza sozinho o `origin/HEAD`.
2. **Local (git)**: `git branch -m master main`, `git fetch origin`,
   `git branch -u origin/main main`, `git remote set-head origin -a`.
3. **`.github/workflows/deploy.yml`**: `branches: [master]` → `[main]`.
4. **`.github/workflows/prettier.yml`**: `branches: [master]` → `[main]`.
5. **`README.md`**: badge de licença — **manter como está**. O link aponta
   para o repositório upstream (`saadpasta`), cuja branch padrão continua
   sendo `master`. Trocar para `main` quebraria o link (branch não existe lá).
6. **`package.json` (script `deploy`)**: `gh-pages -b master -d build` —
   **pendente decisão do usuário** (ver pergunta abaixo). Este `-b master`
   não é a branch padrão do repo, é a branch de destino do publish manual do
   pacote `gh-pages`, hoje inconsistente com o Pages source real (`gh-pages`).

## Decisão (item 6)
Opção (b): `package.json` script `deploy` → `gh-pages -b gh-pages -d build`,
alinhando com o source real do GitHub Pages.

## Critério de pronto
- Branch padrão no GitHub = `main`.
- Branch local = `main`, tracking `origin/main`.
- `deploy.yml` e `prettier.yml` disparando em `main`.
- `git push` de teste em `main` aciona o workflow `deploy.yml` normalmente.
- README e package.json resolvidos conforme decisão acima.
- Nenhum arquivo remanescente referenciando `master` (exceto o link legítimo
  para o upstream no README, se mantido).

## Gates
Mudança é config/CI, sem código de aplicação — não há TDD aplicável.
Gates: validação manual do workflow (`git push` de teste ou re-run manual),
`npm run lint`/`npm test` inalterados (não há mudança de código-fonte).
