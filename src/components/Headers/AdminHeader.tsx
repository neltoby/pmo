'use client';

import {
	ActionIcon,
	Autocomplete,
	Box,
	Drawer,
	Header,
	Select,
	Stack,
	TextInput,
	createStyles,
} from '@mantine/core';
import { useRouter } from 'next/navigation'
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconSettings } from '@tabler/icons-react';
import { DirectionSwitcher } from '../DirectionSwitcher/DirectionSwitcher';
import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { useEffect, useState } from 'react';
import { allParastatals, allParastatalsWithLabels } from '@/utils/seed';

interface Props {
	burger?: React.ReactNode;
}

const useStyles = createStyles(theme => ({
	header: {
		padding: `${theme.spacing.md} ${theme.spacing.lg}`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		gap: theme.spacing.md,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));

export function AdminHeader({ burger }: Props) {
	const { classes } = useStyles();
	const [opened, { close, open }] = useDisclosure(false);
	const router = useRouter()
	const [value, setValue] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleSetValue = (val: string | null) => {
		setIsLoading(true)
		setValue(val)
		router.refresh()
	}

	useEffect(() => {
		
		if (isLoading) {
			let setTime: string | number | NodeJS.Timeout | undefined
			setTime = setTimeout(() => {
				setIsLoading(false)
			}, 500);
		
			return () => clearTimeout(setTime)
		}
	}, [isLoading])

	return isLoading ? <div className='flex w-screen h-screen justify-center items-center text-lg'>Loading... </div> :  (
		<Header height={60} withBorder={false} className={classes.header}>
			{burger && burger}
			<Logo />
			<Box sx={{ flex: 1 }} />
			<Select
				placeholder="Select Parastatals"
				value={value}
				onChange={handleSetValue}
				data={allParastatalsWithLabels}
			/>
			<ActionIcon onClick={open}>
				<IconSettings size="1.25rem" />
			</ActionIcon>

			<Drawer
				opened={opened}
				onClose={close}
				title="Settings"
				position="right"
				transitionProps={{ duration: 0 }}
			>
				<Stack spacing="lg">
					<ThemeSwitcher />
					<DirectionSwitcher />
				</Stack>
			</Drawer>
		</Header>
	);

}
