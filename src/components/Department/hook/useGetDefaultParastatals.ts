import useApiQuery from '@/hooks/useApiQuery';
import { useParams } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { GET_DEPARTMENT_LIST } from '../ListDepartments/constants';
import { DepartmentListReturnDataType } from '../ListDepartments/model';
import { getDepartmentListApi } from '../ListDepartments/service';
import { departmentListAtom } from '../ListDepartments/state';
import { defaultParastatals } from '../state/department.atom';
export const useGetDefaultParastatals = () => {
  const parastatalId  = useRecoilValue(defaultParastatals)
  const setData = useSetRecoilState(departmentListAtom)
  const { data, isLoading, error, refetch } = useApiQuery<DepartmentListReturnDataType>(`${GET_DEPARTMENT_LIST}${parastatalId}`, getDepartmentListApi(parastatalId as string), false)

  useEffect(() => {
    if(data) setData(data)
  }, [data])
  
  return {data, isLoading, error, refetch}
}