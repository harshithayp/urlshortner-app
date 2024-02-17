const express = require("express");
const router = express.Router();
const { generateUrl , findUrl, geturls } = require("../controllers/urlController");

router.post("/urls",generateUrl);
router.get("/:shortId",findUrl);
router.get("/",geturls);

module.exports = router;