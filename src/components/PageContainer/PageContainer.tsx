'use client';

import dynamic from 'next/dynamic'
import { useAuthHandler } from '@/auth/hooks/useAuthHandler';
import {
	Anchor,
	Breadcrumbs,
	Container,
	ContainerProps,
	Space,
	Title,
	useMantineTheme,
} from '@mantine/core';
import { ReactNode, Suspense } from 'react';
// import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from '../../../public/logo.png';
// @ts-ignore
const Widget = dynamic(() => import("react-chat-widget").then((res) => res.Widget))

type PageContainerProps = {
	children: ReactNode;
	title: string;
	items?: { label: string; href: string }[];
} & Pick<ContainerProps, 'fluid'>;

export default function PageContainer({
	children,
	title,
	items,
	fluid = true,
}: PageContainerProps) {
	const {auth} = useAuthHandler()
	const theme = useMantineTheme();
	const titleColor = theme.colorScheme === 'dark' ? 'gray' : 'dark';
	

	const handleNewUserMessage = (msg: string) => {
		console.log(msg)
	}

	return (
		<>
		
			<Container px={0} fluid={fluid}>
				{/* <Snowfall
					color="red"
					// Applied to the canvas element
					style={{ background: '#fff', position: 'absolute', top: 0, left: 0, height: '100%' }}
					// Controls the number of snowflakes that are created (default 150)
					snowflakeCount={700}
					
				/> */}
				<Suspense fallback={<div>Loading...</div>}>
					<Widget
						handleNewUserMessage={handleNewUserMessage}
						profileAvatar={logo}
						title="The office of the PMO"
						subtitle="Drop a message." />
				</Suspense>
				
			{items && items.length > 0 ? (
				<Breadcrumbs>
					{items.map(item => (
						<Anchor key={item.label} href={item.href}>
							{item.label}
						</Anchor>
					))}
				</Breadcrumbs>
			) : null}

			<Title order={4} color={titleColor}>
				{title}
			</Title>

			<Space h="lg" />

				{children}
				
			</Container>
			</>
	);
};
