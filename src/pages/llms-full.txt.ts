import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { modules } from '../data/modules';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async () => {
  const lessons = await getCollection('lessons');

  const moduleNames: Record<string, string> = {
    architecture: 'Architecture',
    fundamentals: 'Fundamentals',
    configuration: 'Configuration',
    networking: 'Networking',
    lifecycle: 'Workload Lifecycle',
    scaling: 'Scaling & Scheduling',
    security: 'Security',
    advanced: 'Advanced',
    storage: 'Storage',
    patterns: 'Multi-Container Patterns',
    observability: 'Observability',
  };

  let content = `# Kubernetes by Example - Full Documentation

> Kubernetes concepts explained through annotated examples. Inspired by Go by Example.

This document contains the complete content of all Kubernetes by Example lessons. Each lesson includes YAML manifests with explanations that teach Kubernetes concepts through practical examples.

---

`;

  for (const mod of modules) {
    content += `# ${moduleNames[mod.key] || mod.key}\n\n`;

    for (const slug of mod.lessons) {
      const lesson = lessons.find(l => l.slug.endsWith(slug));
      if (lesson) {
        content += `## ${lesson.data.title}\n\n`;
        content += `> ${lesson.data.description}\n\n`;
        content += `URL: https://k8sbyexample.org/${slug}\n\n`;

        const filePath = path.join(process.cwd(), 'src/content/lessons', mod.id, `${slug}.mdx`);
        try {
          const rawContent = fs.readFileSync(filePath, 'utf-8');
          const contentWithoutFrontmatter = rawContent.replace(/^---[\s\S]*?---\n/, '');
          const contentWithoutImports = contentWithoutFrontmatter.replace(/^import[\s\S]*?;\n/gm, '');
          const cleanedContent = contentWithoutImports
            .replace(/<Intro>\s*<p>([\s\S]*?)<\/p>\s*<\/Intro>/g, '$1\n')
            .replace(/<table class="example-table">[\s\S]*?<FileHeader filename="([^"]+)"[\s\S]*?<\/table>/g, (_, filename) => `### ${filename}\n`)
            .replace(/<Row[^>]*>\s*<p slot="docs">([\s\S]*?)<\/p>[\s\S]*?```(\w+)\n([\s\S]*?)```[\s\S]*?<\/Row>/g, (_, docs, lang, code) => {
              const cleanDocs = docs.replace(/<code>([^<]+)<\/code>/g, '`$1`').replace(/<[^>]+>/g, '');
              return `${cleanDocs}\n\n\`\`\`${lang}\n${code}\`\`\`\n\n`;
            })
            .replace(/<TerminalHeader cmd="([^"]+)"[^>]*\/>/g, '### Terminal: $1\n')
            .replace(/<[^>]+>/g, '')
            .replace(/\n{3,}/g, '\n\n');

          content += cleanedContent.trim() + '\n\n';
        } catch {
          content += `Content available at: https://k8sbyexample.org/${slug}\n\n`;
        }

        content += '---\n\n';
      }
    }
  }

  content += `## License

MIT License - https://github.com/sozua/k8sbyexample.org/blob/main/LICENSE

## Source

GitHub: https://github.com/sozua/k8sbyexample.org
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
