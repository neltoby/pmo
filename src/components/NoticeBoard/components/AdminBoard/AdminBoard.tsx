import { Role } from '@/components/AdminSignin/model';
import { signInRole } from '@/components/AdminSignin/state';
import { Box, Flex, Modal, keyframes } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTelegram } from '@tabler/icons-react';
import { useRecoilValue } from 'recoil';
import Form from '../Form/Form';
import OtherPost from '../OtherPost/OtherPost';
import Post from '../Post/Post';
import { AddressTo, Medium, NoticeBoardPostType, NoticeMessageBy, NoticeMessageTo } from '../../model';
import { useGetAdminPosts } from '../../hooks/useGetAdminPost';

export const run = keyframes({
  'from': { transform: 'translateX(7rem)', },
  'to': { transform: 'translateX(0)' },
  '15%': { transform: 'rotateY(360deg)' },
  '90%': { transform: 'rotateY(0deg)' },
})

export const postData = [
  {
    Id: '3948404048hhf904849',
    user: [
      {
        firstname: 'Femi',
        lastname: 'Martins',
        middlename: 'Ola'
      }
    ],
    updatedAt: new Date().toString(),
    title: "Special Announcement",
    message: "There will be a s special meeting for all memebres of the PMO team for a new survey of our protocola to the end that we might add some improvement to our system. Would indulge all of us to be as early as possible to be seated and expected and also contribute to the meeting as much as possible. So do well to please inform others who might not be available for some said reasons. Looking forward to seeing us all by 5pm prompt this evening at the meeting venue",
    profile_image: 'https://avatars.githubusercontent.com/u/10353856?v=4',
    to: NoticeMessageTo.PMO_STAFF,
    by: NoticeMessageBy.PLATFORM,
    medium: Medium.IN_PLATFORM,
    parastatal: [{ name: 'Lagos state ministry of works' }],
    to_parastatal: ['59585jfur9hf895944']
  }
]

const AdminBoard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { data, isLoading, isError } = useGetAdminPosts()
  const role = useRecoilValue(signInRole)
  return (
    <>
    { role === Role.Admin && 
    <>
      <Box
        onClick={open}
        component='span'
        sx={() => ({
          position: 'fixed',
          bottom: '1.2rem',
          right: '6rem',
          borderRadius: '50%',
          width: '4rem',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'skyblue',
          transform: 'translateX(0)',
          animation: `${run} 0.5s ease-in-out 1`,
          boxShadow: '5px 5px 5px rgba(0, 0, 0, .1)',
          zIndex: 200,
          '&:hover': {
            backgroundColor: 'blue',
          }
        })}
      >
        <IconBrandTelegram color="#fff" size="2rem" />
      </Box>
        <Flex
          wrap='wrap'
          justify='space-between'
        >
          <Flex
            direction='column'
            sx={() => ({
              width: '100%',
              '@media (min-width: 62em)': {
                width: '47%',
              }
            })}
          >
            <Flex>
              All Nofication sent.
            </Flex>
            {data.map((item: NoticeBoardPostType, i: number) => (
              <Post key={item.title + i} data={item} />
            ))}
          </Flex>
          <Flex
            sx={() => ({
              '@media (min-width: 62em)': {
                width: '47%',
              }
            })}
          >
            {postData.map((item, i) => (
              <OtherPost key={item.title + i} data={item} />
            ))}
          </Flex>
      </Flex>
      <Modal opened={opened} onClose={close} title="Send Notice" centered>
        <Form close={close} />
      </Modal>
    </>
      }
    </>
  )
}

export default AdminBoard