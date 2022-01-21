import axiosMock from "./mocks/axiosMock";
import unsplash from "../services/unsplashRequestService";

it("fetches data from unsplash", async () => {
    axiosMock.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: { results: ["cat.jpg"] }
        })
    );
    const images = await unsplash("cats");

    expect(images).toEqual(["cat.jpg"]);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    
});