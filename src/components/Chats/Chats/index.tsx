'use client'
import { Button, Flex, Textarea, createStyles } from '@mantine/core'
import { ChangeEvent, useState } from 'react'
import "react-chat-elements/dist/main.css"
import { Avatar, ChatList, ChatListEvent, IChatListProps, MessageBox, MessageBoxType } from "react-chat-elements";

const useStyles = createStyles((theme) => ({
  active: {
    backgroundColor: theme.colors.cyan,
    // borderBottom: `10px solid ${theme.colors.dark}`,
  }
}))
export type UserDetails = {
  img: string;
  name: string;
  id?: string;
}
export type UserListChat = {        
  id: string;
  avatar: string;
  alt: string;
  title: string;
  subtitle: string;
  date: Date;
  unread: number;
}
export type ChatListType = UserListChat[]

export enum PositionEnum {
  Right = 'right',
  Left = 'left',
}

export type MessageType = {
  id: string;
  position: PositionEnum;
  title: string;
  type: string;
  text: string
  date: Date,
  status: string;
}

// src="https://avatars.githubusercontent.com/u/41473129?v=4
const SholaMessageListData: MessageType[] = [
  {
    id: '1',
    position: PositionEnum.Right,
    title: '',
    type: 'meetingLink',
    text: 'Click to join the meeting',
    date: new Date(),
    status: 'seen',
  },
  {
    id: '2',
    position: PositionEnum.Left,
    title: '',
    type: 'text',
    text: 'Should we join now?',
    date: new Date(),
    status: 'seen',
  }
]

const KehindeMessageListData: MessageType[] = [
  {
    id: '3',
    position: PositionEnum.Right,
    title: '',
    type: 'text',
    text: 'Can you pls send me the file requested',
    date: new Date(),
    status: 'seen',
  },
  {
    id: '4',
    position: PositionEnum.Left,
    title: '',
    type: 'text',
    text: 'Aiit, will send it now',
    date: new Date(),
    status: 'seen',
  }
]
const chatListData = [
    {          
      id: '0',
      avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
      alt: 'kursat_avatar',
      title: 'Shola Ogunbode',
      subtitle: "Should we join now?",
      date: new Date(),
      unread: 3,
    },
    {          
      id: '1',
      avatar: 'https://avatars.githubusercontent.com/u/41473129?v=4',
      alt: 'kursat_avatar',
      title: 'Kehinde Olabowale',
      subtitle: "Aiit, will send it now",
      date: new Date(),
      unread: 6,
    },
  ]

const Chats = () => {
  const { classes } = useStyles();
  const [currentState, setCurrentState] = useState('chat')
  const [chatList, setChatList] = useState<ChatListType>(chatListData)
  const [currentUser, setCurrentUser] = useState<UserListChat | null>(null)
  const [messages, setMessages] = useState<MessageType[]>([])
  const [message, setMessage] = useState<string>('')
  const onSend = () => { 
    if (message.trim().length) { 
      const user = { ...currentUser, subtitle: message, date: new Date() } as UserListChat
      const lastMessageId: number = +(messages[messages.length - 1].id)
      const messageObj = {
        id: `${lastMessageId + 1}`,
        position: PositionEnum.Right,
        title: '',
        type: 'text',
        text: message,
        date: new Date(),
        status: 'sent',
      }
      if (user.id === '0') {
        SholaMessageListData.push(messageObj)
      } else {
        KehindeMessageListData.push(messageObj)
      }
      setCurrentUser(user)
      setChatList(val => val.map((chat) => {
        if (chat.id === user.id) { 
          return user
        }
        return chat
      }))
      setMessage('')
    }
    return
  }
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }
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
      <Flex direction='column' sx={() => ({
        height: '80vh',
      })}> 
        <Flex
          sx={(theme) => ({
            flex: '0 1 auto',
            backgroundColor: theme.colors.dark,
            color: '#fff',
            borderRadius: '5px',
            fontWeight: 'bold',
          })}
        >
          <Flex
            sx={() => ({
              flex: '1 1 auto',
              padding: '1rem 0',
            })}
            onClick={() => setCurrentState('chat')}
            align='center'
            justify='center'
            className={currentState == 'chat' ? classes.active : ''}
          >
            Chats
          </Flex>
          <Flex
            sx={(theme) => ({
              flex: '1 1 auto',
              padding: '1rem 0',
              borderRight: `1px solid white`,
              borderLeft: `1px solid white`,
            })}
            onClick={() => setCurrentState('search')}
            align='center'
            justify='center'
            className={currentState == 'search' ? classes.active : ''}
          >
            Search
          </Flex>
          <Flex
            sx={() => ({
              flex: '1 1 auto',
              padding: '1rem 0',
            })}
            onClick={() => setCurrentState('contact')}
            align='center'
            justify='center'
            className={currentState == 'contact' ? classes.active : ''}
          >
            Contact
          </Flex>
        </Flex>
      
        <Flex 
          sx={() => ({
            flex: '1 1 auto',
          })}
        >
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
        <Flex
          sx={() => ({
            width: '66%',
            padding: '1rem 0'
          })}
          direction='column'
        >
          {currentUser &&
            <>
              <Flex
                direction='column'
                sx={() => ({
                  flex: '1 1 auto',
                })}
              >   
                <Flex
                  sx={() => ({
                    paddingLeft: '1rem',
                  })}
                >
                  <Avatar
                    src={currentUser.avatar}
                    alt={currentUser.title}
                    size="large"
                    type="rounded"
                  />;
                  <Flex
                    sx={(theme) => ({
                      color: theme.colors.cyan,
                      paddingLeft: '1rem',
                      fontWeight: 'bold',
                    })}
                  >
                    {currentUser.title}
                  </Flex>
                </Flex>
                {
                  messages.map((msg, i) => (
                    // @ts-ignore
                    <MessageBox
                      key={msg.title + i}
                      replyButton={false}
                      focus={false}
                      titleColor=''
                      forwarded={false}
                      removeButton={false}
                      notch={false}
                      retracted={false} {...msg}
                    />
                  ))
                }
              </Flex>
              <Flex 
                sx={() => ({
                  flex: '0 1 auto',
                })}
              >
                <Flex direction='row' sx={() => ({
                  flex: '1 1 auto',
                  marginRight: '1rem',
                })}>
                  <Textarea
                    sx={() => ({
                      width: '100%'
                    })}
                    placeholder="Type here..."
                    autosize
                    value={message}
                    onChange={handleMessage}
                    maxRows={3}
                  />
                </Flex>
                <Flex
                  direction='row'
                  sx={() => ({
                  flex: '0 1 auto',
                  width: '8rem',
                  alignItems: 'center'
                  })}
                >
                  <Button
                    color='#fff'
                    sx={(theme) => ({ width: '100%', backgroundColor: theme.colors.cyan })}
                    onClick={onSend}
                  >
                    Send
                  </Button>
                </Flex>
              </Flex>
            </>
          }
        </Flex>
        {/* <div> */}
        </Flex>     
      </Flex>
  )
}

export default Chats