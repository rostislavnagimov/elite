export {}

declare global {
  interface Window {
    showPopup: (type?: string, data?: any) => void
  }
}
