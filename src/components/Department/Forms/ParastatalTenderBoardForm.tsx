
import { FC } from 'react'
import { Flex, Select, TextInput, Textarea } from '@mantine/core'
import { Months } from '../model'
import { DatePickerInput } from '@mantine/dates'
import { useParastatalTenderBoardHandler } from '../hook/useParastatalTenderBoardHandler'
import { useRecoilValue } from 'recoil'
import { ptbFormDataAtom } from '../state/ptbform.atom'

const months: Months[] = [
  Months.Jan, Months.Feb, Months.Mar, Months.Apr, Months.May, Months.Jun, Months.Jul, Months.Aug, Months.Sep, Months.Oct, Months.Nov, Months.Dec
]

const ParastatalTenderBoardForm = () => {
  const data = useRecoilValue(ptbFormDataAtom)
  const {
    handleMonth,
    handleTotalValueOfProcurementApproved,
    handleDescriptionOfProcurement,
    handleDateOfPtb } = useParastatalTenderBoardHandler()

  return (
    <>
      <Select
      label="Select Month"
      placeholder="Select Month"
      searchable
      onSearchChange={handleMonth}
      searchValue={data.month}
      nothingFound="No options"
      data={months}
      />
      
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Total value of procurement approved"
        label="Total value of procurement approved"
        value={data.total_value_of_procuremnet_approved as number}
        withAsterisk
        size='sm'
        type='number'
        style={{ width: '100%'}}
        onChange={handleTotalValueOfProcurementApproved}
      />
      <DatePickerInput
          label="Date of PTB"
          placeholder="Date of PTB"
          value={data.date_of_ptb as Date}
          onChange={handleDateOfPtb}
          mx="auto"
          maw={400}
        />
      </Flex>
      <Textarea placeholder="Description of procurement" style={{width: '100%'}}
        label="Description" value={data.description_of_procurement} onChange={handleDescriptionOfProcurement} />
    </>
  )
}

export default ParastatalTenderBoardForm