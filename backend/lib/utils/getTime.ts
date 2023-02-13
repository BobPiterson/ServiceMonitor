export const getTime = (): string => new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});