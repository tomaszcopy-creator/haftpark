/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <Html lang="pl" dir="ltr">
    <Head />
    <Preview>Zresetuj hasło — {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Resetowanie hasła</Heading>
        <Text style={text}>
          Otrzymaliśmy prośbę o zresetowanie hasła do Twojego konta w {siteName}. Kliknij poniższy przycisk, aby ustawić nowe hasło.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Zresetuj hasło
        </Button>
        <Text style={footer}>
          Jeśli nie prosiłeś o reset hasła, zignoruj tę wiadomość. Twoje hasło nie zostanie zmienione.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '20px 25px' }
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: 'hsl(0, 0%, 12%)',
  margin: '0 0 20px',
}
const text = {
  fontSize: '14px',
  color: 'hsl(0, 0%, 45%)',
  lineHeight: '1.5',
  margin: '0 0 25px',
}
const button = {
  backgroundColor: 'hsl(0, 65%, 33%)',
  color: 'hsl(0, 0%, 98%)',
  fontSize: '14px',
  borderRadius: '8px',
  padding: '12px 20px',
  textDecoration: 'none',
}
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
