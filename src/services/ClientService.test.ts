import { ClientModel } from "../models/models";
import { getClientbyId, getclientList } from "./ClientService";

const mockData = {"email": "Brenna.Waters@hotmail.com", "events": [{"id": "a836484b-62c4-4428-9b85-5a428c879a1b", "startDateTime": "2023-09-07T17:02:25.637Z", "title": "valid times of"}, {"id": "c064ac1c-d394-4f6b-9403-23282cfe9a71", "startDateTime": "2023-09-07T03:39:17.156Z", "title": "supposing amidst yippee"}, {"id": "1e821867-c3cb-418c-8283-dbb4df8a1f6d", "startDateTime": "2023-09-07T16:25:43.845Z", "title": "jovially throughout set"}, {"id": "b0f8e198-aefc-4520-8f2b-e270e40de634", "startDateTime": "2023-09-07T10:33:32.178Z", "title": "digestion why bemoan"}, {"id": "a98c9488-f01c-476b-a807-3ae371997ca5", "startDateTime": "2023-09-07T08:09:31.784Z", "title": "sink blaring netbook"}, {"id": "911da7e2-c4cd-48bc-9318-ae888dccbd92", "startDateTime": "2023-09-07T09:08:11.456Z", "title": "of unique medium"}, {"id": "5b25f27e-36cc-4712-8110-73d3d34c8037", "startDateTime": "2023-09-07T17:53:07.084Z", "title": "above knowing prove"}, {"id": "72b46999-00a4-4539-b8a5-1a50bb2d737d", "startDateTime": "2023-09-06T21:48:04.126Z", "title": "suggestion that hm"}, {"id": "dcdfedd2-04f1-4ee5-a95c-be47e25cbf23", "startDateTime": "2023-09-06T23:17:21.098Z", "title": "anenst but bill"}, {"id": "004380c1-9cc1-4798-b25a-6a40fb1b5790", "startDateTime": "2023-09-07T04:45:15.963Z", "title": "kind magnitude pleasing"}], "firstName": "Solon", "id": "57fc45fb-9aa8-4af8-b0a4-d4f028c2c354", "lastName": "Rippin"}

describe(('Client Service Test'), () => {
    it('getClientbyId Test', () => {
        const Client: ClientModel = getClientbyId('57fc45fb-9aa8-4af8-b0a4-d4f028c2c354')
        expect(Client).toEqual(mockData);
    });

    it('getclientList Test', () => {
        const Clients: ClientModel[] = getclientList()
        expect(Clients).toBeInstanceOf(Array);
    });
})