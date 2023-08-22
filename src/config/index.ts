import { NavItem } from '@/types/nav-item';
import {
	IconComponents,
	IconDashboard,
	IconLock,
	IconMoodSmile,
} from '@tabler/icons-react';

export const navLinks: NavItem[] = [
	{ label: 'Activities', icon: IconDashboard, link: '/activities' },
	{ label: 'Task', icon: IconDashboard, link: '/task' },
	{ label: 'Settings', icon: IconDashboard, link: '/settings' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
];

export const navLinksAdmin: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/departments' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
];

export const navLinksParastatalsHeads: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard/parastatals/[parastatalId]' },
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals/[parastatalId]' },
	{ label: 'Department', icon: IconDashboard, link: '/departments/' },
	{ label: 'Projects', icon: IconDashboard, link: '/projects' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
];

export const navLinksDepartmentsHeads: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard/parastatals/[parastatalId]' },
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals/[parastatalId]' },
	{ label: 'Department', icon: IconDashboard, link: '/parastatals/[parastatalId]/departments/[departmentId]' },
	{ label: 'Projects', icon: IconDashboard, link: '/projects' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
];

export const navLinksSuperAdmin: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/departments' },
	{ label: 'Projects', icon: IconDashboard, link: '/projects' },
	{ label: 'Settings', icon: IconDashboard, link: '/settings' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
];
