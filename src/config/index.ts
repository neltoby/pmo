import { NavItem } from '@/types/nav-item';
import {
	IconDashboard,
} from '@tabler/icons-react';

export const navLinks = (pid: string): NavItem[] => [
	{ label: 'Department', icon: IconDashboard, link: `/parastatals/${pid}/department` },
	{ label: 'Profile', icon: IconDashboard, link: '/profile' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
	{ label: 'Chat', icon: IconDashboard, link: '/chat' },
];

export const navLinksAdmin = (): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/department' },
	{ label: 'Profile', icon: IconDashboard, link: '/profile' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
	{ label: 'Chat', icon: IconDashboard, link: '/chat' },
];

export const navLinksParastatalsHeads = (pid: string): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: `/dashboard/parastatals/${pid}` },
	{ label: 'Department', icon: IconDashboard, link: `/parastatals/${pid}/department` },
	{ label: 'Profile', icon: IconDashboard, link: '/profile' },
	// { label: 'Settings', icon: IconDashboard, link: '/settings' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
	{ label: 'Chat', icon: IconDashboard, link: '/chat' },
];

export const navLinksDepartmentsHeads = ({pid, did}: {pid: string, did?: string}): NavItem[] => [
	{ label: 'Department', icon: IconDashboard, link: `/parastatals/${pid}/departments/${did}` },
	{ label: 'Profile', icon: IconDashboard, link: '/profile' },
	// { label: 'Projects', icon: IconDashboard, link: '/projects' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
	{ label: 'Chat', icon: IconDashboard, link: '/chat' },
];

export const navLinksSuperAdmin = (): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/department' },
	// { label: 'Settings', icon: IconDashboard, link: '/settings' },
	{ label: 'Profile', icon: IconDashboard, link: '/profile' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
	{ label: 'Chat', icon: IconDashboard, link: '/chat' },
];
