import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastDTO } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastDTO> => {

    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: []
    };

    const queryString = podcastName?.split("?p=")[1] ?? "";

    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

    responseFormat.body = data;

    return responseFormat;
}