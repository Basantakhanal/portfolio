import { sendMail } from "../utils/sendMail.js";

export const sendContactMail = async (req, res) => {
  const { name, email, service, message } = req.body;

  try {
    await sendMail(name, email, service, message);

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};
