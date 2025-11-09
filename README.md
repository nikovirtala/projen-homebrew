# projen-homebrew

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
