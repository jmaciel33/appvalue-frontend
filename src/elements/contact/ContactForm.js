import React , {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Ótimo! Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato com você em breve. Agradecemos pelo seu interesse e aguardamos a oportunidade de ajudá-lo(a)</p>
    )
}

function ContactForm({props , formStyle}) {
    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_187wf28',
            'template_7hm83xn',
            e.target,
            'DJUV0_hAUcawuY05S'
        )
        .then((result) => {
            console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input
                type="text"
                name="fullname"
                placeholder="Your Name"
                required
                />
            </div>

            <div className="form-group">
                <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                />
            </div>


            <div className="form-group">
                <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                />
            </div>

            <div className="form-group">
                <textarea
                name="message"
                placeholder="Your Message"
                required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Enviar Agora</button>
            </div>

            <div className="form-group">
                {result ? <Result /> : null}
            </div>
        </form>
    )
}
export default ContactForm;
