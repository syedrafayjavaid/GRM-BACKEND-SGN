const express = require("express");
const router = express.Router();

const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,

} = require("../controllers/user");

router.route("/").get(getUsers).post(createUser);
router
    .route("/:id")
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;
