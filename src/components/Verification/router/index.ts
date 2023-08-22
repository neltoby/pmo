export const SUPERADMIN_BASE_URL = 'super-admin'

export const getVerifySuperAdminTokenUrl = (token: string) => `${SUPERADMIN_BASE_URL}/verify-admin?token=${token}`