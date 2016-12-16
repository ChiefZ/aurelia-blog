import { expect } from "chai";
import * as Mocha from "mocha";

import { IBlogConfig } from "../../src/models/blog-config";
import { BlogService } from "../../src/services/blog-service";

describe("blog service default config", () =>
{
    let blogService: BlogService;
    let expectedDefaultConfig: IBlogConfig;

    beforeEach(() =>
    {
        blogService = new BlogService();
        expectedDefaultConfig = {
            defaultRecent: 10,
            staticStoreConfig: {
                basePath: "blog",
                multiLanguage: false,
                tagsFile: "tags.json",
            },
            storeType: "static",
        };
    });

    it("should be generated if none is provided", () =>
    {
        expect(blogService.options).to.be.ok;
    });

    it("should have the expected values", () =>
    {
        expect(blogService.options).to.be.deep.equal(expectedDefaultConfig);
    });

    it("should cause blog service to initialize default static store", () =>
    {
        expect(blogService.store).to.be.ok;
        expect(blogService.store.type).to.be.eq("static");
    });
});
