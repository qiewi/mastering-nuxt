import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);
    event.context.user = user;
  } catch (error) {
    // No authenticated session - set user to null
    // Let individual routes handle authentication requirements
    event.context.user = null;
  }
});
