import { Flex } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const NotPermitted = () => {
  return (
    <Flex
      direction='column'
      justify={'center'}
      align='center'
      sx={() => ({
        height: '30rem',
      })}
    >
      <Flex justify='center'>
        <Image className='rounded-full' src='/not-permitted.jpeg' alt='net permitted lock image' width={200} height={200} />
      </Flex>
      <br/>
      <Flex direction='column' justify='center' align='center'>
        <p className='font-semibold text-cyan-800'>{"Hmmm....We're sorry but you do not have permission to visit this page."}</p>
        <p className='font-semibold text-cyan-800'>Please contact your administrator.</p>
      </Flex>
    </Flex>
  )
}

export default NotPermitted