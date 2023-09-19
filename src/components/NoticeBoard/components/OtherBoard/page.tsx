import { Flex } from '@mantine/core'
import React from 'react'
// import { postData } from '../AdminBoard/AdminBoard'
import OtherPost from '../OtherPost/OtherPost'
import { useGetPost } from '../../hooks/useGetPost'
import { NoticeBoardPostType } from '../../model'

const OtherBoard = () => {
  const { data: postData } = useGetPost()
  console.log(postData, 'line 10')
  return (
    <Flex justify='center'>
    <Flex
      sx={() => ({
        '@media (min-width: 62em)': {
          width: '60%',
        }
      })}
    >
      {postData.map((item: NoticeBoardPostType, i: number) => (
        <OtherPost key={item.title + i} data={item} />
      ))}
      </Flex>
      </Flex>
  )
}

export default OtherBoard