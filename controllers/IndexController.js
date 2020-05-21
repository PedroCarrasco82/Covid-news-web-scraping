const scrap = require('../Utils/Scraping');

module.exports = {
    async index(req,res){
        let srapInfo = await scrap.getInfo();
        res.json(srapInfo);
    }
}