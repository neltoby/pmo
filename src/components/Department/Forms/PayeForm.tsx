
import { FC } from 'react'
import { Flex, Select, TextInput, Textarea, Title } from '@mantine/core'
import { Months } from '../model'
import { usePayeHandler } from '../hook/usePayeHandler'
import { useRecoilValue } from 'recoil'
import { payeFormDataAtom } from '../state/payeform.atom'


const months: Months[] = [
  Months.Jan, Months.Feb, Months.Mar, Months.Apr, Months.May, Months.Jun, Months.Jul, Months.Aug, Months.Sep, Months.Oct, Months.Nov, Months.Dec
]

const PensionForm = () => {
  const data = useRecoilValue(payeFormDataAtom)
    const {handleMonths,
    handleNoOfEmp,
    handlePayeDeducted,
    handlePayePaid,
    handleMonthPaid,
    handleStatusOfReturns} = usePayeHandler()
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
        withAsterisk
        type="number"
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNoOfEmp}
      />
      <TextInput
        placeholder="Paye Deducted"
        label="Paye deducted"
        value={data.paye_deducted as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handlePayeDeducted}
      />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Paye Paid"
          label="Paye Paid"
          value={data.paye_paid as number}
          withAsterisk
          type="number"
          size='sm'
          style={{ width: '100%'}}
          onChange={handlePayePaid}
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