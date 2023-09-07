import { Flex, Select, TextInput, Textarea, Title } from '@mantine/core'
import { Months, HousingFundDataType } from '../model'
import { useRecoilValue } from 'recoil'
import { housingFundDataAtom } from '../state/housingfund.atom'
import { useHousingFundHandler } from '../hook/useHousingFundHandler'


const months: Months[] = [
  Months.Jan, Months.Feb, Months.Mar, Months.Apr, Months.May, Months.Jun, Months.Jul, Months.Aug, Months.Sep, Months.Oct, Months.Nov, Months.Dec
]

const HousingFundForm = () => {
  const data = useRecoilValue<HousingFundDataType>(housingFundDataAtom)
  const {
    handleMonths,
    handleNoOfEmp,
    handleNhfDeducted,
    handleNhfPaid,
    handleMonthPaid,
    handleStatusOfReturns } = useHousingFundHandler()
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
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNoOfEmp}
      />
      <TextInput
        placeholder="NHF Deducted"
        label="NHF Deducted"
        value={data.nhf_deducted as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNhfDeducted}
      />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="NHF Paid"
          label="NHF Paid"
          value={data.nhf_paid as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handleNhfPaid}
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

export default HousingFundForm