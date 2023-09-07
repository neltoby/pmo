import React from 'react'
import { paymentCertificateFormDataAtom } from '../state/paymentcertificateform.atom'
import { Select, Flex, TextInput, Textarea } from '@mantine/core'
import { Title } from 'chart.js'
import { useRecoilValue } from 'recoil'
import { usePaymentCertificateHandler } from '../hook/usePaymentCertificateHandler'
import { DatePickerInput } from '@mantine/dates'

const PaymentCertificateForm = () => {
  const { handleInterimFinalPaymentCertificateNo,
    handleDate,
    handleWorkDetails,
    handleReasonForProject,
    handleAccountCode,
    handleTotalWorkValue,
    handleAmountCollectedToDate,
    handleBalanceWithSto,
    handleWorkCompletedToDate,
    handleMaterialsOnSite,
    handleTotalValueOfWorkAndMaterialOnSite,
    handlePercentageOfWorkDone,
    handleDateOfApproval,
    handleApprovedDateOfCompletion,
    handleCertificateNo,
    handleDateOfCertificationRelease,
    handleAmountCertified,
    handleCumulativeAmount,
    handleAdvancePayment,
    handleAmountPaid,
    handleName, } = usePaymentCertificateHandler()
  const data = useRecoilValue(paymentCertificateFormDataAtom)

  return (
    <>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          label="Interim/Final payment Certificate No"
          placeholder="Interim/Final payment Certificate No"
          value={data.interim_final_payment_certificate_no}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleInterimFinalPaymentCertificateNo}
        />
        <DatePickerInput
          label="Date"
          placeholder="Date"
          value={data.date}
          onChange={handleDate}
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
        placeholder="Work Details"
        label="Work Details"
        value={data.work_details}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleWorkDetails}
        />
        <Textarea placeholder="Reason for the Project" style={{width: '100%'}}
        label="Reason for the Project" value={data.reason_for_project} onChange={handleReasonForProject} />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Account Code"
          label="Account Code"
          value={data.account_code}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleAccountCode}
        />
        <TextInput
          placeholder="Total Work Value"
          label="Total Work Value"
          value={data.total_work_value}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleTotalWorkValue}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Amount Collected to Date"
        label="Amount Collected to Date"
        value={data.amount_collected_to_date as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleAmountCollectedToDate}
      />
      <TextInput
        placeholder="Balance with STO"
        label="Balance with STO"
        value={data.balance_with_sto as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleBalanceWithSto}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Work completed to date"
        label="Work completed to date"
        value={data.work_completed_to_date}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleWorkCompletedToDate}
      />
      <TextInput
        placeholder="Materials on site"
        label="Materials on site"
        value={data.materials_on_site}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleMaterialsOnSite}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Total value of work and materials on site"
        label="Total value of work and materials on site"
        value={data.total_value_of_work_and_materials_on_site}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleTotalValueOfWorkAndMaterialOnSite}
      />
      <TextInput
        placeholder="Percentage of work done"
        label="Percentage of work done"
        value={data.percentage_of_work_done as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handlePercentageOfWorkDone}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <DatePickerInput
          label="Date of Approval"
          placeholder="Date of Approval"
          value={data.date_of_approval}
          onChange={handleDateOfApproval}
          mx="auto"
          maw={400}
        />
        <DatePickerInput
          label="Approved date of completion"
          placeholder="Approved date of completion"
          value={data.approved_date_of_completion}
          onChange={handleApprovedDateOfCompletion}
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
        placeholder="Certificate No"
        label="Certificate No"
        value={data.certificate_no}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleCertificateNo}
      />
        <DatePickerInput
          label="Date of certification/release"
          placeholder="Date of certification/release"
          value={data.date_of_certification}
          onChange={handleDateOfCertificationRelease}
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
        placeholder="Amount Certified"
        label="Amount Certified"
        value={data.amount_certified as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleAmountCertified}
      />
      <TextInput
        placeholder="Cumulative Amount"
        label="Cumulative Amount"
        value={data.cumulative_amount as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleCumulativeAmount}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Advance Payment"
        label="Advance Payment"
        value={data.advance_payment as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleAdvancePayment}
      />
      <TextInput
        placeholder="Amount paid"
        label="Amount paid"
        value={data.amount_paid as number}
        type='number'
        withAsterisk
        size='sm'
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
        placeholder="Name"
        label="Messrs"
        value={data.name}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleName}
      />
      </Flex>
    </>
  )
}

export default PaymentCertificateForm