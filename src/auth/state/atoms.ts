import { atom } from 'recoil'
import { DEFAULT_PMO_AUTH } from '@/auth/constants'
import { PmoAuth } from '@/auth/models/auth'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const pmoAuthAtom = atom<PmoAuth>({ ...DEFAULT_PMO_AUTH, effects_UNSTABLE: [persistAtom] })
