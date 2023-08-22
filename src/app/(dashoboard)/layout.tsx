'use client';

import { AdminHeader } from '@/components/Headers/AdminHeader';
import { Navbar } from '@/components/Navbar/Navbar';
import Wrapper from '@/components/Navbar/Wrapper';
import { RootDependency } from '@/components/RootDependency';
import { useGetRolesLinks } from '@/config/useGetRoles';
// import { navLinks } from '@/config';
import { AppShell, Burger, Container, Footer, MediaQuery, Text } from '@mantine/core';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

interface Props {
	children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function DashboardLayout({ children }: Props) {
	const [opened, setOpened] = useState(false);

	return (
	<>
		<RecoilRoot>
	<QueryClientProvider client={queryClient}>
		<AppShell
			fixed
			navbar={<Wrapper hidden={!opened} />}
			navbarOffsetBreakpoint="md"
			header={
				<AdminHeader
					burger={
						<MediaQuery largerThan="md" styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened(o => !o)}
								size="sm"
								mr="xl"
							/>
						</MediaQuery>
					}
				/>
			}
			footer={
				<Footer height={50} p="md">
					<Text w="full" size="sm" align="center" color="gray">
						CopyRight © 2023 PMO
					</Text>
				</Footer>
			}
			sx={theme => ({
				backgroundColor:
					theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
				minHeight: '100vh',
			})}
		>
			<Container fluid>{children}</Container>
				</AppShell>
				</QueryClientProvider>
	</RecoilRoot>
				</>
	);
}
