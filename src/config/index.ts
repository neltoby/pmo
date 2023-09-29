import { NavItem } from '@/types/nav-item';
import {
	IconBrandWechat,
	IconBuilding,
	IconDashboard, IconPinned, IconUserCircle,
} from '@tabler/icons-react';

export const navLinks = (pid: string): NavItem[] => [
	{ label: 'Department', icon: IconDashboard, link: `/parastatals/${pid}/department` },
	{ label: 'Profile', icon: IconUserCircle, link: '/profile' },
	{ label: 'Notice Board', icon: IconPinned, link: '/notice-board' },
	{ label: 'Chat', icon: IconBrandWechat, link: '/chat' },
];

export const navLinksAdmin = (): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{ label: 'Parastatals', icon: IconBuilding, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/department' },
	{ label: 'Profile', icon: IconUserCircle, link: '/profile' },
	{ label: 'Notice Board', icon: IconPinned, link: '/notice-board' },
	{ label: 'Chat', icon: IconBrandWechat, link: '/chat' },
];

export const navLinksParastatalsHeads = (pid: string): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: `/dashboard/parastatals/${pid}` },
	{ label: 'Department', icon: IconDashboard, link: `/parastatals/${pid}/department` },
	{ label: 'Profile', icon: IconUserCircle, link: '/profile' },
	{ label: 'Notice Board', icon: IconPinned, link: '/notice-board' },
	{ label: 'Chat', icon: IconBrandWechat, link: '/chat' },
];

export const navLinksDepartmentsHeads = ({pid, did}: {pid: string, did?: string}): NavItem[] => [
	{ label: 'Department', icon: IconDashboard, link: `/parastatals/${pid}/departments/${did}` },
	{ label: 'Profile', icon: IconUserCircle, link: '/profile' },
	{ label: 'Notice Board', icon: IconPinned, link: '/notice-board' },
	{ label: 'Chat', icon: IconBrandWechat, link: '/chat' },
];

export const navLinksSuperAdmin = (): NavItem[] => [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{ label: 'Parastatals', icon: IconBuilding, link: '/parastatals' },
	{ label: 'Department', icon: IconDashboard, link: '/department' },
	{ label: 'Profile', icon: IconDashboard, link: '/profile' },
	{ label: 'Notice Board', icon: IconPinned, link: '/notice-board' },
	{ label: 'Chat', icon: IconBrandWechat, link: '/chat' },
];
