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

## Topics

- Getting Started
  - [Local Cluster](https://k8sbyexample.org/local-cluster)
  - [Hello World](https://k8sbyexample.org/hello-world)
  - [kubectl Basics](https://k8sbyexample.org/kubectl-basics)

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
  - [Services: NodePort](https://k8sbyexample.org/services-nodeport)
  - [Services: LoadBalancer](https://k8sbyexample.org/services-loadbalancer)

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
  - [Liveness Probes](https://k8sbyexample.org/liveness-probes)
  - [Readiness Probes](https://k8sbyexample.org/readiness-probes)
  - [Rolling Updates](https://k8sbyexample.org/rolling-updates)

- Scaling & Scheduling
  - [Resource Limits](https://k8sbyexample.org/resource-limits)
  - [HPA](https://k8sbyexample.org/hpa)
  - [Taints & Tolerations](https://k8sbyexample.org/taints-tolerations)

- Security
  - [Security Context](https://k8sbyexample.org/security-context)
  - [Service Accounts](https://k8sbyexample.org/service-accounts)
  - [RBAC](https://k8sbyexample.org/rbac)
  - [Pod Security Standards](https://k8sbyexample.org/pod-security-standards)

- Storage
  - [Persistent Volumes](https://k8sbyexample.org/persistent-volumes)
  - [Persistent Volume Claims](https://k8sbyexample.org/persistent-volume-claims)
  - [Storage Classes](https://k8sbyexample.org/storage-classes)

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

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sozua/k8sbyexample.org&type=Date)](https://star-history.com/#sozua/k8sbyexample.org&Date)

## License

MIT
