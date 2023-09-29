import useApiQuery from '@/hooks/useApiQuery';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { GET_DEPARTMENT_LIST } from '../ListDepartments/constants';
import { DepartmentListReturnDataType } from '../ListDepartments/model';
import { departmentListAtom } from '../ListDepartments/state';
import { getDefaultDepartmentListApi } from '../services';
export const useGetDefaultParastatals = () => {
  const setData = useSetRecoilState(departmentListAtom)
  const { data, isLoading, error, refetch } = useApiQuery<DepartmentListReturnDataType>(`${GET_DEPARTMENT_LIST}`, getDefaultDepartmentListApi(), false)

  useEffect(() => {
    if(data) setData(data)
  }, [data])
  
  return {data, isLoading, error, refetch}
}