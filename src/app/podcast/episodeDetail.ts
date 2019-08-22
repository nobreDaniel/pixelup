export interface EpisodeDetail {
  analytics?: Object;
  audio_content_type?: string;
  audio_file?: Object;
  audio_file_name?: string;
  audio_file_path?: string;
  audio_file_path_tc?: string;
  audio_file_size?: number;
  audio_file_url?: string;
  authors?: Object;
  created_at?: string;
  custom_url?: string;
  dashboard_link?: string;
  delete?: null;
  description?: string;
  duration?: number;
  enclosure_url?: string;
  episode_url?: string;
  guid?: string;
  href?: string;
  id?: string;
  image_path?: string;
  image_url?: string;
  is_explicit?: boolean;
  is_hidden?: boolean;
  is_published?: boolean;
  keywords?: Object;
  legacy_id?: null;
  long_description?: string;
  number?: number;
  podcast?: Object;
  publish?: null;
  published_at?: Date;
  recast_color?: null;
  recast_image?: null;
  recast_image_url?: null;
  schedule?: null;
  scheduled_for?: null;
  season?: Object;
  sign_url?: null;
  slug?: string;
  sponsors?: Object;
  status?: string;
  title?: string;
  token?: string;
  transcription?: null;
  type?: string;
  unschedule?: null;
  update?: null;
  updated_at?: Date;
  upload_complete?: null;
  warnings?: Array<string>;
  waveform_json?: string;
  waveform_pack?: string;
}