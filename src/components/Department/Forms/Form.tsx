import { useRecoilValue } from 'recoil'
import { Flex, Group, Radio, Space, TextInput } from '@mantine/core'
import { AcctStatus, FormInputsType } from '../model'
import { bankFormDataAtom } from '../state/bankform.atom'
import { useHandler } from '../hook/useHandler'


const Form = () => {
  const {handleNameOfBank, handleAcctNo, handlePurposeOfAcct, handleBalForDay, handleCashBookBal, handleStatusOfAcct } = useHandler()
  const input = useRecoilValue<FormInputsType>(bankFormDataAtom)
  return (
    <>
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Name of bank"
        label="Name of bank"
        value={input.name_of_bank}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleNameOfBank}
      />
      <TextInput
        placeholder="Account number"
        label="Account number"
        value={input.account_no}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleAcctNo}
      />
      </Flex>
      <TextInput
        placeholder="Purpose of account"
        label="Purpose of account"
        value={input.purpose_of_acct}
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handlePurposeOfAcct}
      />
      <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%"}}
      >
      <TextInput
        placeholder="Balance for the day"
        label="Balance for the day"
        value={input.balance_for_the_day as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleBalForDay}
      />
      <TextInput
        placeholder="Cash book balance"
        label="Cash book balance"
        value={input.cashbook_balance as number}
        type='number'
        withAsterisk
        size='sm'
        style={{ width: '100%'}}
        onChange={handleCashBookBal}
        />
      </Flex>
      <div className='w-full'>
        <Radio.Group
          name="account-status"
          label="Account status"
          description="Is this account still valid?"
          withAsterisk
          value={input.status_of_bank_account}
          onChange={handleStatusOfAcct}
        >
        <Group mt="xs">
          <Radio value={AcctStatus.Active} label='Active' />
          <Radio value={AcctStatus.Closed} label="Closed" />
        </Group>
        </Radio.Group>
      </div>
    </>
  )
}

export default Form