import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '../../dashboard/helpers/supabase-server'

export async function GET(request: Request) {
    console.log('auth callback')
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${origin}/login`)
  }

  const supabase = createSupabaseServerClient()

  const { error } = await (await supabase).auth.exchangeCodeForSession(code)

  if (error) {
    console.error('Auth callback error:', error)
    return NextResponse.redirect(`${origin}/login`)
  }

  // ✅ SESSION ZAPISANA W COOKIES
  return NextResponse.redirect(`${origin}/dashboard`)
}
