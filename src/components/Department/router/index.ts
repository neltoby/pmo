import { PARASTATAL_BASE_URL } from "@/components/Parastatals/router";
const CREATE_PROJECT_BASE_URL = 'projects/department'


export const createProjectUrl = () => `${CREATE_PROJECT_BASE_URL}`;

export const getDefaultDepartmentListUrl = () => `${PARASTATAL_BASE_URL}/department`