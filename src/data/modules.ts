export interface Module {
  id: string;
  key: string;
  lessons: string[];
}

export const modules: Module[] = [
  {
    id: '00-architecture',
    key: 'architecture',
    lessons: [
      'overview',
      'control-plane',
      'node-components',
    ],
  },
  {
    id: '01-fundamentals',
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
    id: '02-configuration',
    key: 'configuration',
    lessons: [
      'configmaps',
      'secrets',
      'env-variables',
    ],
  },
  {
    id: '03-networking',
    key: 'networking',
    lessons: [
      'ingress',
      'network-policies',
      'dns',
    ],
  },
  {
    id: '04-workload-lifecycle',
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
    ],
  },
  {
    id: '05-scaling-scheduling',
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
    id: '06-security',
    key: 'security',
    lessons: [
      'security-context',
      'service-accounts',
      'rbac',
      'external-secrets',
    ],
  },
  {
    id: '07-advanced',
    key: 'advanced',
    lessons: [
      'kustomize',
      'kustomize-overlays',
      'statefulsets',
      'daemonsets',
      'jobs',
      'leader-election',
    ],
  },
  {
    id: '08-storage',
    key: 'storage',
    lessons: [
      'persistent-volumes',
      'persistent-volume-claims',
      'storage-classes',
    ],
  },
  {
    id: '09-multi-container-patterns',
    key: 'patterns',
    lessons: [
      'sidecar-pattern',
      'ambassador-pattern',
      'adapter-pattern',
    ],
  },
  {
    id: '10-observability',
    key: 'observability',
    lessons: [
      'prometheus-monitoring',
      'logging-patterns',
      'distributed-tracing',
    ],
  },
];

export function getAllLessons(): string[] {
  return modules.flatMap(m => m.lessons);
}

export function getModuleForLesson(slug: string): Module | undefined {
  return modules.find(m => m.lessons.includes(slug));
}
