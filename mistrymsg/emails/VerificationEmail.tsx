import {
    Html,
    Head,
    Preview,
    Body,
    Section,
    Text,
    Font,
    Button,
    Row
} from '@react-email/components';

interface VerificationEmailProps {
    userName: string;
    otp: string;
}

export default function VerificationEmail({ userName, otp }: VerificationEmailProps) {
    return (
        <Html>
            <Head>
                <title>Verification Email</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Arial"
                    webFont={{
                        url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
                        format: 'woff2'
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Arial"
                    webFont={{
                        url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
                        format: 'woff2'
                    }}
                    fontWeight={700}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Verify your email on MistryMsg</Preview>
            <Body style={main}>
                <Section style={container}>
                    <Text style={heading}>Welcome to MistryMsg, {userName}!</Text>
                    <Text style={paragraph}>
                        Thank you for signing up. Please use the following One-Time Password (OTP) to verify your email address:
                    </Text>
                    <Row style={otpContainer}>
                        <Text style={otp}>{otp}</Text>
                    </Row>
                    <Text style={paragraph}>
                        This OTP is valid for the next 10 minutes. If you did not request this, please ignore this email.
                    </Text>
                    <Text style={footer}>Best regards,</Text>
                    <Text style={footer}>The MistryMsg Team</Text>
                </Section>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: '#f4f4f4',
    fontFamily: 'Roboto, Arial, sans-serif',
    margin: 0,
    padding: 0
};

const container = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '40px auto',
    maxWidth: '600px',
    padding: '20px'
};

const heading = {
    color: '#333333',
    fontSize: '24px',
    fontWeight: '700' as const,
    marginBottom: '20px',
    textAlign: 'center' as const
};

const paragraph = {
    color: '#555555',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '20px'
};

const otpContainer = {
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    marginBottom: '20px',
    padding: '10px',
    textAlign: 'center' as const
};

const otp = {
    color: '#000000',
    fontSize: '32px',
    fontWeight: '700' as const,
    letterSpacing: '4px'
};

const footer = {
    color: '#777777',
    fontSize: '14px',
    lineHeight: '20px',
    marginTop: '10px',
    textAlign: 'center' as const
};
