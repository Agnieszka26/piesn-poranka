'use server'

import { createSupabaseServerClient } from './helpers/supabase-server'

export async function signInAction(formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
     throw new Error('Email jest wymagany')
  }

  const supabase = createSupabaseServerClient()

  const { error } = await (await supabase).auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_HOME_URL}/dashboard`,
    },
  })

  if (error) {
      throw new Error(error.message)
  }
}