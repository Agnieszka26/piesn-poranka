'use server'

import { createSupabaseServerClient } from './helpers/supabase-server'
import { OfferItem } from './types'


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

export async function updateOfferAction(input: OfferItem) {
  const supabase = createSupabaseServerClient()

  const { id, ...data } = input

  const { error } = await supabase
    .from('offers')
    .update(data)
    .eq('id', id)

  if (error) {
    console.error('updateOfferAction error:', error)
    throw new Error('Nie udało się zapisać zmian')
  }
}

 export const changeStatusAction = async (id: number, status: "disabled" | "selected") => {
     const supabase = createSupabaseServerClient()
    const { error } = await supabase
      .from("hero_background")
      .update({ status: status })
      .eq("id", id)
      .select();
  if (error) {
    console.error('updateOfferAction error:', error)
    throw new Error('Nie udało się zapisać zmian')
  }
  };