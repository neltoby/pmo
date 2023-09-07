import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DeptTableEnum, Months, PayeDataType, PaymentCerticate } from "../model";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { payeFormDataAtom } from "../state/payeform.atom";
import { paymentCertificateFormDataAtom, paymentCertificateTableData } from "../state/paymentcertificateform.atom";
import { deptTableAtom } from "../state";

export const usePaymentCertificateHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useRecoilState<PaymentCerticate>(paymentCertificateFormDataAtom)
  const resetInput = useResetRecoilState(paymentCertificateFormDataAtom);
  const setTableRow = useSetRecoilState(paymentCertificateTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreatePaymentCertificate = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.PaymentCerticate)
  }
  const handleInterimFinalPaymentCertificateNo = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, interim_final_payment_certificate_no: e.target.value })) 
  };
  const handleDate = (value: Date) => {
    setValue(val => ({...val, date: value}))
  };
  const handleWorkDetails = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({ ...val, work_details: e.target.value })) 
  };
  const handleReasonForProject = (e: ChangeEvent<HTMLTextAreaElement>) => { 
    setValue(val => ({...val, reason_for_project: e.currentTarget.value })) 
  };
  const handleAccountCode = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, account_code: e.target.value })) 
  };
  const handleTotalWorkValue = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, total_work_value: e.target.value })) 
  };
  const handleAmountCollectedToDate = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, amount_collected_to_date: +e.target.value || null })) 
  };
  const handleBalanceWithSto = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, balance_with_sto: +e.target.value || null })) 
  };
  const handleWorkCompletedToDate = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, work_completed_to_date: e.target.value })) 
  };
  const handleMaterialsOnSite = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, materials_on_site: e.target.value })) 
  };
  const handleTotalValueOfWorkAndMaterialOnSite = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, total_value_of_work_and_materials_on_site: e.target.value })) 
  };
  const handlePercentageOfWorkDone = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, percentage_of_work_done: +e.target.value || null })) 
  };
  const handleDateOfApproval = (value: Date) => { 
    setValue(val => ({...val, date_of_approval: value })) 
  };
  const handleApprovedDateOfCompletion = (value: Date) => { 
    setValue(val => ({...val, approved_date_of_completion: value })) 
  };
  const handleCertificateNo = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, certificate_no: e.target.value }))
  };
  const handleDateOfCertificationRelease = (value: Date) => { 
    setValue(val => ({...val, date_of_certification: value })) 
  };
  const handleAmountCertified = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, amount_certified: +e.target.value || null}))
  };
  const handleCumulativeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, cumulative_amount: +e.target.value || null}))
  };
  const handleAdvancePayment = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, advance_payment: +e.target.value || null}))
  };
  const handleAmountPaid = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, amount_paid: +e.target.value || null }))
  };
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, name: e.target.value}))
  };
  
  return {
    opened, open, close,
    handleInterimFinalPaymentCertificateNo,
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
    handleName,
    handleCreatePaymentCertificate
  }
}