# Project Structure

## Directory Layout

```
.
├── src/              # Source code (TypeScript)
│   └── index.ts      # Main export: Homebrew component
├── test/             # Test files (Vitest)
│   └── index.test.ts # Component tests
├── .projen/          # Projen metadata (auto-generated)
├── .projenrc.ts      # Projen configuration (source of truth)
└── lib/              # Compiled JavaScript output (gitignored)
```

## Architecture

**Component Pattern**: Extends projen's `Component` class to integrate with projen's lifecycle.

**Key Classes**:
- `Homebrew`: Main component class
  - Manages package set
  - Synthesizes Brewfile
  - Creates projen tasks for installation

**Task Integration**:
- `install:homebrew`: Installs Homebrew if missing
- `homebrew:bundle`: Runs `brew bundle` to install packages
- Tasks are spawned by project's default task

## Code Conventions

- Use projen's `Component` base class for extensions
- Implement static `of()` method for component lookup
- Use `TextFile` for generating project files
- Prefer `Set` for unique collections
- Use readonly interfaces for options
- Export both interfaces and classes from index.ts

## Testing Approach

- Use `synthSnapshot()` to test generated files
- Test task creation and spawning
- Verify file contents in snapshots
- No mocking required for projen components
