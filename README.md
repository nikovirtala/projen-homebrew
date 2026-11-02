# projen-homebrew

> [!WARNING]
> **This package is deprecated** and won't get new features or fixes. Use [`@nikovirtala/projen-constructs`](https://github.com/nikovirtala/projen-constructs) instead.
>
> Replace the dev dependency `@nikovirtala/projen-homebrew` with `@nikovirtala/projen-constructs`, then change the import:
>
> ```typescript
> import { Homebrew } from "@nikovirtala/projen-constructs";
> ```
>
> The replacement also writes `tap` entries and marks formulae from non-official taps as `trusted: true`, which Homebrew 6 requires.
>
> See the [migration guide](https://github.com/nikovirtala/projen-constructs#migrating-from-the-standalone-packages) for the steps and the differences to expect.

Homebrew component for projen projects.

## Installation

```bash
npm install @nikovirtala/projen-homebrew
```

## Usage

```typescript
import { Homebrew } from '@nikovirtala/projen-homebrew';

const homebrew = new Homebrew(project, {
    packages: ['jq', 'yq']
});

// Add more packages
homebrew.addPackage('gh');
```

## Features

- Automatically checks for Homebrew installation
- Installs Homebrew unattended if missing
- Generates `Brewfile` with specified packages
- Runs `brew bundle` during project install task

## License

MIT
