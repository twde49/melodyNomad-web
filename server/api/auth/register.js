import { registerUser } from "~/services/authService";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, lastName, email, password } = body;
    
    const user = await registerUser(name, lastName, email, password);
    return { user, success: true };
  } catch (error) {
    return {
      success: false,
      statusCode: 400,
      message: error.message
    };
  }
});