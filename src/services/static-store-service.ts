import { IPost } from "../models/post";
import { IStaticStoreConfig } from "../models/static-store-config";
import { ITagStats } from "../models/tag-stats";
import { BaseStoreService } from "./base-store-service";

export class StaticStoreService implements BaseStoreService
{
    public type = "static";
    private config: IStaticStoreConfig;

    constructor(config?: IStaticStoreConfig)
    {
        this.config = config;
    }

    public getTags(): ITagStats[]
    {
        return [];
    }

    public getLatestPosts(limit?: number): IPost[]
    {
        return [];
    }
}
