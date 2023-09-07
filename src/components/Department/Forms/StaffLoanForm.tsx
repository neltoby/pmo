import { Flex, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates';
import { useStaffLoanHandler } from '../hook/useStaffLoanHandler';
import { useRecoilValue } from 'recoil';
import { staffLoanFormDataAtom } from '../state/staffloanform.atom';


const StaffLoanForm = () => {
  const { 
    handleNameOfBeneficiary,
    handleValueOfLoan,
    handleDateIssued,
    handlePeriodOfLoan,
    handleInterestRate,
    handleInterestAmt,
    handleRepaymentDate,
    handleAmountPaid,
   handleBalanceDue,
  } = useStaffLoanHandler()
  const data = useRecoilValue(staffLoanFormDataAtom)
  return (
    <>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Name of Beneficiaries"
        label="Name of Beneficiaries"
        value={data.name_of_beneficiary}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNameOfBeneficiary}
      />
      <TextInput
        placeholder="Value of Loan"
        label="Value of Loan"
        value={data.value_of_loan as number}
        type="number"
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleValueOfLoan}
      />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <DatePickerInput
          label="Date issued"
          placeholder="Date issued"
          value={data.date_issued}
          onChange={handleDateIssued}
          mx="auto"
          maw={400}
        />
        <DatePickerInput
          label="Repayment date"
          placeholder="Repayment date"
          value={data.repayment_date}
          onChange={handleRepaymentDate}
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
        <TextInput
          placeholder="Interest rate"
          label="Interest rate"
          value={data.interest_rate as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handleInterestRate}
        />
        <TextInput
          placeholder="Interest (Amount)"
          label="Interest (Amount)"
          value={data.interest_amount as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handleInterestAmt}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Period of loan"
          label="Period of loan"
          value={data.period_of_loan}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handlePeriodOfLoan}
        />
        <TextInput
          placeholder="Amount paid"
          label="Amount paid"
          value={data.amount_paid as number}
          withAsterisk
          size='sm'
          type='number'
          style={{ width: '100%'}}
          onChange={handleAmountPaid}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Balance due"
          label="Balance due"
          value={data.balance_due as number}
          withAsterisk
          size='sm'
          type='number'
          style={{ width: '100%'}}
          onChange={handleBalanceDue}
        />
      </Flex>
    </>
  )
}

export default StaffLoanForm