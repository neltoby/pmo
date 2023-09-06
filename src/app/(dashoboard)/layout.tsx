'use client';

import { AdminHeader } from '@/components/Headers/AdminHeader';
import Wrapper from '@/components/Navbar/Wrapper';
import { AppShell, Burger, Container, Footer, MediaQuery, Text } from '@mantine/core';
import { useState } from 'react';

interface Props {
	children: React.ReactNode;
}


export default function DashboardLayout({ children }: Props) {
	const [opened, setOpened] = useState(false);

	return (
	<>
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
				// backgroundImage: 'url(/logo.png)'
				// backgroundImage: 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))',
			})}
		>
			<Container fluid>{children}</Container>
				</AppShell>
				</>
	);
}
