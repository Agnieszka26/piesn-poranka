// import { cookies } from 'next/headers'
export  function createCookies() {
    //  const cookieStore = cookies()
     return  {
      cookies: {
        // async getAll() {
        //   return (await cookieStore).getAll()
        // },
        // setAll(cookiesToSet) {
        //   try {
        //     cookiesToSet.forEach(async ({ name, value, options }) =>
        //       (await cookieStore).set(name, value, options)
        //     )
        //   } catch {
        //     // The `setAll` method was called from a Server Component.
        //     // This can be ignored if you have proxy refreshing
        //     // user sessions.
        //   }
        // },
      },
    }
}