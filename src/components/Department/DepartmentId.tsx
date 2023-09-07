'use client'

import { FC } from 'react';
import { Flex, } from '@mantine/core'
import { useRecoilValue } from 'recoil';
import { DepartmentIdType, DeptTableEnum, } from './model';
import BankForm from './Forms/BankForm';
import Payroll from './Forms/Payroll';
import Pension from './Forms/Pension';
import Paye from './Forms/Paye';
import HousingFund from './Forms/HousingFund';
import StaffLoan from './Forms/StaffLoan';
import Insurance from './Forms/Insurance';
import Loan from './Forms/Loan';
import BankFormTable from './FormTables/BankForm';
import HousingFundTable from './FormTables/HousingFund';
import InsuranceFormTable from './FormTables/InsuranceForm';
import ParastatalTenderBoard from './Forms/ParastatalTenderBoard';
import LoanFormTable from './FormTables/LoanForm';
import ProjectCapitalExpenditure from './Forms/ProjectCapitalExpenditure';
import MonitoringProject from './Forms/MonitoringProject';
import PaymentCertificate from './Forms/PaymentCertificate';
import { deptTableAtom } from './state';
import MonitoringForm from './FormTables/MonitoringForm';
import PayeForm from './FormTables/PayeForm';
import ParastatalsForm from './FormTables/ParastatalsForm';
import PaymentForm from './FormTables/PaymentForm';
import PayrollForm from './FormTables/PayrollForm';
import PensionForm from './FormTables/PensionForm';
import ProjectCapitalExpenditureTable from './FormTables/ProjectCapitalExpenditure'
import StaffLoanTable from './FormTables/StaffLoan';

const DepartmentId: FC<DepartmentIdType> = ({ department }) => {
  const data = useRecoilValue<DeptTableEnum>(deptTableAtom)
  return data === DeptTableEnum.Nothing ? (
    <Flex
      direction="row"
      gap="lg"
      wrap='wrap'
    >
      {department.toLowerCase() == 'research' ?
        <>
          <Pension />
          <Paye />
        </>:
        <>
          <BankForm />
          <Payroll />
          
          <Paye />
          <HousingFund />
          <StaffLoan />
          <Insurance />
          <Loan />
          <ParastatalTenderBoard />
          <ProjectCapitalExpenditure />
          <MonitoringProject />
          <PaymentCertificate /> 
        </>
       }
    </Flex>
  ) : (
    <>
        {data === DeptTableEnum.BankForm && <BankFormTable />}
        {data === DeptTableEnum.Housing && <HousingFundTable />}
        {data === DeptTableEnum.Insurance && <InsuranceFormTable />}
        {data === DeptTableEnum.Loan && <LoanFormTable />}
        {data === DeptTableEnum.MonitoringProject && <MonitoringForm />}
        {data === DeptTableEnum.Paye && <PayeForm />}
        {data === DeptTableEnum.PTB && <ParastatalsForm />}
        {data === DeptTableEnum.PaymentCerticate && <PaymentForm />}
        {data === DeptTableEnum.Payroll && <PayrollForm />}
        {data === DeptTableEnum.Pension && <PensionForm />}
        {data === DeptTableEnum.Project && <ProjectCapitalExpenditureTable />}
        {data === DeptTableEnum.StaffLoan && <StaffLoanTable/>}
    </>
  )
}

export default DepartmentId