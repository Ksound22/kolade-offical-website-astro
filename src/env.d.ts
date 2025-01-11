interface ImportMetaEnv {
  readonly GOOGLE_API_KEY: string;
  readonly FORM_API_ID: string;
  readonly GOOGLE_SITE_VERIFICATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
