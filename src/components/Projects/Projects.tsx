'use client'

import Input from '@/shared/Input';
import { Button, Flex, Grid, Modal, Space, } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import Forms from './Forms';
import { useState } from 'react';

export type ProjectDetailsType = {
  description: string,
  id?: string;
  location: string;
  contract: string;
  duration: string;
}

const Projects = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [data, setData] = useState<ProjectDetailsType[]>([])

  const handleSubmit = (val: ProjectDetailsType) => {
    console.log('got here')
    setData([...data, val])
  }
  console.log(data)
  return (
    <>
      <Grid justify="flex-end" style={{ padding: '1rem 4rem'}}>
        <Grid.Col span={1}>
          <Button
          onClick={open}
          color='#fff'        
          style={{ backgroundColor: '#00acee'}}
          > Create Project
          </Button>
        </Grid.Col>
      </Grid>
      <Modal centered opened={opened} onClose={close} closeOnClickOutside closeOnEscape title="Create Project">
        <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
        {/* <Grid.Col sm={1} md={2} lg={3}/> */}
        {/* <Grid.Col> */}
          <Forms handleSubmitProp={handleSubmit} close={close} />
        {/* </Grid.Col> */}
        {/* <Grid.Col sm={1} md={2} lg={3}/> */}
        
      </Flex>
      </Modal>
      {data.length > 0 && (
        <>
        <Grid style={{ backgroundColor: '#fff', padding: '2rem'}}>
          <Grid.Col style={{borderRight: '0.1rem solid #000', color: '#000'}} sm={3} md={3} lg={3}>Description</Grid.Col>
          <Grid.Col style={{borderRight: '0.1rem solid #000', color: '#000'}} sm={3} md={3} lg={3}>Location</Grid.Col>
          <Grid.Col style={{borderRight: '0.1rem solid #000', color: '#000'}} sm={3} md={3} lg={3}>Contract sum</Grid.Col>
          <Grid.Col style={{borderRight: '0.1rem solid #000', color: '#000'}} sm={3} md={3} lg={3}>Duration</Grid.Col>
        </Grid>
        {data.map((item) => (
          <Grid key={item.description}>
            <Grid.Col sm={3} md={3} lg={3}>{item.description}</Grid.Col>
            <Grid.Col sm={3} md={3} lg={3}>{item.location}</Grid.Col>
            <Grid.Col sm={3} md={3} lg={3}>{item.contract}</Grid.Col>
            <Grid.Col sm={3} md={3} lg={3}>{item.duration}</Grid.Col>
          </Grid> 
      ))}
        </>)}
    </>
  )
}

export default Projects