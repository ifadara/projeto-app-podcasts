import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastDTO } from "../models/filter-podcast-model";


export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    
    const content: PodcastDTO = await serviceListEpisodes();

    res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
    res.write(JSON.stringify(content.body))
    res.end();
};


export const getFilterEpisodes = async (
    req: IncomingMessage,
    res:ServerResponse
) => {

    const content: PodcastDTO = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
    res.write(JSON.stringify(content.body));
    res.end();
}