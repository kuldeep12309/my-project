import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setSubmitted(false);
    const { message } = data;

    const whatsappMessage = encodeURIComponent(message);
    const phoneNumber = "918418835697";

    await new Promise((resolve) => setTimeout(resolve, 1000));

    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");

    reset(); 
    setSubmitted(true); 
  };

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h1 className="text-center mb-4">Contact Me</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field - Optional or Removed */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name (optional)
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            {...register("name")}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email (optional)
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>

        {/* Message Field - Required */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            placeholder="Write your message here"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Send on WhatsApp"}
        </button>

        {submitted && (
          <div className="alert alert-success mt-3 text-center" role="alert">
            Message sent successfully on WhatsApp!
          </div>
        )}
      </form>

      <div className="mt-5 text-center">
        <h5>Or reach me at:</h5>
        <p>Email: kuldeepgupta8800@gmail.com</p>
        <p>Phone: +91 8418835697</p>
      </div>
    </div>
  );
};

export default Contact;
