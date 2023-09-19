import { Paper, Flex, Box, Title, Avatar } from '@mantine/core'
import React, { FC } from 'react'
import { NoticeMessageTo, ParastatalName, PostType } from '../../model'
import { format } from 'date-fns'
import { transformTo } from '../Post/Post'

const fullname = (name: { firstname: string, middlename?: string, lastname: string }) => {
  const { firstname, middlename, lastname } = name
  return middlename ? `${firstname} ${middlename} ${lastname}` : `${firstname} ${lastname}`
}

const OtherPost: FC<PostType> = ({data}) => {
  const {
    user,
    updatedAt,
    parastatal,
    title,
    message,
    profile_image = 'https://avatars.githubusercontent.com/u/10353856?v=4',
    to,
  } = data
  return (
    <Paper
      sx={() => ({
        padding: '1rem',
        marginBottom: '1rem',
      })}
    >
      <Flex direction='column'>
        <Flex 
          wrap='wrap'
          justify='space-between'
        >
          <Avatar src={profile_image} />
          <Flex
            direction='column'
            justify='center'
            sx={() => ({
              width: '90%',
            })}
          >
            {
              fullname({ firstname: user[0]?.firstname, middlename: user[0]?.middlename, lastname: user[0]?.lastname })
            }
            <Flex
              justify='space-between'
              sx={() => ({
                width: '100%',
              })}
            >
              <div className='text-xs'>{format(new Date(updatedAt), "MMM d yyyy")}</div>
              <div className='text-xs'>
                <span>Forward: </span>
                <span className='font-bold'>{transformTo(to)}</span>
              </div>
            </Flex><br />
          </Flex>
        </Flex>
        <Title order={4}>{title}</Title>
        <Box>
          {message}
        </Box>
        {(to === NoticeMessageTo.HEADS || to === NoticeMessageTo.PARASTATAL) && <><br/><Flex justify='space-around'>
          {parastatal.map((item: ParastatalName, i) => <div className='text-ellipsis overflow-hidden text-xs italic' key={item.name}>{item.name}</div>)}
        </Flex>
        </>
        }
      </Flex>
    </Paper>
  )
}

export default OtherPost