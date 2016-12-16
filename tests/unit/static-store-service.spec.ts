import { expect } from "chai";
import * as Mocha from "mocha";

import { StaticStoreService } from "../../src/services/static-store-service";

describe("static store service", () =>
{
    let storeService: StaticStoreService;

    beforeEach(() =>
    {
        storeService = new StaticStoreService();
    });

    it("should load zero tags (yet)", () =>
    {
        let tags = storeService.getTags();

        expect(tags).to.be.ok;
        expect(tags.length).to.be.eq(0);
    });

    it("should load zero latest posts (yet)", () =>
    {
        let posts = storeService.getLatestPosts();

        expect(posts).to.be.ok;
        expect(posts.length).to.be.eq(0);
    });
});
