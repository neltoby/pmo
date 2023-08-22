import React, { useState } from 'react'
import { Input, Button, FormControl, FormLabel, Container, Image, Text, Box } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

import { kiaGoAuthAtom } from './state/atoms'
import { hasExpired } from './utils/tokenUtils'
import { Form } from './styled'
import appLogo from '../../assets/recruiter-logo.svg'

const NODE_ENV = process.env.REACT_APP_ENV

const API_URL = NODE_ENV == 'test' ? 'test' : process.env.REACT_APP_KIA_URL || 'https://staging-my-api.recruiter.com'
console.log(API_URL, NODE_ENV)

const AuthIndex: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useRecoilState(kiaGoAuthAtom)
  const history = useHistory()
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const data = await Axios.post(`${API_URL}/auth`, {
        Email: email,
        Password: password,
      })

      setAuth({
        expiresAt: data.data['expires_at'],
        token: data.data['token'],
        kiaGoUrl: API_URL,
      })
    } catch (err) {
      if (err) {
        setShowError(true)
      }
    }
  }

  useEffect(() => {
    if (hasExpired(auth.expiresAt)) return
    history.push('/projects')
  }, [auth, history])

  return (
    <Container centerContent={true}>
      <Box>
        <Image
          src={appLogo}
          onClick={() => {
            // @ts-ignore
            window.location.href = '/login'
          }}
        />
        <Text marginY={5} fontSize={'14px'}>
          Log into your MyRecruiter™️ account.
        </Text>
      </Box>
      <Form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel fontSize={'14px'} htmlFor="login-email">
            Email
          </FormLabel>
          <Input fontSize={'14px'} id="login-email" type="text" onChange={(e) => setEmail(e.target.value)} />
          <FormLabel fontSize={'14px'} htmlFor="login-password">
            Password
          </FormLabel>
          <Input fontSize={'14px'} id="login-password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button fontSize={'14px'} type="submit">
            Login
          </Button>
          {showError && (
            <Text marginY={5} fontSize={'14px'} color={'red'}>
              Invalid username or password. Please try again. <br />
              <em>
                If you continue to experience issues logging in, email us at:
                <a href="mailto:login@support.recruiter.com"> login@support.recruiter.com</a>
              </em>
            </Text>
          )}
        </FormControl>
      </Form>
    </Container>
  )
}

export default AuthIndex
