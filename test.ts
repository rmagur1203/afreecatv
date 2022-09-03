import axios from "axios";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

import BJ from "./bj";
import { Stream } from "./stream";
import { StreamManager, STREAM_TYPE_FOR_STREAM_MANAGER } from "./stream/manager";

// new BJ("moonwol0614").getVods({
//     page: 1,
//     per_page: 20,
//     orderby: 'reg_date',
//     fields: [],
//     created: true,
//     catchCreated: true,
// }).then(console.log);

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

(async () => {
    const broadcast = await new BJ("pookygamja")
        .getProfile()
        .then(x => x.broad)
        .catch(() => console.error("stream not found"))
    if (!broadcast) return;
    console.log(broadcast);
    const stream = new Stream(broadcast.user_id, broadcast.broad_no);
    const live = await stream.getLive();
    const aid = await stream.getAID();
    console.log(live, aid);
    console.log(live.CHANNEL.VIEWPRESET);
    const streamType = STREAM_TYPE_FOR_STREAM_MANAGER.HD;
    const hls = await new StreamManager(live.CHANNEL.RMD).getStreamHlsUrl(
        broadcast.broad_no,
        'common',
        streamType,
        aid.CHANNEL.AID
    );

    ffmpeg(hls.url + `?aid=${hls.params.aid}`, { timeout: 432000 })
        .inputOption('-headers', `Referer: ${hls.headers.Referer}`)
        .outputFormat('hls')
        .output(`output/${broadcast.user_id}-${streamType}.m3u8`)
        .on('end', () => {
            console.log('finished');
        }).run();
})();