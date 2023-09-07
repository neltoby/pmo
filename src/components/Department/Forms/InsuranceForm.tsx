import { Flex, TextInput } from '@mantine/core'
import { InsuranceDataType } from '../model'
import { DatePickerInput } from '@mantine/dates'
import { useRecoilValue } from 'recoil'
import { insuranceFormDataAtom } from '../state/insurance.atom'
import { useInsuranceHandler } from '../hook/useInsuranceHandler'

const dateFormat = (date: Date): string => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}


const InsuranceForm = () => {
  const data = useRecoilValue<InsuranceDataType>(insuranceFormDataAtom)
  const { opened, open, close,
    handleTypeOfAssets,
    handleNetBookValueOfAssetDate,
    handleNetBookValueOfAsset,
    handleValueInsured,
    handleTypeOfInsurance,
    handleInsuranceCompany,
    handlePremiumPaid,
    handlePeriodCovered,
    handleAmountPaid } = useInsuranceHandler()
  return (
    <>
      <TextInput
        placeholder="Type of Assets"
        label="Type of Assets"
        value={data.type_of_assets}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleTypeOfAssets}
      />
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <DatePickerInput
        label="Assets date"
        placeholder="Date"
        value={data.net_book_value_of_assets_date as Date}
        onChange={handleNetBookValueOfAssetDate}
        mx="auto"
        maw={400}
      />
      <TextInput
          placeholder={`Net book value of asset as at ${dateFormat(data.net_book_value_of_assets_date)}`}
        label={`Net book value of asset as at ${dateFormat(data.net_book_value_of_assets_date)}`}
        value={data.net_book_value_of_assets as number}
        withAsterisk
          size='sm'
          type='number'
        style={{ width: '100%'}}
        onChange={handleNetBookValueOfAsset}
      />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Value insured"
          label="Value insured"
          value={data.value_insured}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleValueInsured}
        />
        <TextInput
          placeholder="Type of insurance"
          label="Type of insurance"
          value={data.type_of_insurance}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleTypeOfInsurance}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Insurance company"
          label="Insurance company"
          value={data.insurance_company}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handleInsuranceCompany}
        />
        <TextInput
          placeholder="Premium paid"
          label="Premium paid"
          value={data.premium_paid as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handlePremiumPaid}
        />
      </Flex>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
        <TextInput
          placeholder="Period covered"
          label="Period covered"
          value={data.period_covered}
          withAsterisk
          size='sm'
          style={{ width: '100%'}}
          onChange={handlePeriodCovered}
        />
        <TextInput
          placeholder="Amount paid"
          label="Amount paid"
          value={data.amount_paid as number}
          withAsterisk
          type='number'
          size='sm'
          style={{ width: '100%'}}
          onChange={handleAmountPaid}
        />
      </Flex>
    </>
  )
}

export default InsuranceForm