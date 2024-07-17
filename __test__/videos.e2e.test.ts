import {SETTINGS} from "../src/settings";
import {req} from "./test-helpers";


describe('/videos', () => {
    it('should get empty array', async () => {
        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200)
        console.log(res.body)
    })
    it('should get not empty array', async () => {
        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200)

        console.log(res.body)
    });
})
