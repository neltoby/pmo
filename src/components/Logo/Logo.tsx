import { Flex, Text, useMantineTheme } from '@mantine/core';
import Image from "next/image"
interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = () => {
	const theme = useMantineTheme();
	return (
		<Flex direction="row" align="center" gap={4}>
			<Image className="" width={50} height={50} src='/logo.png' alt="pmo-logo"/>
		</Flex>
	);
};
