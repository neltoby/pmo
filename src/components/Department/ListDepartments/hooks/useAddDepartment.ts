import useApiMutation from "@/hooks/useApiMutation";
import { useParams } from "next/navigation";
import { useQueryClient } from "react-query";
import { ADD_DEPARTMENT, GET_DEPARTMENT_LIST } from "../constants";
import { addDepartmentApi } from "../service";

export const useAddDepartment = (name: string) => {
  const queryClient = useQueryClient()
  const { parastatalId } = useParams();
  const { mutate, isSuccess, error } = useApiMutation(ADD_DEPARTMENT, addDepartmentApi({ pid: parastatalId as string, name }), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [`${GET_DEPARTMENT_LIST}${parastatalId}`]})
    }
  })

  return {mutate, error}
}