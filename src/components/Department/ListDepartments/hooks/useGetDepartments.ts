import useApiQuery from '@/hooks/useApiQuery';
import { useParams } from 'next/navigation';
import { GET_DEPARTMENT_LIST } from '../constants';
import { getDepartmentListApi } from '../service';
import { useSetRecoilState } from 'recoil';
import { departmentListAtom } from '../state';
import { useEffect } from 'react';
import { DepartmentListReturnDataType } from '../model';
export const useGetDepartments = () => {
  const { parastatalId } = useParams();
  const setData = useSetRecoilState(departmentListAtom)
  const { data, isLoading, error, refetch } = useApiQuery<DepartmentListReturnDataType>(`${GET_DEPARTMENT_LIST}${parastatalId}`, getDepartmentListApi(parastatalId as string), false)

  useEffect(() => {
    if(data) setData(data)
  }, [data])
  
  return {data, isLoading, error, refetch}
}