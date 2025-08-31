exports.handleContactForm = (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact Received:", { name, email, message });
    res.status(200).json({ message: 'Contact form submitted successfully' });
};