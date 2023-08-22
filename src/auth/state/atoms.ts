import { atom } from 'recoil'
import { DEFAULT_KIA_GO_AUTH } from '@/auth/constants'
import { KiaGoAuth } from '@/auth/models/auth'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const kiaGoAuthAtom = atom<KiaGoAuth>({ ...DEFAULT_KIA_GO_AUTH, effects_UNSTABLE: [persistAtom] })
