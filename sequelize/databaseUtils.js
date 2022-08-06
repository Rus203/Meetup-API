import roles from '../roles.js';
import roleServices from '../src/services/roleServices.js';
import tokenServices from '../src/services/tokenServices.js';

export const initRoles = async () => {
  const allRoles = await roleServices.readAll();
  for (const role in roles) {
    if (!allRoles.includes(role)) {
      roleServices.add({ name: roles[role] });
    }
  }
};

// delete fired tokens every 1 day
export const deleteFiredTokens = () => {
  setInterval(async () => {
    await tokenServices.deleteFiredTokens(process.env.EXP_REFRESH * 1000); // ms
  }, 3600 * 24); // sec
};
