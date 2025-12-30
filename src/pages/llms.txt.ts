import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { modules } from '../data/modules';

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

  let content = `# Kubernetes by Example

> Kubernetes concepts explained through annotated examples. Inspired by Go by Example.

This site teaches Kubernetes concepts through practical, annotated YAML examples. Each lesson includes manifests with inline explanations that teach you how to configure and deploy applications on Kubernetes.

## Lessons

`;

  for (const mod of modules) {
    content += `### ${moduleNames[mod.key] || mod.key}\n\n`;

    for (const slug of mod.lessons) {
      const lesson = lessons.find(l => l.slug.endsWith(slug));
      if (lesson) {
        content += `- [${lesson.data.title}](https://k8sbyexample.org/${slug}): ${lesson.data.description}\n`;
      }
    }
    content += '\n';
  }

  content += `## Additional Resources

- [GitHub Repository](https://github.com/sozua/k8sbyexample.org)
- [Full Content for LLMs](https://k8sbyexample.org/llms-full.txt)

## License

MIT License - https://github.com/sozua/k8sbyexample.org/blob/main/LICENSE
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
