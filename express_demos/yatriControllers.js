const studentUsername = async (req, res) => {
    try {
        // const { email, password } = req.body;

        // if (!email || !password) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "No Email or Password provided",
        //     });
        // }

        res.status(200).json({
            success: true,
            message: userExists,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export { studentUsername };
