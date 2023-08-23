import { SafeUrl } from "@angular/platform-browser";

export class InstagramPostModel {
    pk!: number;
    display_url!: string | SafeUrl;
    image_versions2!: {
    candidates: {
      width: number;
      height: number;
      url: string;
    }[];
  };
    video_dash_manifest: any;
    video_url!: string;
    taken_at!: number;
    code!: string;
    comment_count!: number;
    like_count!: number;
    play_count!: number;
    like_and_view_counts_disabled!: boolean;
    media_type!: number;
    caption!: {
    text: string;
  };
    title!: string;
    user!: {
    pk: number;
    username: string;
    full_name: string;
    profile_pic_url: string;
    is_private: boolean;
    is_verified: boolean;
  };
    coauthor_producers!: any[];
    location!: {
    pk: number;
    name: string;
    lng: number;
    lat: number;
    address: string;
    city: string;
  };
    product_type!: string;
    can_viewer_reshare!: boolean;
    is_paid_partnership!: boolean;
    sponsor_tags!: any[];
    clips_metadata: any;
  }
  