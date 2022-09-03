import { API } from "../api";
import { VodSearchParams } from "./vod";

export default class BJ extends API {
    private id: string;
    
    constructor(id: string) {
        super(`https://bjapi.afreecatv.com/api/${id}/`);
        this.id = id;
    }

    public async getProfile(): Promise<ProfileResponse> {
        const { data } = await this.get('station');
        return data;
    }

    public async getVods(options: VodSearchParams) {
        const { data } = await this.get('vods/user', {
            page: options.page,
            per_page: options.per_page,
            orderby: options.orderby,
            field: options.fields.join(','),
            created: options.created,
            catchCreated: options.catchCreated,
            keyword: options.keyword,
            months: options.months
        });
        return data;
    }
}

export interface ProfileResponse {
    profile_image: string
    station: Station
    broad: Broadcast
    starballoon_top: StarballoonTop[]
    sticker_top: StickerTop[]
    subscription: {
        count: number
    }
    is_favorite: boolean
    is_subscription: boolean
    is_best_bj: boolean
    is_partner_bj: boolean
    is_sports_bj: boolean
    is_owner: boolean
    is_manager: boolean
    is_notice: boolean
    is_adsence: boolean
    is_mobile_push: boolean
    is_ppv_bj: boolean
    subscribe_visible: string
    country: string
}

export interface Station {
    display: {
        main_type: string
        title_type: string
        title_text: string
        profile_text: string
        skin_type: number
        skin_no: number
        title_skin_image: string
    }
    groups: Group[]
    menus: Menu[]
    upd: {
        station_no: number
        user_id: string
        asp_code: number
        fan_cnt: number
        today0_visit_cnt: number
        today1_visit_cnt: number
        total_visit_cnt: number
        today0_ok_cnt: number
        today1_ok_cnt: number
        today0_fav_cnt: number
        today1_fav_cnt: number
        total_ok_cnt: number
        total_view_cnt: number
    }
    vods: Vod[]
    sns: SNS[]
    broad_start: string
    grade: number
    jointime: string
    station_name: string
    station_no: number
    station_title: string
    total_broad_time: number
    user_id: string
    user_nick: string
    active_no: number
}

export interface Group {
    idx: number
    group_no: number
    info: {
        group_name: string
    }
}

export interface Menu {
    bbs_no: number
    station_no: number
    auth_no: number
    w_auth_no: number
    display_type: number
    rnum: number
    line: number
    indention: number
    name: string
    name_font: number
    main_view_yn: number
    view_type: number
}

export interface Vod {
    bbs_no: number
    station_no: number
    auth_no: number
    w_auth_no: number
    display_type: number
    rnum: number
    line: number
    indention: number
    name: string
    name_font: number
    main_view_yn: number
    view_type: number
}

export interface SNS {
    id: number
    user_id: string
    type: number
    channel_id: string
    playlist_id: string
    title: string
    followers: number
    state: number
    expire_at: string
    created_at: string
    updated_at: string
}

export interface Broadcast {
    user_id: string
    broad_no: number
    broad_title: string
    current_sum_viewer: number
    broad_grade: number
    is_password: boolean
}

export interface StarballoonTop {
    user_id: string
    user_nick: string
    profile_image: string
}

export interface StickerTop {
    user_id: string
    user_nick: string
    profile_image: string
}