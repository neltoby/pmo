
import { FC } from 'react'
import { Button, FileButton, Flex, Group, Select, TextInput, Text, Textarea } from '@mantine/core'
import { ProjectStatus } from '../model'
import { DatePickerInput } from '@mantine/dates';
import { useProjectCapitalExpenditureHandler } from '../hook/useProjectCapitalExpenditureHandler';
import { useRecoilValue } from 'recoil';
import { projectFormDataAtom } from '../state/projectform.atom';

const statuses = [
  ProjectStatus.Started,
  ProjectStatus.OnGoing,
  ProjectStatus.Completed
]


const ProjectCapitalExpenditureForm= () => {
  const { 
    handlePoNo,
    handleDescription,
    handleValueOfProject,
    handleLocation,
    handlePercentageOfCompletion,
    handlePaymentTillDate,
    handleTargetedTimeline,
    handleStatusOfCompletion,
    handlePrePaymentCertificate,
  } = useProjectCapitalExpenditureHandler()
  const data = useRecoilValue(projectFormDataAtom)
  return (
    <>
      <Textarea
        placeholder="Description of Approved Project/Capital Expenditure"
        label="Description of Approved Project Expenditure"
        value={data.description}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleDescription}
      />
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="PV No"
        label="PV No"
        value={data.pv_no}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handlePoNo}
      />
      <TextInput
          label="Value of the project"
          placeholder="Value of the project"
          value={data.value_of_project as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handleValueOfProject}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >       
        <TextInput
          placeholder="Location"
          label="Location"
          value={data.location}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleLocation}
        /> 
        <TextInput
          placeholder="Percentage of Completion"
          label="Percentage of Completion"
          value={data.percentage_of_completion as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handlePercentageOfCompletion}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >       
        <TextInput
          placeholder="Payment Till Date"
          label="Payment Till Date"
          value={data.payment_till_date as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handlePaymentTillDate}
        />
        <DatePickerInput
          placeholder="Targeted Timeline"
          label="Targeted Timeline"
          value={data.targeted_timeline}
          onChange={handleTargetedTimeline}
          mx="auto"
          maw={400}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        
        <Select
          label="Status of Completion"
          placeholder="Select status"
          value={data.status_of_completion}
          onChange={handleStatusOfCompletion}
          data={statuses} />
        <Group>
          <FileButton onChange={handlePrePaymentCertificate} accept="image/png,image/jpeg">
            {(props) => <Button {...props}>Upload certificate</Button>}
          </FileButton>
        </Group>
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >   
      {data.pre_payment_certificate && (
        <Text size="sm" align="center" mt="sm">
          selected file: {data.pre_payment_certificate.name}
        </Text>
      )}
      </Flex>
    </>
  )
}

export default ProjectCapitalExpenditureForm