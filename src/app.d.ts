// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  // used for input components
  type InputResponse = {
    error: boolean;
    message: string;
  } | null;

  // used for signed-in users
  type Session = {
    readonly $schema?: string;
    displayName: string;
    id: string;
    role: string;
    steamAvatarUrl: string;
  };

  type Player = {
    readonly $schema?: string;
    country: string;
    country_code: string;
    created_at: string;
    demo_division?: string;
    display_name: string;
    id: string;
    preferred_class: string;
    preferred_launcher: string;
    role: string;
    soldier_division?: string;
    steam_avatar_url: string;
    tempus_id?: number;
  };
}

export {};
