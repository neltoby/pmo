'use client'

import { Box, Flex, Modal, keyframes } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconBrandTelegram } from "@tabler/icons-react"
import { AddressTo, Medium } from "./model"
import Post from "./components/Post/Post"
import OtherPost from "./components/OtherPost/OtherPost"
import Form from "./components/Form/Form"
import { signInRole } from "../AdminSignin/state"
import { useRecoilValue } from "recoil"
import { Role } from "../Signin/model"
import AdminBoard from "./components/AdminBoard/AdminBoard"
import OtherBoard from "./components/OtherBoard/page"

const NoticeBoard = () => {
  const role = useRecoilValue(signInRole)
  
  return (
  <>
      {role === Role.Admin &&
        <AdminBoard />
      }
      {role !== Role.Admin && <OtherBoard />}
  </>
  )
}

export default NoticeBoard