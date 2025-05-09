export const valueUpdater = <T>(
  updaterOrValue: T | ((old: T) => T),
  ref: { value: T }
) => {
  if (typeof updaterOrValue === "function") {
    ref.value = (updaterOrValue as (old: T) => T)(ref.value);
  } else {
    ref.value = updaterOrValue;
  }
};
