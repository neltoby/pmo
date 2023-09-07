import { ChangeEvent, ReactNode } from "react"

export enum AcctStatus {
  Active = 'active',
  Closed = 'closed',
}

export enum ProjectStatus {
  Completed = 'completed',
  Started = 'started',
  OnGoing = 'on-going',
}

export enum DeptTableEnum {
  Nothing = '',
  BankForm = 'bank-form',
  Insurance = 'insurance',
  Housing = 'housing',
  Loan = 'loan',
  PTB = 'ptb',
  Paye = 'paye',
  Payroll = 'payroll',
  Pension = 'pension',
  Project = 'project',
  StaffLoan = 'staff-loan',
  PaymentCerticate = 'payment-certificate',
  MonitoringProject = 'monitoring-project',
}

export type FormModalType = {
  opened: boolean;
  close: () => void;
}

export type DepartmentIdType = {
  department: string
}

// export type DeptTableType = {
//   category: DeptTableEnum
// }

export type CreateProjectType = DepartmentIdType & FormInputsType

export type FormInputsType = {
  name_of_bank: string,
  account_no: string,
  purpose_of_acct: string,
  balance_for_the_day: number | null,
  cashbook_balance: number | null,
  status_of_bank_account: AcctStatus,
}

export enum Months {
  Jan = 'January',
  Feb = 'February',
  Mar = 'March',
  Apr = 'April',
  May = 'May',
  Jun = 'June',
  Jul = 'July',
  Aug = 'August',
  Sep = 'September',
  Oct = 'October',
  Nov = 'November',
  Dec = 'December'
}

export type TablesFormType = {
  data: any[],
  render: (val: any) => ReactNode,
  label: string,
}

export type PayrollFormPermanentType = {
  month: Months;
  no_of_emp_a: number | null;
  gross_earnings: number | null;
  employees_contribution: number | null;
  total_c: number | null;
  total_deductions: number | null;
  net_pay: number | null;

}

export type PayrollFormContractType = {
  no_of_emp_b: number | null;
  gross_earnings_d: number | null;
  deductions: number | null;
  net_pay_t: number | null;
}

export type PayrollTotal = {
  total_no_of_staff: number | null;
  grand_total: number | null;
}

export type PayrollDataType = PayrollFormPermanentType & PayrollFormContractType & PayrollTotal

export type PensionDataType = {
  month: Months;
  no_of_emp: number | null;
  employers_contribution: number | null;
  employees_contribution: number | null;
  total_contribution: number | null;
  contributory_pension_paid: number | null;
  month_paid: Months;
  status_of_filling_returns: string;
}

export type PayeDataType = {
  month: Months;
  no_of_emp: number | null;
  paye_deducted: number | null;
  paye_paid: number | null;
  month_paid: Months;
  status_of_filling_returns: string;
}

export type HousingFundDataType = {
  month: Months;
  no_of_emp: number | null;
  nhf_deducted: number | null;
  nhf_paid: number | null;
  month_paid: Months;
  status_of_filling_returns: string;
}

export type StaffLoanDataType = {
  name_of_beneficiary: string;
  value_of_loan: number | null;
  date_issued: Date;
  period_of_loan: string;
  interest_rate: number | null;
  interest_amount: number | null;
  repayment_date: Date;
  amount_paid: number | null;
  balance_due: number | null;
}

export type InsuranceDataType = {
  type_of_assets: string;
  net_book_value_of_assets_date: Date;
  net_book_value_of_assets: number | null;
  value_insured: string;
  type_of_insurance: string;
  insurance_company: string;
  premium_paid: number | null;
  period_covered: string;
  amount_paid: number | null;
}


export type LoanDataType = {
  description: string;
  value_owed: number | null;
  period_outstanding: string;
}


export type ParastatalTenderBoardDataType = {
  month: Months;
  total_value_of_procuremnet_approved: number | null;
  description_of_procurement: string;
  date_of_ptb: Date
}

export type ProjectCapitalExpenditureDataType = {
  pv_no: string;
  description: string;
  value_of_project: number | null;
  location: string;
  percentage_of_completion: number | null;
  payment_till_date: number | null;
  targeted_timeline: Date
  status_of_completion: ProjectStatus
  pre_payment_certificate: File | null
}

export type MonitoringProjectDataType = {
  description: string;
  location: string;
  contract_sum: number | null;
  duration_of_project: string;
  project_start_date: Date;
  project_end_date: Date;
  amount_paid_during_year: number | null;
  amount_paid_to_date: number | null;
  outstanding_balance: number | null;
  percentage_completion: number | null;
  remarks: string
}

export type DirectLabourProcurementCertificateDataType = {
  interim_final_payment_certificate_no: string;
  date: Date;
  work_details: string;
  reason_for_project: string;
  account_code: string;
  total_work_value: string;
  amount_collected_to_date: number | null;
  balance_with_sto: number | null;
  work_completed_to_date: string;
  materials_on_site: string;
  total_value_of_work_and_materials_on_site: string;
  percentage_of_work_done: number | null;
  date_of_approval: Date;
  approved_date_of_completion: Date;
}

export type CertificateDetailsDataType = {
  certificate_no: string;
  date_of_certification: Date;
  amount_certified: number | null;
  cumulative_amount: number | null;
  advance_payment: number | null;
}

export type SignCertificateDataType = {
  amount_paid: number | null;
  name: string;
}

export type PaymentCerticate = DirectLabourProcurementCertificateDataType & CertificateDetailsDataType & SignCertificateDataType;

