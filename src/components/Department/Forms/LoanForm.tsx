
import { FC } from 'react'
import { Flex, Select, TextInput, Textarea } from '@mantine/core'
import { LoanDataType } from '../model'
import { useLoanHandler } from '../hook/useLoanHandler'
import { useRecoilValue } from 'recoil'
import { loanFormDataAtom } from '../state/loan.atom'


const LoanForm = () => {
  const { handleDescription,
    handleValueOwed,
    handlePeriodOutStanding } = useLoanHandler()
  const data = useRecoilValue<LoanDataType>(loanFormDataAtom)


  return (
    <>
      <Textarea placeholder="Description" style={{width: '100%'}}
        label="Description" value={data.description} onChange={handleDescription} />
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Value owed"
        label="Value owed"
        value={data.value_owed as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handleValueOwed}
      />
      <TextInput
        placeholder="Period outstanding"
        label="Period outstanding"
        value={data.period_outstanding}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handlePeriodOutStanding}
      />
      </Flex>
    </>
  )
}

export default LoanForm