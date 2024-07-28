import { PodcastDTO } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async  (): Promise<PodcastDTO> => {
    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: []
    };

    const data = await repositoryPodcast();

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

    responseFormat.body = data;

    return responseFormat;
}