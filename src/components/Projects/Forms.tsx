'use client'

import { ChangeEvent, FC, FormEvent, useState } from "react"
import Input from "@/shared/Input"
import { Button } from "@mantine/core"
import { ProjectDetailsType } from "./Projects"

export type FormProp= {
  handleSubmitProp: (val: ProjectDetailsType) => void;
  close: Function
}

const Forms: FC<FormProp> = ({handleSubmitProp, close}) => {
  const [desc, setDesc] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [conSum, setConSum] = useState<string>('')
  const [dur, setDur] = useState<string>('')
  const [proStart, setProStart] = useState<string>('')
  const [proEnd, setProEnd] = useState<string>('')
  const [amtPaidDuringYear, setAmtPaidDuringYear] = useState<string>('')
  const [amtPaidToDate, setAmtPaidToDate] = useState<string>('')
  const [bal, setBal] = useState<string>('')
  const [comp, setComp] = useState<string>('')
  const handleonChangeDesc = (e: ChangeEvent<HTMLInputElement>) => { 
    setDesc(e.target.value)
  }
  const handleonChangeLoc = (e: ChangeEvent<HTMLInputElement>) => { 
    setLocation(e.target.value)
  }
  const handleonChangeCon = (e: ChangeEvent<HTMLInputElement>) => { 
    setConSum(e.target.value)
  }
  const handleonChangeDur = (e: ChangeEvent<HTMLInputElement>) => { 
    setDur(e.target.value)
  }
  const handleonChangeStart = (e: ChangeEvent<HTMLInputElement>) => { 
    setProStart(e.target.value)
  }
  const handleonChangeEnd = (e: ChangeEvent<HTMLInputElement>) => { 
    setProEnd(e.target.value)
  }
  const handleonChangeAmt = (e: ChangeEvent<HTMLInputElement>) => { 
    setAmtPaidDuringYear(e.target.value)
  }
  const handleonChangeAmtToDate = (e: ChangeEvent<HTMLInputElement>) => { 
    setAmtPaidToDate(e.target.value)
  }
  const handleonChangeBal = (e: ChangeEvent<HTMLInputElement>) => { 
    setBal(e.target.value)
  }
  const handleonChangeCom = (e: ChangeEvent<HTMLInputElement>) => { 
    setComp(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    close()
    console.log('Checking all')
    handleSubmitProp({ description: desc, location: location, contract: conSum, duration: dur })
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input required placeholder='Description' value={desc} onChange={handleonChangeDesc} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2" />

      <Input required placeholder='Location' value={location} onChange={handleonChangeLoc} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2" />
      <Input required placeholder='Contract sum' value={conSum} onChange={handleonChangeCon} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"/>
      <Input required placeholder='Duration of project' value={dur} onChange={handleonChangeDur} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"/>
      <Input required placeholder='Project start' type='date' value={proStart} onChange={handleonChangeStart} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"/>
      <Input required placeholder='Project end' type='date' value={proEnd} onChange={handleonChangeEnd} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"/>
      <Input required placeholder='Amount paid during the year' value={amtPaidDuringYear} onChange={handleonChangeAmt} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"/>
      <Input required placeholder='Amount paid to date' value={amtPaidToDate} onChange={handleonChangeAmtToDate} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"/>
      <Input required placeholder='Outstanding Balance' value={bal} onChange={handleonChangeBal} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"/>
      <Input required placeholder='Percentage completion' value={comp} onChange={handleonChangeCom} className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2" />
        <Button type='submit'color='#fff'      
          style={{ backgroundColor: '#00acee', marginTop: '1rem'}}>Create Project</Button>
    </form>
  )
}

export default Forms