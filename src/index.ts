import { Component } from "projen/lib/component";
import type { Project } from "projen/lib/project";
import { TextFile } from "projen/lib/textfile";

export interface HomebrewOptions {
    readonly packages?: string[];
}

export class Homebrew extends Component {
    public static of(project: Project): Homebrew | undefined {
        const isHomebrew = (c: Component): c is Homebrew => c instanceof Homebrew;
        return project.components.find(isHomebrew);
    }

    private readonly packages: Set<string>;

    constructor(project: Project, options: HomebrewOptions = {}) {
        super(project);

        this.packages = new Set(options.packages ?? []);

        const brewInstallTask = project.addTask("install:homebrew", {
            exec: 'command -v brew >/dev/null 2>&1 || NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
        });

        project.defaultTask?.spawn(brewInstallTask);

        this.synthesizeBrewfile();
    }

    public addPackage(packageName: string): void {
        this.packages.add(packageName);
        this.synthesizeBrewfile();
    }

    private synthesizeBrewfile(): void {
        if (this.packages.size === 0) return;

        this.project.tryRemoveFile("Brewfile");

        new TextFile(this, "Brewfile", {
            lines: Array.from(this.packages).map((pkg) => `brew "${pkg}"`),
        });

        const brewBundleTask =
            this.project.tasks.tryFind("homebrew:bundle") ??
            this.project.addTask("homebrew:bundle", {
                exec: "brew bundle",
            });

        const brewInstallTask = this.project.tasks.tryFind("install:homebrew");
        if (brewInstallTask && !brewInstallTask.steps.some((s) => s.spawn === "homebrew:bundle")) {
            brewInstallTask.spawn(brewBundleTask);
        }
    }
}
