import { IStaticStoreConfig } from "./static-store-config";

export interface IBlogConfig
{
    storeType: string;

    defaultRecent: number;

    staticStoreConfig?: IStaticStoreConfig;
}
