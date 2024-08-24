import {
  DashboardOutlined,
  ProjectOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { IResourceItem } from '@refinedev/core';

export const resources: IResourceItem[] = [
  {
    name: 'dashboard',
    list: '/',
    meta: {
      label: 'Dashboard',
      icon: <DashboardOutlined />,
    },
  },
  {
    name: 'agents',
    list: '/agents',
    show: '/agents/:id',
    create: '/agents/new',
    edit: '/agents/edit/:id',
    meta: {
      label: 'Agents',
      icon: <TeamOutlined />,
    },
  },
  {
    name: 'tasks',
    list: '/tasks',

    create: '/tasks/new',
    edit: '/tasks/edit/:id',
    meta: {
      label: 'Tasks',
      icon: <ProjectOutlined />,
    },
  },
];
