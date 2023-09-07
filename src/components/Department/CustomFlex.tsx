import { Flex, FlexProps } from "@mantine/core"
import { FC, ReactNode } from "react"

export type CustomFlexType =  FlexProps & {
  children: ReactNode
}

const CustomFlex: FC<CustomFlexType> = ({ children }) => {
  return (
    <Flex
        justify="space-between"
        direction="row"
        gap="md"
        style={{ width: "100%" }}
        sx={{
        '&:hover': {
          backgroundColor: '#eee',
        },

        '@media (max-width: 40em)': {
          flexDirection: "column",
        },
        }}
    >
      {children}
    </Flex>
  )
}

export default CustomFlex