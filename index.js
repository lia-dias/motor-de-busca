const {Resource, HashList, SearchEngine, HashMap} = require("./dist");

const UncannyXMen = new Resource(1, "Uncanny X-Men");
const AmazingSpiderMan = new Resource(2, "Amazing Spider Man");

const comics = new HashMap();
comics.addKeyValue(1, UncannyXMen);
comics.addKeyValue(2, AmazingSpiderMan);

const hashList = new HashList();

hashList.concatPair("uncanny", UncannyXMen);
hashList.concatPair("x-men", UncannyXMen);
hashList.concatPair("xmen", UncannyXMen);
hashList.concatPair("x", UncannyXMen);
hashList.concatPair("men", UncannyXMen);
hashList.concatPair("michael", UncannyXMen);
hashList.concatPair("bendis", UncannyXMen);

hashList.concatPair("amazing", AmazingSpiderMan);
hashList.concatPair("spider-man", AmazingSpiderMan);
hashList.concatPair("spiderman", AmazingSpiderMan);
hashList.concatPair("spider", AmazingSpiderMan);
hashList.concatPair("man", AmazingSpiderMan);
hashList.concatPair("michael", AmazingSpiderMan);
hashList.concatPair("bendis", AmazingSpiderMan);
hashList.concatPair("miles", AmazingSpiderMan);
hashList.concatPair("morales", AmazingSpiderMan);

const searchEngine = new SearchEngine(hashList);

console.log(
    searchEngine.calculateResourcesRank(["miles", "morales", "bendis", "uncanny"]).map((resourceRank, index) => {
        return {
            comic: comics.getValue(resourceRank.key).valor,
            rank: index + 1
        }
    })
);