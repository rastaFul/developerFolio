# Spec: Atualização de conteúdo do site + decisão de open source

Status: APROVADO — conteúdo final definido abaixo, execução em andamento
Criado em: 2026-09-21T14:58:00-03:00
Aprovado em: 2026-09-21T15:08:29-03:00
Contexto cross-project: infra-platform/.specs/features/portfolio-launch-2026/spec.md

## Conteúdo final aprovado para execução

### `greeting.resumeLink`
Trocar o link quebrado do Google Drive por arquivo auto-hospedado:
`public/curriculo-rodrigo-barbosa.pdf` → servido em
`https://rastaful.dev/curriculo-rodrigo-barbosa.pdf` (GH Pages já serve
estático da raiz do `public/`). Elimina dependência externa.

### `skillsSection`
```js
subTitle: "ENGENHEIRO DE SOFTWARE COM FOCO EM PLATFORM ENGINEERING E DEVOPS",
skills: [
  "⚡ Platform Engineer / DevOps Sênior | Kubernetes, Terraform, AWS, GitOps, Observabilidade",
  "⚡ Perfil híbrido: atuo tanto no código do produto (Node.js/TypeScript) quanto na infraestrutura",
  "⚡ Construo ferramentas próprias de automação de infraestrutura assistida por IA (agents-harness)"
]
softwareSkills: JavaScript, NodeJS, AWS, Docker, Kubernetes, Terraform (fa-cubes),
  GitOps/ArgoCD (fa-code-branch), Observabilidade (fa-chart-line), Git, Linux
  — remove NPM, Windows, MySQL, ícone genérico "DevOps" (redundante agora)
```

### `techStack` (proficiência)
Backend 80% (mantém) · **DevOps/Platform Engineering 40% → 75%** · Programming 70% (mantém)

### `workExperiences` (Pontaltech)
Bullets já propostos e aprovados anteriormente nesta conversa (transição
backend→DevOps, migração EC2→EKS/Helm/ArgoCD, observabilidade, FinOps,
segurança TLS/IRSA) — aplicar como está.

### `bigProjects` → renomear pra "Projetos", `display: true`
4 cards, imagem = screenshot real do site ao vivo (via Playwright,
`playwright_screenshot` de cada URL, evita depender de asset manual):

| projectName | desc | footerLink |
|---|---|---|
| VetCare | Sistema de gestão para clínicas veterinárias — prontuário eletrônico, agendamento, prescrições e cuidados preventivos, com integração à Google Calendar. | Visitar site → vetcare.rastaful.dev |
| Artists Booking | Marketplace para contratação de artistas, com busca geolocalizada e fluxo de reserva guiado. | Visitar site → artists.rastaful.dev |
| RastaFinanças | App pessoal de controle financeiro, com importação de extrato bancário, alertas e notificações automatizadas. | Visitar site → financas.rastaful.dev (+ "Ver código" assim que `opensource-prep` do repo terminar e ele for público) |
| MicroGrow | Sistema de monitoramento e automação de cultivo indoor — sensores simulados, MQTT, InfluxDB e dashboards em tempo real. | Visitar site → grow.rastaful.dev |

Vetcare e Artists Booking **nunca** recebem link de código (produtos
comerciais).

### `openSource` (GitHub pinned)
`display: true`, `showGithubProfile: "true"` — só depois que
`rastafinancas`, `infra-platform` e `agents-harness` estiverem públicos e
pinados (dependência das sub-specs, ver doc cross-project).

### Currículo novo (PDF)
Gerar via HTML/CSS equivalente ao layout atual (monograma "R⨯B", 2 colunas,
barras de competência) + `playwright` (`page.pdf()`) pra renderizar —
ferramenta já disponível no ambiente, sem instalação extra. Conteúdo
atualizado com a mesma narrativa pública do site (sem a seção "não
publicar" do relatório de entregas). Salvar em
`public/curriculo-rodrigo-barbosa.pdf` no repo.

### Classificação UX (steering/ux-journey.md)
TRIVIAL — troca de conteúdo/copy e habilitação de seção já implementada no
código do template, sem navegação nova. Gate Playwright funcional roda
(captura de tela como evidência), `ux-journey-judge` não é necessário.

## Pendências que ainda bloqueiam algo
- `rastafinancas`: aguardando resposta do usuário sobre reuso de senha
  antes de reescrever histórico do git (ver spec local do repo).
- `infra-platform`: aguardando revisão manual do usuário antes do flip de
  visibilidade (ver spec local do repo).
- Link "Ver código" do RastaFinanças no card de Projetos só entra depois
  que a spec local dele for concluída — vai ser um follow-up, não bloqueia
  o resto do conteúdo do site.

## Contexto
`developerFolio` está desatualizado: fala de "Desenvolvedor Backend" genérico,
projetos ocultos por falta de conteúdo, e várias seções ainda têm dados de
template do fork original (saadpasta). Hoje o usuário tem 4 produtos rodando
(vetcare, rastafinancas, microgrow, artists-booking, expostos via Cloudflare
Tunnel) e uma transição recente pra DevOps/Platform Engineering. Objetivo:
mapear TODAS as seções configuráveis do site (`src/portfolio.js`) e decidir,
seção por seção, o que atualizar — incluindo habilitar "Projetos" e decidir
o que vira open source.

## Mapa completo das seções (`src/portfolio.js`)

| Seção | Display hoje | Situação | Recomendação |
|---|---|---|---|
| `splashScreen` | on | ok | manter |
| `greeting` | on | **bug**: `resumeLink` é uma URL do Google Drive quebrada (duas URLs concatenadas por engano) | corrigir link, apontar pro CV atualizado |
| `socialMediaLinks` | on | ok (github/linkedin/gmail reais) | manter |
| `skillsSection` | on | subtítulo "DESENVOLVEDOR BACKEND..." e bullets genéricos, não refletem a virada pra DevOps/Platform Eng. | atualizar texto + adicionar skills (Terraform, Kubernetes já existe, ArgoCD/IaC) |
| `educationInfo` | on | ok, dados reais (FATEC, ETEC) | manter |
| `techStack` (proficiência) | on | "DevOps 40%" — subestimado dado o que está nas Entregas de Valor | reavaliar percentuais |
| `workExperiences` | on | Pontaltech ainda descreve DevOps genérico, sem as entregas reais (EKS, ArgoCD, observabilidade, FinOps, segurança) | **já cobrimos isso na rodada anterior** — bullets propostos aguardando sua confirmação |
| `openSource` (GitHub pinned repos) | **off** (`display:false`, `showGithubProfile:"false"`) | nenhum repo público "apresentável" hoje pinado | ligar só depois de decidir quais repos ficam públicos (ver matriz abaixo) e pinar eles no perfil GitHub |
| `bigProjects` ("Projetos") | **off** | ainda tem os projetos de template do fork (Saayahealth, Nextu, texto Lorem Ipsum) | **ligar e substituir pelos 4 produtos reais** (ver proposta abaixo) |
| `achievementSection` | off | conteúdo de template (conquistas do Saad Pasta, não suas) | manter off, ou limpar/remover se quiser zerar resíduo do fork |
| `blogSection` | off | conteúdo de template (blog do Saad Pasta) | manter off ou limpar |
| `talkSection` | off | conteúdo de template | manter off ou limpar |
| `podcastSection` | off | conteúdo de template | manter off ou limpar |
| `contactInfo` | — | ok, dados reais | manter |
| `twitterDetails` | off | — | manter off (sem decisão pendente) |
| `isHireable` | `false` | você está negociando reajuste no emprego atual, não abertamente buscando vaga | **pergunta em aberto**: mantém `false`? |

## Proposta: seção "Projetos" (`bigProjects`)

Substituir os 2 placeholders de template pelos 4 produtos reais, com link
para o site ao vivo (subdomínio via túnel) e, quando aplicável, link pro
código-fonte:

| Projeto | URL ao vivo | Ver código? |
|---|---|---|
| RastaFinanças | financas.rastaful.dev | Sim, depois de remediar o achado de segurança abaixo |
| MicroGrow | grow.rastaful.dev | Não (fica privado, conforme sua intenção) |
| VetCare | vetcare.rastaful.dev | Já é possível — repo já é público (ver achado abaixo) |
| Artists Booking | artists.rastaful.dev | Não (fica privado, conforme sua intenção) |

Preciso de 1 frase de descrição de cada produto (o que ele faz, pra quem)
pra preencher `projectDesc` — ou eu redijo uma proposta a partir do que já
sei dos repos e você ajusta.

## Matriz de decisão: o que vira open source

Analisei os 5 repositórios candidatos (visibilidade real no GitHub +
varredura por segredos trackeados no git). Resultado:

| Repo | Visibilidade atual | Achado de segurança | Recomendação |
|---|---|---|---|
| **vetcare** | **Já é PÚBLICO** (achado, você não tinha listado) | Nenhum segredo trackeado encontrado | Já dá pra pinar/mostrar como open source hoje. **Confirma que essa publicação foi intencional?** |
| **rastafinancas** | Privado | 🔴 **`apps/web/.env.e2e` está commitado no git com seu e-mail real + senha em texto puro** (`q1w2e3r4t5`) | **Bloqueador antes de abrir**: trocar a senha (se reutilizada em qualquer lugar, trocar lá também), remover o arquivo do histórico do git (não basta apagar do working tree), adicionar `.env.e2e` ao `.gitignore`, adicionar `LICENSE`. Depois disso, bom candidato — projeto pessoal, sem dado de terceiro. |
| **infra-platform** | Privado | Nenhum segredo trackeado; achei o UUID do Cloudflare Tunnel hardcoded em `tunnel/cloudflared/config.yml` (identificador, não é credencial sozinho, mas eu tiraria antes de publicar por precaução) | Bom candidato — mostra a competência de Platform Engineering que você quer destacar na carreira. Recomendo: trocar UUID por placeholder, rodar um scan de segredo completo (gitleaks — já faz parte do gate padrão) antes de flipar visibilidade, adicionar `LICENSE` |
| **artists-booking** | Privado | 🟡 `apps/api/.env.test` trackeado com um `METRICS_TOKEN` real (não é placeholder) | Você não listou como candidato — mantenho privado. Só registrando o achado caso mude de ideia depois. |
| **microgrow** | Privado | Nenhum segredo trackeado | Você não listou como candidato — mantenho privado, sem bloqueio se decidir abrir depois. |

## Decisões confirmadas pelo usuário (2026-09-21)

- **vetcare** e **artists-booking**: são produtos que ele quer **comercializar**
  → código **não pode ser aberto** (venderia menos se o source estivesse
  público). Entram na seção Projetos só com link do site ao vivo, **sem**
  link de código.
  - 🚨 **Achado urgente**: `vetcare` está **PÚBLICO no GitHub hoje**, o que
    contradiz a intenção de comercializar. Isso não foi decisão consciente —
    é uma inconsistência a corrigir. Ver "Ação urgente" abaixo.
- **rastafinancas**: uso pessoal, sem intenção comercial → aprovado abrir,
  **depois** de remediar o vazamento de credencial (e-mail + senha em
  `apps/web/.env.e2e`, ver matriz acima). Entra em Projetos com link do site
  + link de código.
- **infra-platform**: aberto só pra demonstrar competência técnica
  (contextos específicos o suficiente pra não vazar nada sensível do
  trabalho atual). Aprovado abrir, depois de: trocar o UUID do túnel
  Cloudflare por placeholder, rodar scan de segredo completo (gitleaks) e
  adicionar `LICENSE`. Não entra em "Projetos" (não é produto com link ao
  vivo pro público) — entra na seção `openSource` (GitHub pinned repos).
- **microgrow**: não foi listado para abrir código — permanece privado por
  padrão. Entra em Projetos só com link do site ao vivo (ver decisão geral
  abaixo).
- **Seção Projetos (`bigProjects`) — decisão geral**: mostrar **todos os 4
  produtos com deploy** (vetcare, artists-booking, rastafinancas, microgrow),
  já que essa seção só expõe o link do site, nunca o código. Link de código
  aparece separadamente (seção `openSource`/GitHub pinned) só para
  rastafinancas e infra-platform, quando estiverem prontos.

## Ação urgente (fora do escopo desta spec, separada e sensível ao tempo)

`vetcare` está público no GitHub enquanto o plano é comercializá-lo. Cada dia
público é exposição desnecessária do código de um produto que ele quer
vender. Recomendo tornar privado agora, antes de qualquer outra coisa:
`gh repo edit rastaFul/vetcare --visibility private --accept-visibility-change-consequences`
(isso quebra qualquer clone público existente, mas não há indício de
terceiros dependendo disso). **Aguardando autorização explícita pra
executar** — é a única ação desta conversa que faz sentido rodar antes do
resto da spec, por ser correção de um estado indesejado, não uma feature nova.

## Seções sem uso hoje — avaliação de conteúdo real disponível

Perguntado: "pensando em tudo que eu faço hoje e tenho pronto, teria algo
pra exibir" nas seções `achievementSection`, `blogSection`, `talkSection`,
`podcastSection`. Avaliação com base em tudo levantado até agora (CV,
relatório de entregas, repos):

- **Certificações/achievements**: nenhuma certificação formal (AWS, CKA,
  etc.) apareceu em nenhum documento visto. Nada pronto pra essa seção hoje.
- **Blog**: nenhum post publicado encontrado. Existe matéria-prima forte pra
  virar post técnico (ex.: o bug de IPv6 dual-stack do cloudflared/
  host.docker.internal documentado no `infra-platform`, ou o próprio sistema
  de agentes spec-driven — `agents-harness`/kiro-powers), mas é conteúdo a
  **escrever**, não algo já pronto.
- **Talks/Podcast**: nenhum registro de palestra ou participação em podcast.
- **Projeto não considerado ainda**: `agents-harness` (o framework de
  orquestração de agentes de IA spec-driven que você usa/constrói) é um
  diferencial real pro currículo de alguém buscando Platform
  Engineering/DevOps sênior — vale considerar como 5º item de Projetos ou
  candidato a open source, se fizer sentido pra você. Não assumi nada, só
  registrando a opção.
- **Conclusão**: as 4 seções seguem sem conteúdo real hoje → recomendo
  manter `display: false` como estão (não vale forçar conteúdo vazio) e
  reavaliar se/quando houver certificação, post ou palestra de fato.

## Ainda em aberto

1. Frases curtas de descrição dos 4 produtos pra `bigProjects` (ou eu
   redijo uma proposta e você ajusta).
2. Autorização pra rodar a ação urgente do `vetcare` (privar agora).
3. Quer que eu já abra specs de remediação nos repos `rastafinancas`
   (segredo) e `infra-platform` (UUID + LICENSE + scan), ou trata isso você
   mesmo antes de eu tocar em código de lá?
4. `isHireable`: mantém `false`?
5. Seções de template com conteúdo do Saad Pasta (`achievementSection`,
   `blogSection`, `talkSection`, `podcastSection`) — limpo o placeholder já
   que ficam ocultas mesmo, ou deixo como está por enquanto?

## Fora de escopo desta spec
- A correção do `workExperiences` (Pontaltech) já foi proposta na rodada
  anterior desta conversa — aguardando sua confirmação, entra no mesmo PR
  de execução quando aprovado.
- A remediação de segredo do `rastafinancas` é uma mudança em outro
  repositório — não será executada a partir daqui sem uma spec própria
  nesse repo (ou autorização explícita sua pra tratar aqui mesmo).
