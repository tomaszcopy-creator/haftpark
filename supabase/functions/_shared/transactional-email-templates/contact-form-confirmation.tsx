import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "haftpark"
const BRAND_COLOR = "#862020"

interface ContactConfirmationProps {
  name?: string
}

const ContactFormConfirmationEmail = ({ name }: ContactConfirmationProps) => (
  <Html lang="pl" dir="ltr">
    <Head />
    <Preview>Potwierdzenie otrzymania wiadomości — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Dziękujemy, ${name}!` : 'Dziękujemy za kontakt!'}
        </Heading>
        <Text style={text}>
          Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe — zazwyczaj w ciągu 24 godzin.
        </Text>
        <Text style={text}>
          Jeśli Twoja sprawa jest pilna, zadzwoń do nas: <strong>+48 510 751 008</strong>
        </Text>
        <Hr style={divider} />
        <Text style={footer}>
          Pozdrawiamy, Zespół {SITE_NAME}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormConfirmationEmail,
  subject: `Potwierdzenie otrzymania wiadomości — ${SITE_NAME}`,
  displayName: 'Potwierdzenie kontaktu dla klienta',
  previewData: { name: 'Jan Kowalski' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Segoe UI', Arial, sans-serif" }
const container = { padding: '30px 25px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: BRAND_COLOR, margin: '0 0 24px' }
const text = { fontSize: '15px', color: '#1a1a1a', margin: '0 0 18px', lineHeight: '1.6' }
const divider = { borderColor: '#e8e8e8', margin: '8px 0 18px' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0', lineHeight: '1.4' }
