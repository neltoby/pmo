import { Button, Flex, Paper, Space, Title } from '@mantine/core'
import React, { FC, ReactNode } from 'react'

export type PaperChildType = {
  title: string;
  onClick: () => void;
  buttonLabel: string;
  children: ReactNode
}

const PaperChild: FC<PaperChildType> = ({title, onClick, buttonLabel, children}) => {
  return (
     <>
    <Paper withBorder radius="md" p="md" sx={(theme) => ({
      width: '30%',
      '@media (max-width: 48em)': {
        width: '100%'
      },
    })}>
			<Title order={5}>{title}</Title>
      <Space h="md" />
      <Flex
        mih={50}
        bg="transparent"
        gap="md"
        justify="flex-end"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <Button
          color='#fff'
          style={{ backgroundColor: '#00acee' }}
          onClick={onClick}
        >
          {buttonLabel}
        </Button>
      </Flex>
      </Paper>
      {children}
  </>
  )
}

export default PaperChild