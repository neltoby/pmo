import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { verificationCheck } from '../Verification/state/atoms'
import { VerificationCheckType } from '../Verification/model'
import { Button, Flex, Modal } from '@mantine/core'
import { Status } from './model'
import { useUpdateStatus } from './hooks/useUpdateStatus'

const AdminConfirm = () => {
  const [ status, setStatus] = useState<Status | null>(null)
  const data = useRecoilValue<VerificationCheckType>(verificationCheck)
  const { mutate: updateStatus, opened, close } = useUpdateStatus({ status, id: data.sub  as string}) 
  
  const handleAccept = () => { 
    setStatus(Status.Accept)
  }
  const handleReject = () => { 
    setStatus(Status.Reject)
  }

  useEffect(() => { 
    if (status === Status.Accept || status === Status.Reject)
      updateStatus()
  }, [status, updateStatus])
  return (
    <div className='w-screen h-screen p-8'>
      {data?.sub && data?.username &&
        <>
      <div className='grid grid-cols-4 my-8 justify-between'>
        <div className='col-start-1 col-span-3 text-xl'>
          Username
        </div>
        <div className='col-start-4 col-span-1 text-xl'>
          Confirm Status
        </div>
      </div>
      <div className='grid grid-cols-4 my-8 justify-between'>
        <div className='col-start-1 col-span-3'>
          {data.username}
        </div>
        <div className='col-start-4 col-span-1 flex justify-between'>
          <Button
          onClick={handleAccept}
          color='#fff'        
          style={{ backgroundColor: '#00acee'}}
          > Accept
          </Button>
          <Button
          onClick={handleReject}
          color='#fff'        
          style={{ backgroundColor: '#00acee'}}
          > Reject
          </Button>
        </div>
        </div>
        </>
      }
      <Modal centered opened={opened} onClose={close} closeOnClickOutside closeOnEscape title="Success">
        <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
        <p className=''> You have successfully added a admin!</p>
        
      </Flex>
      </Modal>
    </div>
  )
}

export default AdminConfirm
