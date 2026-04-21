'use client'

import { useState } from 'react'
import { supabase } from '../dashboard/helpers/supabase-browser'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        shouldCreateUser: false
      },
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
  }

  return (
    <main style={{ maxWidth: 400, margin: '4rem auto' }}>
      <h1>Zaloguj się</h1>

      {sent ? (
        <p>📬 Sprawdź maila i kliknij link do logowania</p>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Wysyłanie…' : 'Wyślij link'}
          </button>
        </form>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  )
}
