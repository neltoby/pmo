import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { DeptTableEnum, InsuranceDataType } from "../model";
import { insuranceFormDataAtom, insuranceTableData } from "../state/insurance.atom";
import { deptTableAtom } from "../state";

export const useInsuranceHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValues] = useRecoilState<InsuranceDataType>(insuranceFormDataAtom);
  const resetInput = useResetRecoilState(insuranceFormDataAtom);
  const setTableRow = useSetRecoilState(insuranceTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreateInsurance = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.Insurance) 
  }

  const handleTypeOfAssets = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({...val, type_of_assets: e.target.value}))
  };
  const handleNetBookValueOfAssetDate = (date: Date) => {
    setValues(val => ({...val, net_book_value_of_assets_date: date}))
  };
  const handleNetBookValueOfAsset = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({...val, net_book_value_of_assets: +e.target.value || null}))
  };
  const handleValueInsured = (e: ChangeEvent<HTMLInputElement>) => { 
    setValues(val => ({ ...val, value_insured: e.target.value })) 
  };
  const handleTypeOfInsurance = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, type_of_insurance: e.target.value })) 
  };
  const handleInsuranceCompany = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, insurance_company: e.target.value })) 
  };
  const handlePremiumPaid = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({...val, premium_paid: +e.target.value || null}))
  };
  const handlePeriodCovered = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, period_covered: e.target.value })) 
  };
  const handleAmountPaid = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({...val, amount_paid: +e.target.value || null}))
  };
  
  return {
    opened, open, close,
    handleTypeOfAssets,
    handleNetBookValueOfAssetDate,
    handleNetBookValueOfAsset,
    handleValueInsured,
    handleTypeOfInsurance,
    handleInsuranceCompany,
    handlePremiumPaid,
    handlePeriodCovered,
    handleAmountPaid,
    handleCreateInsurance
  }
}