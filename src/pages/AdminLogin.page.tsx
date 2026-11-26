import { useState } from 'react';
import { IconEye, IconEyeOff, IconLock, IconToolsKitchen2, IconUser } from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
  useComputedColorScheme,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens, neumorphicTokens } from '@/styles/neumorphic';

/**
 * ELEMENT: Admin Login Page
 * Identity: Themed authentication gate matching the MamaKitchen neumorphic design system.
 *
 * Security model:
 *   - Credentials are POSTed to /api/admin-auth (a Vercel Edge Function).
 *   - The Edge Function validates against server-side env vars (ADMIN_USER, ADMIN_PASS).
 *   - On success, the server sets an HttpOnly, SameSite=Strict, Secure cookie.
 *   - The cookie is NEVER readable by JavaScript (XSS-safe).
 *   - The Edge Middleware (middleware.ts) blocks /admin routes without a valid cookie.
 *
 * Local development note:
 *   The /api/admin-auth endpoint requires `vercel dev` to run locally.
 *   Plain `bun run dev` does NOT start the Vercel Edge Functions.
 */
export function AdminLoginPage() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  const { isArabic } = useLanguage();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  /* -------------------------------------------------------------------------
   * Submit credentials to the server-side Edge Function.
   * On success: the server sets an HttpOnly cookie and we navigate to /admin.
   * The page navigates via window.location.href so the browser sends the new
   * cookie on the next request, which the middleware can then verify.
   * -------------------------------------------------------------------------*/
  const handleLogin = async () => {
    if (!username || !password) {
      setError(isArabic ? 'الرجاء ملء جميع الحقول' : 'Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'same-origin', // ensure cookie is stored
      });

      if (response.ok) {
        sessionStorage.setItem('mama_admin_session', '1');
        // Hard navigation so the browser sends the new HttpOnly cookie
        // and the middleware can verify it on the /admin route
        window.location.href = '/admin';
      } else {
        const data = (await response.json()) as { error?: string };
        if (response.status === 500) {
          setError(isArabic ? 'الخادم غير مهيأ. تواصل مع المطور.' : 'Server is not configured. Contact the developer.');
        } else {
          setError(data.error ?? (isArabic ? 'بيانات خاطئة' : 'Invalid credentials'));
        }
      }
    } catch {
      setError(
        isArabic
          ? 'تعذّر الاتصال بالخادم. تأكد من الاتصال وأعد المحاولة.'
          : 'Could not reach the server. Check your connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  /* Surface colors from the shared design token system */
  const pageBg = isDark ? '#1a110c' : brandTokens.cream;
  const cardBg = isDark ? neumorphicTokens.surfaces.card.dark : neumorphicTokens.surfaces.card.light;
  const cardShadow = isDark
    ? neumorphicTokens.shadows.card.dark.resting
    : neumorphicTokens.shadows.card.light.resting;
  const textMuted = isDark ? '#C9A880' : '#7a5235';
  const textMain = isDark ? '#FFF9F0' : '#2A170A';

  return (
    /* ELEMENT: Full-page login backdrop */
    <Box
      style={{
        minHeight: '100vh',
        background: pageBg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        transition: 'background-color 150ms ease',
      }}
    >
      {/* ELEMENT: Brand header above the login card */}
      <Stack align="center" gap="xs" mb="xl">
        <Group gap={8} align="center">
          <IconToolsKitchen2 size={32} stroke={1.6} style={{ color: brandTokens.red }} />
          <Title
            order={1}
            style={{ color: brandTokens.red, fontWeight: 900, letterSpacing: '-0.5px' }}
          >
            Mama Kitchen
          </Title>
        </Group>
        <Text
          size="sm"
          fw={500}
          style={{ color: textMuted, letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          {isArabic ? 'لوحة تحكم المطعم' : 'Restaurant Admin Panel'}
        </Text>
      </Stack>

      {/* ELEMENT: Neumorphic login card */}
      <Paper
        p="xl"
        radius={neumorphicTokens.radii.modal}
        style={{
          width: '100%',
          maxWidth: 400,
          background: cardBg,
          boxShadow: cardShadow,
          border: isDark ? 'none' : '1px solid rgba(0,0,0,0.04)',
        }}
      >
        {/* Card heading */}
        <Stack gap="xs" mb="lg">
          <Group gap={8} align="center">
            <IconLock size={18} stroke={1.8} style={{ color: brandTokens.gold }} />
            <Text fw={800} size="lg" style={{ color: textMain }}>
              {isArabic ? 'تسجيل الدخول' : 'Sign In'}
            </Text>
          </Group>
          <Text size="xs" style={{ color: textMuted }}>
            {isArabic
              ? 'أدخل بيانات الدخول الخاصة بك للمتابعة'
              : 'Enter your credentials to continue'}
          </Text>
        </Stack>

        <Stack gap="md">
          {/* Username field */}
          <TextInput
            label={isArabic ? 'اسم المستخدم' : 'Username'}
            placeholder={isArabic ? 'أدخل اسم المستخدم' : 'Enter username'}
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            leftSection={<IconUser size={16} stroke={1.8} style={{ color: brandTokens.gold }} />}
            dir={isArabic ? 'rtl' : 'ltr'}
            styles={{
              label: { color: textMuted, fontWeight: 600, marginBottom: 4 },
              input: {
                background: isDark ? '#231812' : '#fff',
                border: isDark ? 'none' : '1px solid rgba(0,0,0,0.08)',
                color: textMain,
              },
            }}
          />

          {/* Password field with show/hide toggle */}
          <TextInput
            label={isArabic ? 'كلمة المرور' : 'Password'}
            placeholder={isArabic ? 'أدخل كلمة المرور' : 'Enter password'}
            type={showPass ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            leftSection={<IconLock size={16} stroke={1.8} style={{ color: brandTokens.gold }} />}
            rightSection={
              <ActionIcon
                variant="subtle"
                size="sm"
                onClick={() => setShowPass((v) => !v)}
                aria-label={showPass ? 'Hide password' : 'Show password'}
                style={{ color: textMuted }}
              >
                {showPass ? <IconEyeOff size={15} stroke={1.8} /> : <IconEye size={15} stroke={1.8} />}
              </ActionIcon>
            }
            dir={isArabic ? 'rtl' : 'ltr'}
            styles={{
              label: { color: textMuted, fontWeight: 600, marginBottom: 4 },
              input: {
                background: isDark ? '#231812' : '#fff',
                border: isDark ? 'none' : '1px solid rgba(0,0,0,0.08)',
                color: textMain,
              },
            }}
          />

          {/* Inline error message */}
          {error && (
            <Text size="xs" fw={600} style={{ color: '#e03131' }}>
              {error}
            </Text>
          )}

          {/* Submit button — full-width maroon CTA (exempt from neumorphism per design system) */}
          <Button
            fullWidth
            size="md"
            radius="md"
            loading={loading}
            onClick={handleLogin}
            style={{
              background: `linear-gradient(135deg, ${brandTokens.red}, #a52020)`,
              border: 'none',
              fontWeight: 800,
              letterSpacing: '0.03em',
              marginTop: 4,
            }}
          >
            {isArabic ? 'دخول' : 'Sign In'}
          </Button>

          {/* Back to menu link */}
          <Center>
            <Button
              variant="subtle"
              size="xs"
              color="gray"
              onClick={() => navigate('/')}
            >
              {isArabic ? '← العودة إلى القائمة' : '← Back to menu'}
            </Button>
          </Center>
        </Stack>
      </Paper>

      {/* Footer */}
      <Center mt="xl">
        <Text size="xs" style={{ color: textMuted, opacity: 0.5 }}>
          {isArabic ? 'مطبخ ماما — منظومة الإدارة' : 'MamaKitchen — Admin System'}
        </Text>
      </Center>
    </Box>
  );
}
