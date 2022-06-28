import Resource from "./Resource.js";
import HashList from "./HashList.js";
import HashCount from "./HashCount.js";

export default class SearchEngine<T> {
    private tagsResourceHash: HashList<Resource<T>>;
    constructor( tagsHashList: HashList<Resource<T>>){
        this.tagsResourceHash = tagsHashList;
    };

    calculateResourcesRank( searchTags: Array<string> ) {
        const resourcesCount = new HashCount();
        searchTags.forEach((tag) => {
            const resourcesList = this.tagsResourceHash.getList(tag);
            resourcesList.forEach((resource) => {
                resourcesCount.addKeyCount(resource.id);
            });
        });
        return resourcesCount.getDescendingKeysCount();
    }
}