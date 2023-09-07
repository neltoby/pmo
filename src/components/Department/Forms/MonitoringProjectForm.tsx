import React from 'react'
import { monitoringProjectFormDataAtom } from '../state/monitoringprojectform.atom'
import { Textarea, TextInput } from '@mantine/core'
import { useRecoilValue } from 'recoil'
import { useMonitoringProjectHandler } from '../hook/useMonitoringProjectHandler'
import { MonitoringProjectDataType } from '../model'
import { DatePickerInput } from '@mantine/dates'
import CustomFlex from '../CustomFlex'

const MonitoringProjectForm = () => {
  const { handleDescription,
    handleLocation,
    handleContractSum,
    handleDurartionOfProject,
    handleProjectStartDate,
    handleProjectEndDate,
    handleAmountPaidDuringYear,
    handleAmountPaidToDate,
    handleOutstandingBalance,
    handlePercentageCompletion,
    handleRemarks } = useMonitoringProjectHandler()
  const data = useRecoilValue<MonitoringProjectDataType>(monitoringProjectFormDataAtom)


  return (
    <>
      <Textarea placeholder="Description" style={{width: '100%'}}
        label="Description" value={data.description} onChange={handleDescription} />
      <CustomFlex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%" }}
        sx={{
        '&:hover': {
          backgroundColor: '#eee',
        },

        '@media (max-width: 40em)': {
          flexDirection: "column",
        },
      }}
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
        placeholder="Contract sum"
        label="Contract sum"
        value={data.contract_sum as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handleContractSum}
      />
      </CustomFlex>
      <CustomFlex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Duration of project"
        label="Duration of project"
        value={data.duration_of_project}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleDurartionOfProject}
      />
      <DatePickerInput
          label="Project start date"
          placeholder="Project start date"
          value={data.project_start_date}
          onChange={handleProjectStartDate}
          mx="auto"
          maw={400}
        />
      </CustomFlex>
      <CustomFlex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <DatePickerInput
          label="Project end date"
          placeholder="Project end date"
          value={data.project_end_date}
          onChange={handleProjectEndDate}
          mx="auto"
          maw={400}
        />
      <TextInput
        placeholder="Amount paid during the year"
        label="Amount paid during the year"
        value={data.amount_paid_during_year as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handleAmountPaidDuringYear}
      />
      </CustomFlex>
      <CustomFlex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Amount paid to date"
        label="Amount paid to date"
        value={data.amount_paid_to_date as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handleAmountPaidToDate}
      />
      <TextInput
        placeholder="Outstanding balance"
        label="Outstanding balance"
        value={data.outstanding_balance as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handleOutstandingBalance}
      />
      </CustomFlex>
      <CustomFlex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Percentage completion"
        label="Percentage completion"
        value={data.percentage_completion as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handlePercentageCompletion}
      />
      <Textarea placeholder="Remarks" style={{width: '100%'}}
        label="Remarks" value={data.remarks} onChange={handleRemarks} />
      </CustomFlex>
    </>
  )
}

export default MonitoringProjectForm