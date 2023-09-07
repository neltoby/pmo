'use client'
import { Flex } from '@mantine/core'
import { ChatList } from 'react-chat-elements'
import { UserListChat } from './model'
import { useRecoilState } from 'recoil'
import { chatListAtom } from './state'



const ChatListBar = () => {
  const [chatListData, setChatListData] = useRecoilState(chatListAtom)
  const handleChatListClick = (item: any) => { 
    const newItem = { ...item } as UserListChat
    setCurrentUser(newItem)
    if (newItem.id === '0') {
      setMessages(SholaMessageListData)
    } else if (newItem.id === '1') { 
      setMessages(KehindeMessageListData) 
    } else {
      setMessages([])
    }
  }
  return (
    <Flex
          sx={(theme) => ({
            width: '33%',
            padding: '1rem 0',
            borderRLeft: `1px solid ${theme.colors.gray}`,
            borderRight: `1px solid ${theme.colors.gray}`
          })}
          direction='column'
        >
          <ChatList
            id={0}
            lazyLoadingImage=''
            className='chat-list'
            onClick={handleChatListClick}
            dataSource={chatList} />
        </Flex>
  )
}

export default ChatListBar