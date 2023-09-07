import { atom } from "recoil";
import { PaymentCerticate } from "../model";

export const paymentCertificateFormDataAtom = atom<PaymentCerticate>({
  key: 'paymentCertificateFormDataAtom',
  default: {
    interim_final_payment_certificate_no: '',
    date: new Date(),
    work_details: '',
    reason_for_project: '',
    account_code: '',
    total_work_value: '',
    amount_collected_to_date: 0,
    balance_with_sto: 0,
    work_completed_to_date: '',
    materials_on_site: '',
    total_value_of_work_and_materials_on_site: '',
    percentage_of_work_done: 0,
    date_of_approval: new Date(),
    approved_date_of_completion: new Date(),
    certificate_no: '',
    date_of_certification: new Date(),
    amount_certified: 0,
    cumulative_amount: 0,
    advance_payment: 0,
    amount_paid: 0,
    name: '',
  },
})

export const paymentCertificateTableData = atom<PaymentCerticate[]>({
  key: 'paymentCertificateTableData',
  default: []
})