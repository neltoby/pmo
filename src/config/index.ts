import { NavItem } from '@/types/nav-item';
import {
	IconDashboard,
} from '@tabler/icons-react';

export const navLinks = (): NavItem[] => [
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/department' },
	{ label: 'Activities', icon: IconDashboard, link: '/activities' },
	{ label: 'Settings', icon: IconDashboard, link: '/settings' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
];

export const navLinksAdmin = (): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/department' },
	{ label: 'Settings', icon: IconDashboard, link: '/settings' },
];

export const navLinksParastatalsHeads = (pid: string): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard/parastatals/[parastatalId]' },
	{ label: 'Parastatals', icon: IconDashboard, link: `/parastatals/${pid}` },
	{ label: 'Department', icon: IconDashboard, link: '/department' },
	{ label: 'Projects', icon: IconDashboard, link: '/projects' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
];

export const navLinksDepartmentsHeads = ({pid, did}: {pid: string, did: string}): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: `/dashboard/parastatals/${pid}` },
	{ label: 'Parastatals', icon: IconDashboard, link: `/parastatals/${pid}` },
	{ label: 'Department', icon: IconDashboard, link: `/parastatals/${pid}/departments/${did}` },
	{ label: 'Projects', icon: IconDashboard, link: '/projects' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
];

export const navLinksSuperAdmin = (): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{ label: 'Parastatals', icon: IconDashboard, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/department' },
	{ label: 'Notice Board', icon: IconDashboard, link: '/notice-board' },
	{ label: 'Settings', icon: IconDashboard, link: '/settings' },
	{ label: 'Profile', icon: IconDashboard, link: '/profile' },
	{ label: 'Chat', icon: IconDashboard, link: '/chat' },
];
