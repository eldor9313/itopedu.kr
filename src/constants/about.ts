export const CATEGORY_2 = {
  LANGUAGE_COURSE: "LANGUAGE_COURSE",
  BACHELOR: "BACHELOR",
  MASTER_PHD: "MASTER_PHD",
  OTHER_VISA: "OTHER_VISA",
} as const;

export type CategoryType2 =
  (typeof CATEGORY_2)[keyof typeof CATEGORY_2];