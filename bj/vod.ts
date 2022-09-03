export interface VodSearchParams {
    page: number;
    per_page: number;
    orderby: 'reg_date' | 'reg_date_asc' | 'read_cnt' | 'comment_cnt' | 'like_cnt';
    fields: ('title' | 'contents' | 'user_nick' | 'user_id' | 'hashtags')[];
    created: boolean;
    catchCreated: boolean;
    keyword?: string;
    months?: string;
}

export interface VodSearchResult {
    data: Vod[];
    links: {
        first: string | null;
        last: string | null;
        next: string | null;
        prev: string | null;
    },
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    }
}

export interface Vod {
    title_no: number;
    station_no: number;
    bbs_no: number;
    board_type: number;
    auth_no: number;
    title_name: string;
    user_nick: string;
    user_id: string;
    profile_image: string;
    photo_cnt: number;
    platform_type: number;
    notice_yn: number;
    comment_yn: number;
    livepost_yn: number;
    share_yn: number;
    search_yn: number;
    ip: string;
    reg_date: string;
    ucc: Ucc;
    count: Count;
    pin?: any;
    copyright: Copyright;
    reserve?: any;
    badge: Badge;
    authority: Authority;
}

export interface Authority {
    is_board_shareable: boolean;
    is_reason_deletable: boolean;
    is_blind_deletable: boolean;
    is_clip_reason_deletable: boolean;
    is_catch_reason_deletable: boolean;
    is_ucc_deletable: boolean;
    is_ucc_updatable: boolean;
    is_pinable: boolean;
    is_pin_fixable: boolean;
    is_pin_cancelable: boolean;
    is_ucc_editable: boolean;
    is_ucc_mid_roll_settable: boolean;
    is_ucc_playlist_addable: boolean;
}

export interface Badge {
    user_id: string;
    bj_id: string;
    is_manager: number;
    is_top_fan: number;
    is_fan: number;
    is_subscribe: number;
    is_support: number;
}

export interface Count {
    like_cnt: number;
    read_cnt: number;
    comment_cnt: number;
    ucc_favorite_cnt: number;
}

export interface Copyright {
    del_flag: string;
    user_id: string;
    user_nick: string;
}

export interface Ucc {
    thumb: string;
    thumb_type: string;
    flag: string;
    ucc_type: string;
    category: number;
    grade: number;
    total_file_duration: number;
    file_type: string;
    auto_delete_remain_hours?: any;
    catchInfo?: any;
}