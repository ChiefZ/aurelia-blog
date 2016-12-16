import { BaseStoreService } from "./base-store-service";
import { StaticStoreService } from "./static-store-service";

import { IBlogConfig } from "../models/blog-config";

export class BlogService
{
    public static defaultOptions = {
        defaultRecent: 10,
        staticStoreConfig: {
            basePath: "blog",
            multiLanguage: false,
            tagsFile: "tags.json",
        },
        storeType: "static",
    };

    public store: BaseStoreService;
    public options: IBlogConfig;

    constructor(opts?: IBlogConfig, storeInstance?: BaseStoreService)
    {
        if (!opts || !opts.storeType)
        {
            opts = BlogService.defaultOptions;
        }

        this.options = opts;

        if (storeInstance && storeInstance.type === this.options.storeType)
        {
            this.store = storeInstance;
        }
        else
        {
            switch (opts.storeType)
            {
                case "static":
                    this.store = new StaticStoreService(opts.staticStoreConfig);
                    break;
                default:
                    throw new Error("invalid store type provided");
            }
        }
    }

}
