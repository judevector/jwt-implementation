import { getEnvVariable } from "./helper";
import { signJwt, verifyJwt } from "./token_hs256";

const user = {
  id: "3894stve8376gdhdj663h",
  name: "Admin",
  email: "admin@admin.com",
};

// Sign the JWT
const token = signJwt(
  { sub: user.id },
  {
    expiresIn: `${getEnvVariable("JWT_EXPIRES_IN")}m`,
  }
);

console.log({ token });

// Verify the JWT
const payload = verifyJwt<{ sub: string }>(token);
if (payload) {
  console.log("✅Token is valid");
} else {
  console.error("🔥 Token is invalid or user doesn't exists");
}
