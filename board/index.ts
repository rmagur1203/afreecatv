import { API } from "../api";

export const CATEGORY = {
    "토크/캠방": {
        "cate_no": "00130000",
        "action_type": "2"
    }
}

export class Board extends API {
    constructor() {
        super('https://live.afreecatv.com/api/main_board_list_api.php');
    }


}