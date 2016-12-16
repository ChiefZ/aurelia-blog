import { IPost } from "../models/post";
import { ITagStats } from "../models/tag-stats";

export abstract class BaseStoreService
{
    public abstract type: string;

    public abstract getTags(): ITagStats[];

    public abstract getLatestPosts(limit?: number): IPost[];
}
