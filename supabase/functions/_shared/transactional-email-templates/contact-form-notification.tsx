import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "haftpark"
const BRAND_COLOR = "#862020" // hsl(0, 65%, 33%)

interface ContactNotificationProps {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const ContactFormNotificationEmail = ({ name, email, phone, message }: ContactNotificationProps) => (
  <Html lang="pl" dir="ltr">
    <Head />
    <Preview>Nowe zapytanie od {name || 'klienta'} — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nowe zapytanie z formularza</Heading>
        <Text style={label}>Imię i nazwisko</Text>
        <Text style={value}>{name || '—'}</Text>
        <Text style={label}>Adres e-mail</Text>
        <Text style={value}>{email || '—'}</Text>
        <Text style={label}>Telefon</Text>
        <Text style={value}>{phone || '—'}</Text>
        <Hr style={divider} />
        <Text style={label}>Wiadomość</Text>
        <Text style={messageText}>{message || '—'}</Text>
        <Hr style={divider} />
        <Text style={footer}>
          Ta wiadomość została wysłana automatycznie z formularza kontaktowego na stronie {SITE_NAME}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) => `Nowe zapytanie od ${data.name || 'klienta'} — ${SITE_NAME}`,
  to: 'haftpark@onet.pl',
  displayName: 'Powiadomienie o zapytaniu z formularza',
  previewData: { name: 'Jan Kowalski', email: 'jan@example.com', phone: '+48 123 456 789', message: 'Chciałbym zamówić haft na koszulkach firmowych — 50 sztuk.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Segoe UI', Arial, sans-serif" }
const container = { padding: '30px 25px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: BRAND_COLOR, margin: '0 0 24px' }
const label = { fontSize: '12px', fontWeight: '600' as const, color: '#888888', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 4px' }
const value = { fontSize: '15px', color: '#1a1a1a', margin: '0 0 18px', lineHeight: '1.4' }
const messageText = { fontSize: '15px', color: '#1a1a1a', margin: '0 0 18px', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const }
const divider = { borderColor: '#e8e8e8', margin: '8px 0 18px' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0', lineHeight: '1.4' }
