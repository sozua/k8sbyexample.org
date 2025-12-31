export interface Module {
  id: string;
  key: string;
  lessons: string[];
}

export const modules: Module[] = [
  {
    id: '00-getting-started',
    key: 'gettingStarted',
    lessons: [
      'local-cluster',
      'hello-world',
      'kubectl-basics',
    ],
  },
  {
    id: '01-architecture',
    key: 'architecture',
    lessons: [
      'overview',
      'control-plane',
      'node-components',
    ],
  },
  {
    id: '02-fundamentals',
    key: 'fundamentals',
    lessons: [
      'namespaces',
      'pods',
      'labels',
      'deployments',
      'replicasets',
      'services',
      'services-nodeport',
      'services-loadbalancer',
    ],
  },
  {
    id: '03-configuration',
    key: 'configuration',
    lessons: [
      'configmaps',
      'secrets',
      'env-variables',
    ],
  },
  {
    id: '04-networking',
    key: 'networking',
    lessons: [
      'ingress',
      'network-policies',
      'dns',
    ],
  },
  {
    id: '05-workload-lifecycle',
    key: 'lifecycle',
    lessons: [
      'init-containers',
      'liveness-probes',
      'readiness-probes',
      'startup-probes',
      'lifecycle-hooks',
      'rolling-updates',
      'graceful-shutdown',
      'canary-deployments',
      'production-checklist',
    ],
  },
  {
    id: '06-scaling-scheduling',
    key: 'scaling',
    lessons: [
      'resource-limits',
      'resource-quotas',
      'hpa',
      'node-affinity',
      'pod-affinity',
      'pod-anti-affinity',
      'taints-tolerations',
      'topology-spread',
      'pdb',
    ],
  },
  {
    id: '07-security',
    key: 'security',
    lessons: [
      'security-context',
      'service-accounts',
      'rbac',
      'external-secrets',
      'pod-security-standards',
    ],
  },
  {
    id: '08-advanced',
    key: 'advanced',
    lessons: [
      'kustomize',
      'kustomize-overlays',
      'statefulsets',
      'daemonsets',
      'jobs',
      'leader-election',
      'cluster-autoscaler',
      'admission-webhooks',
      'pod-priority',
      'etcd-basics',
    ],
  },
  {
    id: '09-storage',
    key: 'storage',
    lessons: [
      'persistent-volumes',
      'persistent-volume-claims',
      'storage-classes',
    ],
  },
  {
    id: '10-multi-container-patterns',
    key: 'patterns',
    lessons: [
      'sidecar-pattern',
      'ambassador-pattern',
      'adapter-pattern',
    ],
  },
  {
    id: '11-observability',
    key: 'observability',
    lessons: [
      'prometheus-monitoring',
      'logging-patterns',
      'distributed-tracing',
      'debugging-pods',
    ],
  },
];

export function getAllLessons(): string[] {
  return modules.flatMap(m => m.lessons);
}

export function getModuleForLesson(slug: string): Module | undefined {
  return modules.find(m => m.lessons.includes(slug));
}
