import { MultiSelect } from '@mantine/core'
import { useRecoilState, useRecoilValue } from 'recoil'
import { NoticeDataType } from '../../model'
import { noticeBoardForm, noticeBoardFormToSelector } from '../../state'
import { useGetParastatalsList } from '@/components/Parastatals/hooks/useGetParastatalsList'
import { formData } from '@/components/SignUp/components/Signup'

const SelectParastal = () => {
  const [values, setValues] = useRecoilState<NoticeDataType>(noticeBoardForm)
  const formState = useRecoilValue(noticeBoardFormToSelector)
  const { data } = useGetParastatalsList()
  const handleSelectParastal = (paras: string[]) => { 
    setValues(val => ({ ...val, to_parastatal: paras }))
  }
  return (
  <>
    { formState &&
      <>
        <MultiSelect
          // @ts-ignore
          checkIconPosition="left"
          required
          label="Select parastatal to send to..."
          placeholder="Select Parastatal..."
          value={values.to_parastatal}
          onChange={handleSelectParastal}
          data={formData(data)}
          searchable
          dropdownOpened
          nothingFoundMessage="Nothing found..."
        />
        <br />
      </>
      }
  </>
  )
}

export default SelectParastal