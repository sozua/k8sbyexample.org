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
      'rolling-updates',
    ],
  },
  {
    id: '06-scaling-scheduling',
    key: 'scaling',
    lessons: [
      'resource-limits',
      'hpa',
      'taints-tolerations',
    ],
  },
  {
    id: '07-security',
    key: 'security',
    lessons: [
      'security-context',
      'service-accounts',
      'rbac',
      'pod-security-standards',
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
];

export function getAllLessons(): string[] {
  return modules.flatMap(m => m.lessons);
}

export function getModuleForLesson(slug: string): Module | undefined {
  return modules.find(m => m.lessons.includes(slug));
}
