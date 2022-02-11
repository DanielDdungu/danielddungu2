import PageAnimation from "../components/layout/PageAnimation";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { init } from "@emailjs/browser";
init("user_h0VARgd2pAxHyyX4fkSLa");

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_31ruo1y",
                "template_kh3sesk",
                form.current,
                "user_h0VARgd2pAxHyyX4fkSLa"
            )
            .then(
                (result) => {
                    toast.success("Email sent successfully");
                },
                (error) => {
                    toast.error("Email not sent");
                }
            );

        e.target.reset();
    };

    return (
        <>
            <Helmet>
                <title>About</title>
                <meta
                    name="description"
                    content="Front End Developer | Javascript | ReactJS | VueJS"
                />
                <link rel="canonical" href="/contact" />
            </Helmet>
            <PageAnimation>
                <div className="hero min-h-screen rounded-box bg-black">
                    <div className="flex-col justify-center hero-content lg:flex-row">
                        <div className="text-center lg:text-lef px-6 lg:w-2/4">
                            <h1 className="mb-5 text-2xl md:text-4xl lg:text-4xl font-bold">
                                Get In Touch
                            </h1>
                            <p className="mb-5 text-justify text-white">
                                <span>
                                    I'd love to hear from you. If you would like
                                    more information about working with me,
                                    please fiil out the form with tthe detailed
                                    description of your project, and I will
                                    respond as soon as possible
                                </span>
                            </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={sendEmail} ref={form}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Name
                                            </span>
                                        </label>
                                        <input
                                            placeholder="Name"
                                            className="input input-bordered bg-base-200"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            placeholder="Email"
                                            className="input input-bordered peer ... bg-base-200"
                                            type="email"
                                            name="email"
                                        />
                                        <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                                            Please provide a valid email
                                            address.
                                        </p>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Subject
                                            </span>
                                        </label>
                                        <input
                                            placeholder="Subject"
                                            className="input input-bordered bg-base-200"
                                            type="text"
                                            name="subject"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">
                                                Message
                                            </span>
                                        </label>
                                        <textarea
                                            className="textarea h-24 textarea-bordered bg-base-200"
                                            placeholder="Message"
                                            name="message"
                                        ></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input
                                            type="submit"
                                            value="Send"
                                            className="btn btn-primary"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </PageAnimation>
        </>
    );
}

export default Contact;
