import { API } from "../api";

export class Stream extends API {
    private bj_id: string;
    private stream_no: number;

    constructor(bj_id: string, stream_no: number) {
        super(`https://live.afreecatv.com/afreeca/player_live_api.php?bjid=${bj_id}`);
        this.bj_id = bj_id;
        this.stream_no = stream_no;
    }

    public async getLive(
        type = 'live',
        password = '',
        player_type = 'html15',
        stream_type = 'common',
        quality = 'hd',
        mode = 'landing',
        from_api = 0,
    ): Promise<LiveResponse> {
        const params = new URLSearchParams();
        params.append('bid', this.bj_id);
        params.append('bno', this.stream_no.toString());
        params.append('type', type);
        params.append('pwd', password);
        params.append('player_type', player_type);
        params.append('stream_type', stream_type);
        params.append('quality', quality);
        params.append('mode', mode);
        params.append('from_api', from_api.toString());
        return (await this.post('', params)).data;
    }

    public async getAID(
        type = 'aid',
        password = '',
        player_type = 'html15',
        stream_type = 'common',
        quality = 'hd',
        mode = 'landing',
        from_api = 0,
    ): Promise<AIDResponse> {
        const params = new URLSearchParams();
        params.append('bid', this.bj_id);
        params.append('bno', this.stream_no.toString());
        params.append('type', type);
        params.append('pwd', password);
        params.append('player_type', player_type);
        params.append('stream_type', stream_type);
        params.append('quality', quality);
        params.append('mode', mode);
        params.append('from_api', from_api.toString());
        const { data } = await this.post('', params);
        return data;
    }
}

export interface LiveResponse {
    CHANNEL: {
        geo_cc: string
        geo_rc: string
        acpt_lang: string
        svc_lang: string
        ISSP: number
        LOWLAYTENCYBJ: number
        VIEWPRESET: string[]
        RESULT: number
        PBNO: string
        BNO: string
        BJID: string
        BJNICK: string
        BJGRADE: number
        STNO: string
        ISFAV: string
        CATE: string
        CPNO: number
        GRADE: string
        BTYPE: string
        CHATNO: string
        BPWD: string
        TITLE: string
        BPS: string
        RESOLUTION: string
        CTIP: string
        CTPT: string
        VBT: string
        CHIP: string
        CHPT: string
        CHDOMAIN: string
        GWIP: string
        GWPT: string
        STYPE: string
        CDN: string
        RMD: string
        ORG: string
        MDPT: string
        BTIME: number
        DH: number
        PCON: number
        PCON_TIME: number
        PCON_MONTH: string[]
        FTK: string
        BPCBANNER: boolean
        BPCTIMEBANNER: boolean
        BPCPOSTROLL: string
        BPCPREROLL: string
        MIDROLL: {
            VALUE: string
            OFFSET_START_TIME: number
            OFFSET_END_TIME: number
        }
        PREROLLTAG: string
        POSTROLLTAG: string
        BJAWARD: boolean
        BJAWARDWATERMARK: boolean
        BJAWARDYEAR: string
        GEM: boolean
    }
}


export interface AIDResponse {
    CHANNEL: {
        AID: string;
        RESULT: number;
    };
}