<div align="center">

# ⚡ Boilerplate Astro

**Base enxuta e pronta pra produção pra construir landing pages rápido.**

Astro · TypeScript · Tailwind CSS v4

[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-managed-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)

</div>

---

## Stack

| Camada             | Escolha                                 | Por quê                                              |
| ------------------- | ---------------------------------------- | ----------------------------------------------------- |
| Framework            | [Astro](https://astro.build)             | HTML-first, zero JS por padrão, build rápido           |
| Linguagem            | TypeScript (`strict`)                    | Segurança de tipos sem fricção                        |
| Estilo               | [Tailwind CSS v4](https://tailwindcss.com) | Via `@tailwindcss/vite`, sem arquivo de config extra  |
| Ícones               | [`phosphor-astro`](https://github.com/seanmcp/phosphor-astro) | Componente `.astro` por ícone, zero JS runtime |
| Variantes de classe  | `tailwind-variants` + `tailwind-merge`   | Componentes com variantes sem conflito de classes     |
| Lint                 | ESLint (flat config) + `eslint-plugin-perfectionist` | Import/objeto/interface sempre ordenados |
| Formatação           | Prettier + `prettier-plugin-tailwindcss` | Classes Tailwind sempre na ordem canônica             |
| Git hooks            | Husky                                    | Lint + format automático no `pre-commit`              |

## Começando

```bash
pnpm install
pnpm dev
```

Abre em [`localhost:4321`](http://localhost:4321).

## Scripts

| Comando              | Ação                                              |
| --------------------- | --------------------------------------------------- |
| `pnpm dev`            | Sobe o dev server                                    |
| `pnpm build`          | `astro check` + build de produção em `./dist`        |
| `pnpm preview`        | Serve o build de produção localmente                 |
| `pnpm lint:fix`       | ESLint em todos os `.astro`, corrigindo o que der    |
| `pnpm prettier:fix`   | Prettier em todos os `.astro`, escrevendo            |

> O `pre-commit` do Husky já roda `prettier:fix` e `lint:fix` e re-adiciona os arquivos — não precisa rodar na mão antes de commitar.

## Estrutura

```
src/
├── pages/
│   └── index.astro     # rota /
└── styles/
    └── global.css       # @import "tailwindcss"
```

## Ícones

```astro
---
import Rocket from "phosphor-astro/RocketBold.astro";
---

<Rocket class="size-6 text-slate-900" />
```

Cada ícone do [Phosphor](https://phosphoricons.com) tem seu próprio arquivo — pesos (`Bold`, `Duotone`, `Fill`, `Light`, `Thin`) são componentes separados, não uma prop.

## Convenções de lint

`eslint.config.ts` roda com `eslint-plugin-perfectionist`: imports, exports, interfaces, objetos, enums e maps são sempre ordenados (por comprimento de linha, decrescente). Não precisa pensar em onde encaixar um novo import ou propriedade — o lint corrige.
