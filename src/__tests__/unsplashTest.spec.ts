import unsplash from "../providers/unsplashRequestProvider";

jest.mock('axios', () => {
    const mAxiosInstance = { get: jest.fn(() => Promise.resolve(["cat.jpg"])) };
    return {
        create: jest.fn(() => mAxiosInstance),
    };
});

describe('unplash', () => {
    it('should call axios and return data', async () => {
        const images = await unsplash.get("search/photos", {
            params: { query: "cats", page: 1, per_page: 1, order_by: 'relevant' }
        });

        expect(images).toEqual(["cat.jpg"]);
    })
});