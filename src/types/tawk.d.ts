export {};

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      hideWidget?: () => void;
      maximize?: () => void;
    };
  }
}
