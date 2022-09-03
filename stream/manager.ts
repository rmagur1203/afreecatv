import qs from "qs";
import { API } from "../api";

export const STREAM_MANAGER = {
    CDN_TYPE: {
        GS_CDN_CHROMECAST: "gs_cdn_chromecast",
        GS_CDN_MOBILE_WEB: "gs_cdn_mobile_web",
        GS_CDN_PC_APP: "gs_cdn_pc_app",
        GS_CDN_PC_WEB: "gs_cdn_pc_web",
        KT_CDN: "kt_cdn"
    },
    KEY_TYPE: {
        CHROMECAST: "chromecast",
        COMMON: "common",
        MOBILE_WEB: "mobileweb"
    }
};

export const BITRATE_TYPE = {
    HIGH: 2000,
    LOW: 400,
    NORMAL: 1000
}

export const BROAD_ENDING_TYPE = {
    ADMIN: 3,
    BROKEN: 2,
    KICK_BY_BJ: 7,
    KICK_BY_MANAGER: 8,
    MOVE_BROAD: "move_broad",
    NORMAL: 1,
    QUIT_CHANNEL: 6,
    STOP_SELF: "stop_self"
}

export const BROAD_STATE = {
    AD: "AD",
    BROADING: "BROADING",
    BROAD_END: "BROAD_END",
    INIT: "INIT",
    NON_STOP: "NON_STOP",
    PRE_BROAD_END: "PRE_BROAD_END"
}

export const CDN_TYPE = {
    AWS: "aws_cf",
    AZURE: "azure_cdn",
    GCP: "gcp_cdn",
    GS: "gs_cdn"
}

export const PLAYER_MODE = {
    DASH_BOARD: "dashboard",
    DIRECT: "direct",
    EMBED: "embed",
    INSTALLATION: "installation",
    INSTALLATION_CHAT: "installation_chat",
    INSTALLATION_LIST: "installation_list",
    INSTALLATION_MULTI_VIEW: "installation_multiview",
    LIVE_PLAYER: "live",
    PICA_PLAY: "picaplay"
}

export const QUALITY = {
    AUTO: "AUTO",
    HIGH: "HIGH",
    LOW: "LOW",
    NORMAL: "NORMAL",
    ORIGINAL: "ORIGINAL"
}

export const QUALITY_FOR_CENTER_AND_CHAT = {
    AUTO: "normal",
    HIGH: "high",
    LOW: "low",
    NORMAL: "normal",
    ORIGINAL: "ori"
}

export const STREAM_TYPE_FOR_STREAM_MANAGER = {
    HD: "hd",
    HD2K: "hd2k",
    MASTER: "master",
    ORIGINAL: "original",
    SD: "sd"
}

export const SUPPORTED_LANGUAGE = {
    en_US: 1,
    ja_JP: 2,
    ko_KR: 3,
    th_TH: 6,
    vi_VN: 7,
    zh_CN: 4,
    zh_TW: 5
}

export const URL = {
    BROAD_INFO: "//live.afreecatv.com/afreeca/player_live_api.php",
    HTTP_AFEVENT_LOG_API_URL: "//afevent.afreecatv.com/api/log_api.php",
    HTTP_COLLECTOR_ENV_URL: "//collector1.afreecatv.com/CONFIG/",
    HTTP_COLLECTOR_ENV_URL_DEV: "//tcollector1.afreecatv.com/CONFIG/",
    HTTP_COLLECTOR_ENV_URL_REAL: "//collector1.afreecatv.com/CONFIG/",
    HTTP_COLLECTOR_LOG_URL: "//collector1.afreecatv.com/gather",
    HTTP_COLLECTOR_LOG_URL_DEV: "//sdev1.afreecatv.com/gather?sv=AF",
    HTTP_COLLECTOR_LOG_URL_REAL: "//collector1.afreecatv.com/gather",
    LOCALE_DIR: "//static.afreecatv.com/asset/app/liveplayer/player/dist",
    MOBILE_BROAD_INFO: "//api.m.afreecatv.com/broad/a/watch",
    STREAM_MANAGER: "/broad_stream_assign.html",
    WEB_UV_API_URL: "//analysis.afreecatv.com/_au.js"
}

export const VERSION = {
    MAC_OS: "10_15_6",
    SAFARI: "605.1.15"
}

export const VIDEO_DATA_FOR_AUTO_PLAY_CHECK = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAxVtZGF03gIATGF2YzU3LjY0LjEwMABCIAjBGDgAAAKuBgX//6rcRem95tlIt5Ys2CDZI+7veDI2NCAtIGNvcmUgMTQ4IHIyNzA4IDg2YjcxOTggLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDE2IC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MSByZWY9MyBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgzOjB4MTEzIG1lPWhleCBzdWJtZT03IHBzeT0xIHBzeV9yZD0xLjAwOjAuMDAgbWl4ZWRfcmVmPTEgbWVfcmFuZ2U9MTYgY2hyb21hX21lPTEgdHJlbGxpcz0xIDh4OGRjdD0xIGNxbT0wIGRlYWR6b25lPTIxLDExIGZhc3RfcHNraXA9MSBjaHJvbWFfcXBfb2Zmc2V0PS0yIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MiBrZXlpbnQ9MjUwIGtleWludF9taW49MjUgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAA6ZYiEACv//vZzfAprbbCVLgV292aj5dCS5fsQYPrQABinQSc9Xzd3KigCQgAAUkPKw0EhpTiMjzdDgSEQBGCMHAAABPJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAABAAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAACKXRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAABQAAAAPAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAACgAAAAAAAEAAAAAAaFtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAADIAAAACAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAFMbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABDHN0YmwAAACoc3RzZAAAAAAAAAABAAAAmGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAABQADwAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFkAA3/4QAZZ2QADazZQUH7ARAAAAMAEAAAAwMg8UKZYAEABmjr48siwAAAABBwYXNwAAAAAQAAAAEAAAAYc3R0cwAAAAAAAAABAAAAAQAAAgAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAFHN0c3oAAAAAAAAC8AAAAAEAAAAUc3RjbwAAAAAAAAABAAAARwAAAfN0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAAAQAAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAACAAAAEAAABAAAAAAFrbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAAfQAAACABVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAABFm1pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA2nN0YmwAAABqc3RzZAAAAAAAAAABAAAAWm1wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAAfQAAAAAAANmVzZHMAAAAAA4CAgCUAAgAEgICAF0AVAAAAAAF3AAAAA4oFgICABRWQVuUABoCAgAECAAAAGHN0dHMAAAAAAAAAAQAAAAIAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABxzdHN6AAAAAAAAAAAAAAACAAAAFwAAAAYAAAAYc3RjbwAAAAAAAAACAAAAMAAAAzcAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU3LjU2LjEwMA=='

export class StreamManager extends API {
    constructor(RMD: string) {
        super(RMD);
    }

    public async getStreamBaseUrl(
        broad_no: number,
        stream_type: string,
        quality: string,
    ): Promise<StreamBaseResponse> {
        const { data } = await this.get('broad_stream_assign.html', qs.stringify({
            'return_type': 'gs_cdn_pc_web',
            'use_cors': true,
            'cors_origin_url': 'play.afreecatv.com',
            'broad_key': `${broad_no}-${stream_type}-${quality}-hls`,
            'time': 1e4 * Math.random()
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return data;
    }

    public async getStreamHlsUrl(
        broad_no: number,
        stream_type: string,
        quality: string,
        aid: string,
    ) {
        let base = await (await this.getStreamBaseUrl(broad_no, stream_type, quality)).view_url;
        return {
            url: base,
            params: {
                aid,
            },
            headers: {
                "Referer": "https://play.afreecatv.com/"
            }
        };
    }
}

export interface StreamBaseResponse {
    result: string
    view_url: string
    stream_status: string
}
