
import { FC } from 'react'
import { Flex, Group, Radio, Select, TextInput, Title } from '@mantine/core'
import { Months } from '../model'
import { usePayrollHandler } from '../hook/usePayrollHandler'
import { useRecoilValue } from 'recoil'
import { payrollFormDataAtom } from '../state/payrollform.atom'


const months: Months[] = [
  Months.Jan, Months.Feb, Months.Mar, Months.Apr, Months.May, Months.Jun, Months.Jul, Months.Aug, Months.Sep, Months.Oct, Months.Nov, Months.Dec
]

const PayrollForm = () => {
  const { handleNoOfEmp, handleSearchMonth, handleGrossEarnings, handleSetEmpCont, handleSetTotal_c, handleTotalDeductions, handleNetPay, handleGrandTotal, handleGrossEarnings_d, handleDeductions, handleNetPay_t, handleTotalNoOfStaff, handleCreatePayroll, handleNoOfEmp_b } = usePayrollHandler()
  const data = useRecoilValue(payrollFormDataAtom)

  return (
    <>
      <Select
      label="Select Month"
      placeholder="Select Month"
      searchable
      onSearchChange={handleSearchMonth}
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
        value={data.no_of_emp_a as number}
        withAsterisk
        type="number"
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNoOfEmp}
      />
      <TextInput
        placeholder="Gross earnings"
        label="Gross earnings"
        value={data.gross_earnings as number}
        withAsterisk
        type='number'
        size='sm'
        style={{ width: '100%'}}
        onChange={handleGrossEarnings}
      />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Employee's contribution (%)"
          label="Employee's contribution (%)"
          value={data.employees_contribution as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handleSetEmpCont}
        />
        <TextInput
          placeholder="Total C"
          label="Total C"
          value={data.total_c as number}
          type='number'
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleSetTotal_c}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Total deductions"
        label="Total deductions"
        value={data.total_deductions as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleTotalDeductions}
      />
      <TextInput
        placeholder="Net pay"
        label="Net pay"
        value={data.net_pay as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNetPay}
        />
      </Flex>

      <Title order={5}>
        Temporary Staff - (Contract/Adhoc/Project/Outsourced)
      </Title>

      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="No of Employee B"
        label="No of Employee B"
        value={data.no_of_emp_b as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNoOfEmp_b}
      />
      <TextInput
        placeholder="Gross earnings D"
        label="Gross earnings D"
        value={data.gross_earnings_d as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleGrossEarnings_d}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Deductions"
        label="Deductions"
        value={data.deductions as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleDeductions}
      />
      <TextInput
        placeholder="Net pay"
        label="Net pay"
        value={data.net_pay_t as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNetPay_t}
        />
      </Flex>
    </>
  )
}

export default PayrollForm