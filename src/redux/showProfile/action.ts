export const SHOW_PROFILE: string = "SHOW_PROFILE";

export const showProfileAction = (
  value: boolean
): { type: string; payload: boolean } => {
  return {
    type: SHOW_PROFILE,
    payload: value,
  };
};
