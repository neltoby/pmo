
import { FC } from 'react'
import { Flex, Select, TextInput, Textarea, Title } from '@mantine/core'
import { Months } from '../model'
import { usePensionHandler } from '../hook/usePensionHandlers'
import { useRecoilValue } from 'recoil'
import { pensionFormDataAtom } from '../state/pensionform.atom'


const months: Months[] = [
  Months.Jan, Months.Feb, Months.Mar, Months.Apr, Months.May, Months.Jun, Months.Jul, Months.Aug, Months.Sep, Months.Oct, Months.Nov, Months.Dec
]

const PensionForm = () => {
const { handleMonths,
    handleNoOfEmp,
    handleEmployersCont,
    handleEmployeesCont,
    handleTotalCont,
    handleContPensionPaid,
    handleMonthPaid,
  handleStatusOfReturns } = usePensionHandler()
  const data = useRecoilValue(pensionFormDataAtom)

  return (
    <>
      <Select
      label="Select Month"
      placeholder="Select Month"
      searchable
      onSearchChange={handleMonths}
      searchValue={data.month}
      nothingFound="No options"
      data={months}
      />
      <Title order={5}>
        Directly Employed - Permanent Staff
      </Title>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="No of employees"
        label="No of employees"
        value={data.no_of_emp as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNoOfEmp}
      />
      <TextInput
        placeholder="Employee's contribution (%)"
        label="Employee's contribution (%)"
        value={data.employees_contribution as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleEmployeesCont}
      />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Employer's contribution (%)"
          label="Employer's contribution (%)"
          value={data.employers_contribution as number}
          type='number'
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleEmployersCont}
        />
        <TextInput
          placeholder="Total Contribution"
          label="Total Contribution"
          value={data.total_contribution as number}
          type='number'
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleTotalCont}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Contributory Pension paid"
        label="Contributory Pension paid"
        value={data.contributory_pension_paid as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleContPensionPaid}
      />
      <Select
        label="Month Paid"
        placeholder="Select Month"
        searchable
        onSearchChange={handleMonthPaid}
        searchValue={data.month_paid}
        nothingFound="No options"
        data={months}
      />
      </Flex>
      <Textarea placeholder="Status of filling returns" style={{width: '100%'}}
        label="Status of filling returns" value={data.status_of_filling_returns} onChange={handleStatusOfReturns} />
    </>
  )
}

export default PensionForm