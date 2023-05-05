interface ImportMetaEnv {
  readonly REACT_APP_HOST_URL: string
  readonly REACT_APP_API_URL: string
  readonly REACT_APP_CDN_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
