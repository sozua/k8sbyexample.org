<div align="center">
  <img src="./public/favicon.svg" alt="Logo" height=64>
</div>
<h3 align="center">Kubernetes by Example</h3>

<div align="center">
  <a href="https://k8sbyexample.org">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/sozua/k8sbyexample.org/issues/new">Issues</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/sozua/k8sbyexample.org">GitHub</a>
  <br />
</div>

## What is Kubernetes by Example?

Kubernetes by Example is an interactive learning resource that teaches Kubernetes through annotated YAML examples. Learn by reading production-ready patterns with side-by-side explanations.

## Topics

- Architecture
  - [Overview](https://k8sbyexample.org/overview)
  - [Control Plane](https://k8sbyexample.org/control-plane)
  - [Node Components](https://k8sbyexample.org/node-components)

- Fundamentals
  - [Namespaces](https://k8sbyexample.org/namespaces)
  - [Pods](https://k8sbyexample.org/pods)
  - [Labels](https://k8sbyexample.org/labels)
  - [Deployments](https://k8sbyexample.org/deployments)
  - [ReplicaSets](https://k8sbyexample.org/replicasets)
  - [Services](https://k8sbyexample.org/services)

- Configuration
  - [ConfigMaps](https://k8sbyexample.org/configmaps)
  - [Secrets](https://k8sbyexample.org/secrets)
  - [Environment Variables](https://k8sbyexample.org/env-variables)

- Networking
  - [Ingress](https://k8sbyexample.org/ingress)
  - [Network Policies](https://k8sbyexample.org/network-policies)
  - [DNS](https://k8sbyexample.org/dns)

- Workload Lifecycle
  - [Init Containers](https://k8sbyexample.org/init-containers)
  - [Probes](https://k8sbyexample.org/liveness-probes)
  - [Rolling Updates](https://k8sbyexample.org/rolling-updates)
  - [Graceful Shutdown](https://k8sbyexample.org/graceful-shutdown)

- Scaling & Scheduling
  - [Resource Limits](https://k8sbyexample.org/resource-limits)
  - [HPA](https://k8sbyexample.org/hpa)
  - [Node Affinity](https://k8sbyexample.org/node-affinity)
  - [Taints & Tolerations](https://k8sbyexample.org/taints-tolerations)
  - [Pod Disruption Budgets](https://k8sbyexample.org/pdb)

- Security
  - [Security Context](https://k8sbyexample.org/security-context)
  - [Service Accounts](https://k8sbyexample.org/service-accounts)
  - [RBAC](https://k8sbyexample.org/rbac)

- Advanced
  - [Kustomize](https://k8sbyexample.org/kustomize)
  - [StatefulSets](https://k8sbyexample.org/statefulsets)
  - [DaemonSets](https://k8sbyexample.org/daemonsets)
  - [Jobs](https://k8sbyexample.org/jobs)

- Storage
  - [Persistent Volumes](https://k8sbyexample.org/persistent-volumes)
  - [Persistent Volume Claims](https://k8sbyexample.org/persistent-volume-claims)
  - [Storage Classes](https://k8sbyexample.org/storage-classes)

- Multi-Container Patterns
  - [Sidecar](https://k8sbyexample.org/sidecar-pattern)
  - [Ambassador](https://k8sbyexample.org/ambassador-pattern)
  - [Adapter](https://k8sbyexample.org/adapter-pattern)

- Observability
  - [Prometheus Monitoring](https://k8sbyexample.org/prometheus-monitoring)
  - [Logging Patterns](https://k8sbyexample.org/logging-patterns)
  - [Distributed Tracing](https://k8sbyexample.org/distributed-tracing)

## Development

```bash
# Clone the repo
git clone https://github.com/sozua/k8sbyexample.org.git
cd k8sbyexample.org

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [MDX](https://mdxjs.com) - Markdown with JSX
- [Shiki](https://shiki.style) - Syntax highlighting

## Contributing

Contributions are welcome! Whether it's fixing a typo, improving explanations, or adding new lessons.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Inspiration

Inspired by [Go by Example](https://gobyexample.com), bringing the same learn-by-example approach to Kubernetes.

## License

MIT
