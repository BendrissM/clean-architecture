export type UserName = string;
export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
  preferences: Ingredient[];
  allergies: Ingredient[];
};

// check if a given user is allegic to a given ingredient
export const hasAllergy = (user: User, ingredient: Ingredient): boolean =>
  user.allergies.includes(ingredient);

// check if a given user has preference to a given ingredient
export const hasPreference = (user: User, ingredient: Ingredient): boolean =>
  user.preferences.includes(ingredient);
