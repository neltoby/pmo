'use client'

import { FC } from 'react'
import { format } from 'date-fns'
import { Box, Flex, Paper, Title } from '@mantine/core'
import { NoticeMessageTo, ParastatalName, PostType } from '../../model'

export const transformTo = (to: NoticeMessageTo) => {
  return to === NoticeMessageTo.HEADS ? 'Heads of parastatals' : to === NoticeMessageTo.PARASTATAL ? 'Parastatals' : to === NoticeMessageTo.INDIVIDUAL ? 'Staff' : 'PMO staffs';
}

const Post: FC<PostType> = ({ data }) => {
  const { updatedAt, parastatal, title, message, to } = data
  return (
    <Paper
      sx={() => ({
        padding: '1rem',
        marginBottom: '1rem',
        // backgroundColor: '#000',
        // color: '#fff'
      })}
    >
      <Flex direction='column'>
        <Flex justify='center'><Title order={4}>{title}</Title></Flex>
        <Flex justify='space-between'><span className='text-xs'>{format(new Date(updatedAt), "MMM d yyyy")}</span><span className='text-xs'>Forwarded: <span className='font-bold'>{transformTo(to)}</span></span></Flex>
        <Box style={{padding: '0.6rem 0'}}>
          {message}
        </Box>
        {/* <Flex direction='row-reverse'>{to}</Flex> */}
        {(to === NoticeMessageTo.HEADS || to === NoticeMessageTo.PARASTATAL) && <Flex justify='space-around'>
          {parastatal.map((item: ParastatalName, i) => <div className='text-ellipsis overflow-hidden text-xs italic' key={item.name}>{item.name}</div>)}
        </Flex>}
      </Flex>
    </Paper>
  )
}

export default Post