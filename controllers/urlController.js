const Url = require("../models/urlModel");
const shortid = require("shortid");

const generateUrl = async(req,res)=>{
    try{
        const originurl = req.body;
        const shortUrl = shortid.generate();
    
        await Url.create({ shortId : shortUrl , originalUrl : originurl.originalUrl });
        res.redirect("/api");

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

const findUrl = async(req,res)=>{
    try{
        const { shortId } = req.params;
        const result = await Url.findOne({shortId});
        res.redirect(result.originalUrl);

    }catch(error){
        console.log(error.message);
        res.status(500).json({ message:error.message});
    }
};

const geturls = async(req,res)=>{
    try{
        const allurls = await Url.find();
        res.render("urlview", { url : allurls});
    }catch(error){
        console.log(error.message);
        res.status(500).json({ message:error.message});
    }
};

module.exports = {
    generateUrl,
    findUrl,
    geturls
};