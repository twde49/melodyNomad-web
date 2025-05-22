import { loginUser } from "~/services/authService";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password } = body;
    
    const user = await loginUser(email, password);
    return { user, success: true };
  } catch (error) {
    return {
      success: false,
      statusCode: 401,
      message: error.message
    };
  }
});